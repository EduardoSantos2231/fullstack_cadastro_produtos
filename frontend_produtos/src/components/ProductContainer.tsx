import { deleteProduct } from "../api/products";
import type ProductType from "../types/ProductsType";


export default function ProductContainer({name, onStock, id}: ProductType) {
  return (
    <div className="flex min-w-full justify-between flex-col bg-slate-300 rounded-sm p-2">

        <div className="flex gap-4 p-4"> 
            <h1 className="bg-slate-400 p-2 rounded-sm">{name}</h1> 
   
            <p className="text-slate-600">QTD: {onStock}</p>
        </div>

        <span className="justify-end flex gap-3">
            <button className="p-2 border cursor-pointer rounded-sm">Editar</button>
            <button className="p-2 border cursor-pointer rounded-sm" onClick={()=> deleteProduct(id)}>Deletar</button>
        </span>
    </div>
  )
}
