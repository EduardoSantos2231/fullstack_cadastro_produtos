import axios from "axios";
import type ProductType from "../types/ProductsType";


const API_URL = "http://localhost:8080/products";

export const getProducts = async (): Promise<ProductType[]>=> {
    const response = await axios.get(API_URL).then((res)=> res.data)
    return response
}

export const getProductUsingName = async (name: string): Promise<ProductType[]>=> {
    const response= await axios.get(`${API_URL}/getone/${name}`).then((res)=> res.data)
    return response
}

export const createProduct = async({name, onStock}: ProductType)=>{
    const createdProduct = await axios.post(`${API_URL}/create`, {name, onStock})
    return createdProduct
}