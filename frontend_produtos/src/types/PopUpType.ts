import type ProductType from "./ProductsType";

export default interface PopUpType {
  isVisible: boolean;
  onClose: () => void;
  info?: ProductType[];
}
