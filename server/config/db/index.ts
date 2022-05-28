import mongoose from "mongoose";

const URL_ENV = process.env.MONGODB_URL_ENV;

const connect: any = async () => {
    try {
        await mongoose.connect(`${URL_ENV}`);
        console.log('successful connection !')
    } catch (error: any) {
        console.log('connection failed !')
    }
}


module.exports = { connect };