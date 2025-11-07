import { createContext, useContext } from "react";

interface ProductsContextType{
  refresher: ()=> void
  reloadSearchPopup: ()=> void
}
const ProductContext = createContext<ProductsContextType| undefined>(undefined)

const ProductProvider = ProductContext.Provider

export {ProductProvider}

export function useProductContext (){
  const context = useContext(ProductContext)
  if (context===undefined){
    throw new Error('useProductContext deve ser usado dentro de um ProductProvider');
  }
  return context
}