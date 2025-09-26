import {useEffect, useState } from "react"
import type ProductType from "./types/ProductsType"
import ProductContainer from "./components/ProductContainer"
import { createProduct, getProducts, getProductUsingName } from "./api/products"
import Popup from "./components/Popup"

function App() {
    const [products, setProducts] = useState<ProductType[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<undefined | Error>(undefined)
    const [productToSearch, setProductToSearch] = useState("")
    const [foundProducts, setFoundProducts] = useState<ProductType[]>([])
    const [isVisible, setIsVisible] = useState(false)
    const [productName, setProductName] = useState("")
    const [onStock, setOnStock] = useState(0)

    useEffect(()=>{
      const fetchProducts = async ()=> {
        try {
          const response = await getProducts()
          setProducts(response)
        } catch (error) {
          setError(new Error("Algo deu errado..."))
        }
        finally{
          setLoading(false)
        }
      }
      fetchProducts()
    }, [products])

    const changeVisibilityPopUp = ()=>{
      setIsVisible((prev)=> !prev)
    }

    const create = async()=>{
      if (!productName || !onStock) return
      const productCreated = await createProduct({name: productName, onStock: onStock})
      setProductName("")
      setOnStock((prev)=> prev-prev)
    }

    const searchForProduct = async()=>{
      if (!productToSearch) return
      try{
        const products = await getProductUsingName(productToSearch)
        setFoundProducts(products)
        changeVisibilityPopUp()
        setProductToSearch("")
      }
      catch(error){
        console.log(error)
        return
      }
    }

    if(error){
      return (
        <div className="min-w-full min-h-dvh justify-center items-center">
          <h1>Parece que algo inesperado aconteceu</h1>
        </div>
      )
    }

    if (!loading){
      return (
        <div className="flex min-h-dvh flex-col mx-5">

            <header className="min-w-full flex flex-col items-center">

              <h1 className="my-4 bg-linear-to-r from-indigo-300 via-indigo-400 to-purple-400 bg-clip-text text-transparent text-3xl font-semibold">
                Produtos
              </h1>

          <Popup isVisible={isVisible} onClose={changeVisibilityPopUp} info={foundProducts}/>

              <span className="justify-between flex items-center gap-2 my-4">
                <input value={productToSearch} onChange={(e)=> setProductToSearch(e.target.value)}
                 type="search" placeholder="Informe um nome" className="border p-2" />
                <button onClick={searchForProduct} className="bg-slate-300 p-2 cursor-pointer">Buscar</button>
              </span>

            </header>

            <main className="flex justify-center  flex-col gap-3">

              <div className="flex flex-row gap-2">

                <input value={productName}
                  onChange={(e)=> setProductName(e.target.value)}
                  type="text" className="border p-1 max-w-30"
                  placeholder="Seu item"/>

                <input type="number"
                 onChange={(e)=> setOnStock(Number(e.target.value))}
                 className="border p-1 max-w-30"
                 placeholder="Quantidade"/>

                <button
                 onClick={create} 
                 className="p-2 bg-slate-500 cursor-pointer rounded-sm">Criar</button>
              </div>

              <div className="flex flex-col gap-4">
                {products.map((item)=> (<ProductContainer key={item.id} id={item.id} name={item.name} onStock={item.onStock} />))}
              </div>
    
            </main>
        </div>
      )
    }
    return (
      <div>
        Carregando...
      </div>
    )
  
}

export default App
