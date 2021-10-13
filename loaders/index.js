import { initializeExpress } from './express.js'
import { dbLoader } from './database.js'
export const init = async (express, dbUrl) => {
    await dbLoader(dbUrl)
    initializeExpress(express)
}
