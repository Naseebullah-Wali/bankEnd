import express from "express"
import userRoute from "./userEndpoints"
import movieRouter from "./movies"
import verifyToken from "../middleware/tokenVerification"


const router: express.Router = express.Router()

router.use('/', userRoute)
router.use('/',movieRouter)
// router.use('/productRoute',verifyToken, productRoute)


// router.use('/workers', workersRoutes)

export default router