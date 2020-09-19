import { singularize, camelize, capitalize } from "inflection"
import { records, models } from "./modelizer"

// models setup
const modelsReq = require.context("./models", true, /^(.*\.(js$))[^.]*$/im)
modelsReq.keys().forEach(key => {
  const modelName = camelize(key.match(/.\/([\w-]+).js/)[1], true)
  models[modelName] = modelsReq(key).default
})

// serializers setup
let serializers = {}
const serializersReq = require.context(
  "./serializers",
  true,
  /^(.*\.(js$))[^.]*$/im
)
serializersReq.keys().forEach(key => {
  const fileName = key.match(/.\/([\w-]+).js/)[1]
  const serializerName = camelize(fileName)
  const recordName = camelize(singularize(fileName), false)
  serializers[serializerName] = serializersReq(key).default
  records[recordName] = serializersReq(key)[recordName]
})

const serialize = (recordName, data) => {
  const d = new Promise(resolve => {
    let serializedData = []
    const model = models[recordName] || {}
    let Record = records[capitalize(recordName)] || records.Base
    if (Array.isArray(data)) {
      data.forEach(vehicle => {
        const newRecord = new Record(model, vehicle)
        serializedData.push(newRecord)
      })
      resolve(serializedData)
    } else {
      resolve(new Record(model, data))
    }
  })
  return d
}

export default serialize
