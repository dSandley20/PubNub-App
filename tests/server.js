import request from "superagent"
import su from "superagent-use"
import prefix from "superagent-prefix"
import config from "../config/superagent-mock"
import superagentMock from "superagent-mock"

const agent = su(request)
agent.use(prefix(process.env.REACT_APP_API_ENDPOINT))

const logger = function(log) {
  console.log("superagent call", log)
}

export default () => {
  return superagentMock(agent, config /*,logger*/)
}
