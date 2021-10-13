import mongoose from 'mongoose'

export const dbLoader = async (dbUrl) => {
    const connection = await mongoose.connect(dbUrl, {
        useUnifiedTopology: true,
    });
    return connection.connection.db;

}