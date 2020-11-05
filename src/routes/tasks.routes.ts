import {Router} from 'express'

const router = Router()

import { getTasks, createTask, getTask, deleteTask, updateTask} from '../controllers/tasks.controllers'

router.get('/', getTasks)
router.post('/', createTask)

//:id
router.get('/:id', getTask)
router.delete('/:id', deleteTask)
router.put('/:id', updateTask)
export default  router