import type ProductType from "./ProductsType"

export default interface EditPopup{
  product: ProductType,
  onClose: ()=> void,
  isVisible: boolean
}