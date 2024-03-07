import express from "express"
import userRoute from "./userEndpoints"
import movieRouter from "./movies"
import verifyToken from "../middleware/tokenVerification"
import categoryRouter from "./categoriesEndPoints";
import warehouseRouter from "./warehousesEndPoints";
import supplierRouter from "./supplierEndPoints";
import orderRouter from "./orderEndPoints";
import orderDetailRouter from "./orderDetailsEndPoints";
import customerRouter from "./customerEndPoints";
import employeeRouter from "./employeeEndpoints";
import saleRouter from "./salesEndPoints";
import saleDetailRouter from "./salesDetailsEndpoints";
import productWarehouseRouter from "./productwarehousesEndPoints";

const router: express.Router = express.Router()

router.use('/', userRoute)
router.use('/',movieRouter)
router.use('/', categoryRouter);
router.use('/', warehouseRouter);
router.use('/', supplierRouter);
router.use('/', orderRouter);
router.use('/', orderDetailRouter);
router.use('/', customerRouter);
router.use('/', employeeRouter);
router.use('/', saleRouter);
router.use('/', saleDetailRouter);
router.use('/', productWarehouseRouter);
// router.use('/productRoute',verifyToken, productRoute)


// router.use('/workers', workersRoutes)

export default router