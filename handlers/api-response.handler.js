import responseHandler from "../config/api.response.js";


export default function (response, req, res, next) {
    if (response.isError) {
        responseHandler.apiError(res, response.message, null, null, 400)
    } else {
        responseHandler.apiSuccess(res, response.data, response.message)
    }
}