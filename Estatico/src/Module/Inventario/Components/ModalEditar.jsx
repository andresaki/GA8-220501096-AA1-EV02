import React from "react";
import { useState } from "react";

// iconos
import { MdOutlineAdd } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

// Keep react
import { Button, Modal } from "keep-react";

// Hook
import { useForm } from "../../../Hooks/useForm";

// data
import { productos } from "../../../Data/Productos";

export const ModalEditar = ({ productoId, showModal, handleCloseModal }) => {
    const producto = productos[productoId - 1];

    const estructura = {
        nombre: producto.nombreProducto,
        categoria: producto.categoria,
        cantidadInicial: producto.cantidadInicial,
        stockMinimo: producto.stockMinimo,
    };
    
    const { formState, onInputChange } = useForm(estructura);
    const { nombre, categoria, cantidadInicial, stockMinimo } = formState;

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    };

    return (
        <>
            <Modal isOpen={showModal} onClose={handleCloseModal}>
                <Modal.Body className="space-y-3  w-[400px] rounded-md bge">
                    <div>
                        <Button
                            onClick={handleCloseModal}
                            className="p-0 bg-transparent hover:bg-blue-50  rounded-full hover:scale-105 transition-all duration-100 font-montserrat hover:text-gray-900  flex justify-center items-center "
                        >
                            <span>
                                <IoCloseOutline className="text-black text-2xl" />
                            </span>
                        </Button>
                        <h3 className=" text-base text-center font-medium m-3 text-black font-montserrat">
                            Actualizar Producto
                        </h3>
                    </div>
                    <Modal.Content>
                        <form className=" mt-20 px-2" onSubmit={onSubmit}>
                            <div className="grid gap-12 grid-cols-2">
                                <div className="col-span-2">
                                    <label
                                        htmlFor="nombre"
                                        className="block mb-3 font-montserrat text-xs font-medium text-black"
                                    >
                                        Nombre del producto
                                    </label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        className="outline-none border border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2 "
                                        placeholder="Nombre del producto"
                                        required
                                        value={nombre}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <div className="col-span-2 ">
                                    <label
                                        htmlFor="categoria"
                                        className="block mb-3 font-montserrat text-xs font-medium text-black"
                                    >
                                        Categoria
                                    </label>
                                    <input
                                        type="text"
                                        name="categoria"
                                        className="outline-none border border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3  focus:ring-primario focus:ring-2  "
                                        placeholder="Categoria del producto"
                                        required
                                        value={categoria}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <div className="col-span-1 ">
                                    <label
                                        htmlFor="cantidadInicial"
                                        className="block mb-3 font-montserrat text-xs font-medium text-black"
                                    >
                                        Cantidad inicial
                                    </label>
                                    <input
                                        type="number"
                                        name="cantidadInicial"
                                        className="outline-none border border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2"
                                        required
                                        placeholder="0"
                                        value={cantidadInicial}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <div className="col-span-1 ">
                                    <label
                                        htmlFor="stockMinimo"
                                        className="block mb-3 font-montserrat text-xs font-medium text-black"
                                    >
                                        Stock minimo
                                    </label>
                                    <input
                                        type="number"
                                        name="stockMinimo"
                                        className="outline-none border border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2 "
                                        placeholder="0"
                                        required=""
                                        value={stockMinimo}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <div className="col-span-1 ">
                                    <label
                                        htmlFor="proveedor"
                                        className="block mb-3 font-montserrat text-xs font-medium text-black"
                                    >
                                        Proveedor
                                    </label>
                                    <select
                                        name="proveedor"
                                        className="outline-none border border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2"
                                    >
                                        <option
                                            className="py-2 text-sm text-secundario"
                                            defaultValue={"1"}
                                        >
                                            seleccione
                                        </option>
                                    </select>
                                </div>

                                <div className="col-span-1 relative  pt-8 ">
                                    <p className="absolute -left-7 bottom-3">
                                        o
                                    </p>

                                    <button
                                        type="button"
                                        className="hover:scale-105 transition-all duration-200 w-full h-10 flex items-center justify-evenly text-white font-normal text-sm bg-primario rounded"
                                    >
                                        <MdOutlineAdd className="block text-2xl w-5 h-5  fill-white  lg:w-5" />

                                        <p className="sm:block  text-sm ">
                                            Crear proveedor
                                        </p>
                                    </button>
                                </div>

                                <Modal.Footer className=" col-span-2 flex justify-end w-full mt-14">
                                    <Button
                                        onClick={handleCloseModal}
                                        className="text-black h-10 cursor-pointer inline-flex items-center font-medium  text-sm px-5 py-2.5 text-center bg-transparent hover:bg-transparent"
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        type="submit "
                                        className="text-white h-9 inline-flex items-center bg-primario focus:ring-4 focus:outline-none font-medium  text-sm px-5 py-2.5 text-center  rounded hover:bg-primario hover:scale-105"
                                    >
                                        Guardar
                                    </Button>
                                </Modal.Footer>
                            </div>
                        </form>
                    </Modal.Content>
                </Modal.Body>
            </Modal>
        </>
    );
};
