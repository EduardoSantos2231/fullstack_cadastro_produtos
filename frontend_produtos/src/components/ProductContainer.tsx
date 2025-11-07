import { useEffect, useState } from "react";
import { deleteProduct } from "../actions/products";
import type ProductType from "../types/ProductsType";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import EditPopup from "./EditPopup";
import { useProductContext } from "../contexts/productsContext";

export default function ProductContainer({ name, onStock, id }: ProductType) {
  const [isEditing, setIsEditing] = useState(false);
  const { refresher } = useProductContext();
  const deleteSingleOne = async () => {
    await deleteProduct(id);
    refresher();
  };
  const changeIsEditing = () => setIsEditing((prev) => !prev);

  useEffect(() => {
    refresher();
  }, [isEditing, refresher]);

  return (
    <div className="flex min-w-full justify-between flex-col bg-blue-200/30 rounded-sm p-2">
      <EditPopup
        isVisible={isEditing}
        onClose={changeIsEditing}
        product={{ id: id, name: name, onStock: onStock }}
      />
      <div className="flex gap-4 p-4 items-center">
        <h1 className="bg-blue-400/50 p-2 rounded-sm">{name}</h1>

        <p className="text-black bg-blue-200/30 p-2">QTD: {onStock}</p>
      </div>

      <span className="justify-end flex gap-3">
        <button
          className="flex items-center gap-1 p-2 hover:scale-110 duration-200 transition cursor-pointer rounded-sm bg-yellow-200"
          onClick={changeIsEditing}
        >
          <CiEdit />
          Editar
        </button>
        <button
          className="flex items-center gap-1 p-2 hover:scale-110 duration-200 transition cursor-pointer rounded-sm bg-red-300"
          onClick={deleteSingleOne}
        >
          <CiTrash />
          Deletar
        </button>
      </span>
    </div>
  );
}
