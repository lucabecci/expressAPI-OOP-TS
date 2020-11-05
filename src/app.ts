import express, { Application } from 'express'
import morgan from 'morgan'
import config from './config/config'
import Database from './database/database'

//routes imp
import indexRoutes from './routes/index.routes'
import taskRoutes from './routes/tasks.routes'

class App{
    _app: Application
    _db: Database 
    _PORT: number | string
    constructor(){
        this._app = express()
        this._db = new Database
        this._PORT = config.PORT
    }
    public async initDb(): Promise<void> {
        await this._db.connection()
    }
    public initMiddlewares(): void {
        this._app.use(express.json())
        this._app.use(express.urlencoded({extended: false}))
        this._app.use(morgan('dev'))
    }
    public initRoutes(): void {
        this._app.use('/', indexRoutes)
        this._app.use('/tasks', taskRoutes)
    } 
    public async run(): Promise<void> {
        await this._app.listen(this._PORT)
        console.log('Server on port:', this._PORT)
    }
}

export default App