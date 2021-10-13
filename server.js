import { init } from './loaders/index.js'
import express from 'express'
import config from './config/index.js'

const startServer = async () => {
    const app = express()
    
    await init(app, config.databaseUrl)
    app.listen(config.port, () => {
        console.log(`server is listening to ${config.port}`)
    })
}

startServer()