import { Schema, model, Document} from 'mongoose'

const taskSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    finished: {
        type: Boolean,
        required: true
    },
    priority: {
        type: Number
    }
},
{
    timestamps: true
})

interface ITask extends Document{
    title: string,
    description: string,
    finished: boolean,
    priority: number
}

export default model<ITask>('Task', taskSchema)