import dotenv from 'dotenv'
const envFound = dotenv.config()

if (envFound.error) {
    throw new Error("couldn't find env")
}

export default {
    port: process.env.PORT,
    databaseUrl: process.env.DATABASE_URL,
    apiPrefix: '/api/'
}