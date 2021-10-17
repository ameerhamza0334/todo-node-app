import genericService from "./generic.service.js";
import serviceResponse from "../config/service.response.js"
import todoModel from "../models/todo.model.js";
export default class todoService extends genericService {
    constructor() {
        super(todoModel)
    }

    async insertTodo(insertTodoModel) {
        let servResp = new serviceResponse()

        try {
            if (insertTodoModel.todo && insertTodoModel.todo !== '') {
                let insertedValue = await super.genericAdd(insertTodoModel)
                servResp.data = insertedValue.toJSON()
            } else {
                throw new Error('empty value cannot be entertained')
            }
        } catch (error) {
            servResp.isError = true
            servResp.message = error.message
        }
        return servResp
    }

    async deleteTodo(id) {
        let servResp = new serviceResponse()

        try {
            if (id) {
                let deleteResp = await super.genericDelete(id)
                servResp.message = `${deleteResp.deletedCount} row deleted`
            } else {
                throw new Error('empty value cannot be entertained')
            }
        } catch (error) {
            servResp.isError = true
            servResp.message = error.message
        }
        return servResp
    }

}