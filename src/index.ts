import App from './app'

const app = new App

async function main():Promise<void>{
    await app.run()
    app.initMiddlewares()
    app.initRoutes()
    await app.initDb()
}
main()