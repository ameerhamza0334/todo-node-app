import genericService from "./generic.service.js";
import serviceResponse from "../config/service.response.js"
import todoModel from "../models/todo.model.js";
export default class todoService extends genericService {
    constructor(){
        super(todoModel)
    }
    async insertTodo(insertTodoModel) {
        let servResp = new serviceResponse()
        try {
            let insertedValue = await super.genericAdd(insertTodoModel)
            servResp.data = insertedValue.toJSON()
        } catch (error) {
            servResp.isError = true
            servResp.message = error.message
        }
        return servResp
    }
}