import { Request, Response } from 'express'
import Task from '../models/Task'
import {checkID, createBodyCheck} from '../helpers/taskChecks'

export const getTasks = async(req: Request, res: Response): Promise<Response> =>{
    try{
        const tasks = await Task.find()
        return res.status(200).json({
            success: true,
            tasks
        })
    }
    catch(e){
        return res.send(500).json({
            success: false,
            msg: 'Internal server ERROR, try later'
        })
    }
}

export const createTask = async(req: Request, res: Response): Promise<Response> => {
    try{
        const {title, description, finished, priority} = req.body
        const bodychecked = createBodyCheck(title, description, finished, priority)
        if(bodychecked){
            const newTask = {
                title, 
                description,
                finished,
                priority
            }
            const task = await new Task(newTask)
            task.save()
            return res.status(200).json({
                success: true,
                task
            })
        }
        console.log(bodychecked)
        return res.status(400).json({
            success: false,
            msg: 'Please send all parameters.'
        })
    }
    catch(e){
        return res.status(500).json({
            success: false,
            msg: 'Internal server ERROR, try later.'
        })
    }
}

export const getTask = async(req: Request, res: Response): Promise<Response> => {
    try{
        const id: string = req.params.id
        const IDchecked = checkID(id)
        if(IDchecked === false){
            return res.status(400).json({
                success: false,
                msg: 'ID short, try again with correct ID'
            })
        }
        const task = await Task.findById(id)
        if(task == null){
            return res.status(400).json({
                success: false,
                msg: 'ID invalid, please send a valid ID.'
            })
        }
        return res.status(200).json({
            success: true,
            task
        })
    }
    catch(e){
        return res.status(500).json({
            success: false,
            msg: 'Internal server ERROR, please try later'
        })
    }
}

export const deleteTask = async(req: Request, res: Response): Promise<Response> => {
    try{
        const id:string =req.params.id
        const IDchecked = checkID(id)
        if(IDchecked === false){
            return res.status(400).json({
                success: false,
                msg: 'ID short, try again with correct ID'
            })
        }
        const taskDeleted = await Task.findByIdAndDelete(id)
        if(taskDeleted === null){
            return res.status(400).json({
                success: false,
                msg: 'ID invalid, please send a valid ID.'
            })
        }
        return res.status(200).json({
            success: true,
            taskDeleted
        })
    }
    catch(e){
        return res.status(500).json({
            success: false,
            msg: 'Internal server ERROR, please try later.'
        })
    }

}

export const updateTask = async(req: Request, res: Response): Promise<Response> => {
    try{
        const id: string = req.params.id
        const { title, description, finished, priority } = req.body
        const IDchecked = checkID(id)
        const bodychecked = createBodyCheck(title, description, finished, priority)
        if(IDchecked === false){
            return res.status(400).json({
                success: false,
                msg: 'ID short, try again with correct ID'
            })
        }else if(bodychecked == false){
            return res.status(400).json({
                success: false,
                msg: 'Please send all parameters'
            })
        }
        try{
            const updated = await Task.findByIdAndUpdate(id, {
                title, description, finished, priority
            }, {new: true})
            return res.status(200).json({
                success: true,
                updated
            })
        }
        catch(e){
            return res.status(400).json({
                success: false,
                msg: 'ID invalid, please send a valid ID'
            })
        }
    }
    catch(e){
        return res.status(500).json({
            success: false,
            msg: 'Internal server ERROR, please try later.'
        })
    }
    
}