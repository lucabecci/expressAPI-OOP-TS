import {Request, Response} from 'express'

export const index = (req: Request, res: Response):Response<void> => {
    return res.status(200).json({
        message: 'Welcome to my api REST. This api REST was created with OOP, typescrip, mongoose and express.'
    })
}
