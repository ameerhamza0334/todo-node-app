import chai from 'chai'
import todoService from "../services/todo.service.js";
import { dbLoader } from '../loaders/database.js'
import config from '../config/index.js'
describe('testing todos', () => {
    let expect = new Object()
    let todoServ = new Object()
    let saveResp;
    before(async () => {
        expect = chai.expect
        todoServ = new todoService()
        await dbLoader(config.databaseUrl)
    })

    it('should create new todo', async () => {

        let mockBody = {
            todo: 'let the test begin'
        }

        saveResp = await todoServ.insertTodo(mockBody)
        expect(saveResp.isError).is.false
    })

    it('should fail in case of empty input', async () => {

        let mockBody = {
            todo: ''
        }

        let saveResponse = await todoServ.insertTodo(mockBody)
        expect(saveResponse.isError).is.true
    })

    it('should delete the newly added todo from the list', async () => {
        let deleteResp = await todoServ.deleteTodo(saveResp.data['_id'])
        expect(deleteResp.isError).is.false
    })
})