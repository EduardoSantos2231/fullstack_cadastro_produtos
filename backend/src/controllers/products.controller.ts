import { PrismaClient, type Product } from "@prisma/client";
import type { Request, Response } from "express";
import { prisma } from "../config/db.config.js";

export const productsController = {
  getProducts: async (req: Request, res: Response) => {
    try {
      const products = await prisma.product.findMany();
      res.status(200).json(products);
    } catch (error) {
      console.log(error);
      res.json({ error: "500 Internal Server error" });
    }
  },
  getUniqueProduct: async (req: Request, res: Response) => {
    try {
      const { name } = req.params;
      if (!name) return res.json({ message: "You need a name to look for" });
      const product = await prisma.product.findMany({
        where: {
          name: {
            contains: name,
            mode: "insensitive",
          },
        },
      });
      if (!product) return res.status(400).json({ erro: "Product not found" });
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
      res.json({ error: "500 Internal Server error" });
    }
  },
  addProduct: async (req: Request, res: Response) => {
    try {
      const { name, onStock } = req.body;
      if (name && onStock) {
        const addedProduct = await prisma.product.create({
          data: {
            name: name,
            onStock: onStock,
          },
        });
        return res.status(201).json(addedProduct);
      }
      return res.status(400).json({ error: "Something went wrong" });
    } catch (error) {
      console.log(error);
      res.json({ error: "500 Internal Server error" });
    }
  },
  deleteUniqueProduct: async (req: Request, res: Response) => {
    try {
      const idToBeDeleted = Number(req.params.id);
      if (!idToBeDeleted)
        return res.status(400).json({ message: "Id is missing" });
      const itemDeleted = await prisma.product.delete({
        where: { id: idToBeDeleted },
      });
      return res.status(200).json({
        items_deleted: itemDeleted,
        status: "success",
      });
    } catch (error) {
      console.log(error);
      res.json({ error: "500 Internal Server error" });
    }
  },
  updateProduct: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { newName, newOnStock } = req.body;

      if (!id) return res.json({ mensagem: "ID is necessary" });

      if (!newName || !newOnStock) {
        return res.json({ mensagem: "Certify to input the values to change" });
      }

      const updatedProduct = await prisma.product.update({
        where: { id: Number(id) },
        data: { name: newName, onStock: newOnStock },
      });

      return res.json({ message: "success", updatedProduct });
    } catch (error) {
      console.log(error);
      return res.json({ error: "500 Internal Server error" });
    }
  },
};
