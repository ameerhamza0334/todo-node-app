import responseHandler from "../config/api.response.js";


export default function (response, req, res, next) {
    let resHandler = new responseHandler()
    if (response.isError) {
        resHandler.apiError(res, response.message, null, null, 400)
    } else {
        resHandler.apiSuccess(res, response.data, response.message)
    }
}