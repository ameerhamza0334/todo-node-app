import { Router } from "express"
import todoRouter from "./todo.router.js"


export default () => {
    let router = Router()
    todoRouter(router)
    return router
}