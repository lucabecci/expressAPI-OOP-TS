//this folder contains my config for app.ts
import dotenv from 'dotenv'
dotenv.config()

interface IConfig {
    DB: {
        URI: string,
        USER: string,
        PASS: string
    },
    PORT: number | string 
}

const config: IConfig = {
    DB: {
        URI: process.env.DB_URI || 'mongodb://localhost:ooptypescript',
        USER: process.env.DB_USER || '',
        PASS: process.env.DB_PSW || ''
    },
    PORT: process.env.PORT || 3000
}

export default config