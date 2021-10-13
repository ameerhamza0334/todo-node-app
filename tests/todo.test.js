import chai from 'chai'
import todoService from "../services/todo.service.js";
import { dbLoader } from '../loaders/database.js'
import config from '../config/index.js'
describe('testing todos', () => {
    let expect = new Object()
    let todoServ = new Object()
    before(async () => {
        expect = chai.expect
        todoServ = new todoService()
        await dbLoader(config.databaseUrl)
    })

    it('should create new todo', async () => {

        let mockBody = {
            todo: 'let the test begin'
        }

        let saveResponse = await todoServ.insertTodo(mockBody)
        expect(saveResponse.isError).is.false
    })


})