import ProductContainer from "./ProductContainer"
import type { PopUpType } from "../types"

export default function Popup({isVisible, onClose, info}: PopUpType) {
    if (!isVisible) return
    if (!info || info.length===0){
        return(
            <div className="min-w-full min-h-full bg-black/85 z-10 fixed">
                <div className="flex justify-center items-center flex-col bg-white p-7">
                    <div className="">Produto não encontrado</div>
                    <button onClick={onClose} className="bg-slate-400 p-2 rounded-sm">close</button>
                </div>
            </div>
        )
    }
    return (
        <div className="min-w-full min-h-full bg-black/90 z-10 fixed">
            <div className="flex flex-col gap-3 p-4">
            {info.map((product)=> (
                <ProductContainer name={product.name} onStock={product.onStock} key={product.id} id={product.id} />
            ))}
            </div>

            <span className="mx-5">
                <button onClick={onClose} className="p-2 bg-white rounded-sm">fechar</button>
            </span>
        </div>
    )
}
