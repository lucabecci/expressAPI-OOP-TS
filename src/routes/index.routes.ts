import {Router} from 'express'
const router: Router = Router()
import {index} from '../controllers/index.controller'

router.get('/', index)

export default router;