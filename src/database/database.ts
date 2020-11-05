import mongoose, { Mongoose, ConnectionOptions } from 'mongoose'
import config from '../config/config'

class Database{
    _mongoose: Mongoose
    _URI: string
    _DBopts: ConnectionOptions

    constructor(){
        this._mongoose = mongoose
        this._URI = config.DB.URI
        this._DBopts  = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }
    }
    public async connection(): Promise<void>{
        await this._mongoose.connect(this._URI, this._DBopts)
        console.log('DB is connected')
    }
}


export default Database;