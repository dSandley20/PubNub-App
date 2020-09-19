import request from "superagent"
import prefix from "superagent-prefix"

export default request.agent().use(prefix(process.env.REACT_APP_API_ENDPOINT))
