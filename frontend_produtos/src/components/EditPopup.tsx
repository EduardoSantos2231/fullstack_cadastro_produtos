import { useState } from "react";
import type { EditPopup } from "../types";
import { editProduct } from "../actions/products";
import { useProductContext } from "../contexts/productsContext";

export default function EditPopup({ onClose, product, isVisible }: EditPopup) {
  const { name, onStock, id } = product;
  const [newName, setNewName] = useState(name);
  const [newOnStock, setNewOnStock] = useState(onStock);

  const { refresher } = useProductContext();

  const updateInfos = async () => {
    await editProduct({ id: id, name: newName, onStock: newOnStock });
    onClose();
    refresher();
  };

  if (!isVisible) return;
  return (
    <div className="bg-black/90 inset-0 absolute">
      <div className="z-10 flex justify-center items-center">
        <div className=" bg-white my-10 flex flex-col p-5 gap-3">
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            type="text"
            className="border p-2 rounded-sm"
          ></input>
          <input
            value={newOnStock}
            onChange={(e) => setNewOnStock(Number(e.target.value))}
            type="number"
            min={1}
            className="border p-2 rounded-sm"
          ></input>
          <span className="flex gap-2 justify-between">
            <button
              className="cursor-pointer hover:scale-110 duration-200 transition bg-red-300 rounded-sm p-2"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              className="cursor-pointer hover:scale-110 duration-200 transition bg-green-300 p-2 rounded-sm min-w-20"
              onClick={updateInfos}
            >
              Salvar
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
