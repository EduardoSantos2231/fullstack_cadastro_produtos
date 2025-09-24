import { Router } from "express";
import { productsController } from "../controllers/products.controller.js";



export const productsRouter = Router()


productsRouter.get("/", productsController.getProducts)

productsRouter.get("/getone/:name", productsController.getUniqueProduct)

productsRouter.post("/create", productsController.addProduct)

productsRouter.delete("/delete/:id", productsController.deleteUniqueProduct)

productsRouter.put("/update/:id", productsController.updateProduct)