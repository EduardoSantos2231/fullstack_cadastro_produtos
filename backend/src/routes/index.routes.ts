import { Router } from "express";
import { productsRouter } from "./products.route.js";

export const router = Router()

router.use("/products", productsRouter)