import React from "react";

// iconos
import { IoCloseOutline } from "react-icons/io5";

// Keep react
import { Button, Modal } from "keep-react";

// data
import { productos } from "../../../Data/Productos";

export const ModalStock = ({ productoId, showModal, handleCloseModal }) => {
    const producto = productos[productoId - 1];

    return (
        <>
            <Modal isOpen={showModal} onClose={handleCloseModal}>
                <Modal.Body className="space-y-3  w-[320px] rounded-md bge">
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
                            Modificar Stock
                        </h3>
                    </div>
                    <Modal.Content>
                        <form className=" mt-20 px-2" >
                            
                                <div className="">
                                    <div className="grid gap-6">
                                        <div className="flex items-center gap-4">
                                            <div className="grid gap-1.5">
                                                <h3 className="font-medium text-base leading-none mb-1">
                                                    {producto.nombreProducto}
                                                </h3>
                                                <p className="text-xs leading-none text-gray-500 dark:text-gray-400">
                                                    ID: {producto.id}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid gap-2 mt-5">
                                            <label
                                                className="block mb-1 font-montserrat text-sm font-medium text-black"
                                                htmlFor="movement"
                                            >
                                                Movimiento
                                            </label>
                                            <select
                                                name=""
                                                id=""
                                                className="flex  h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            >
                                                <option value={1}>Añadir al stock</option>
                                                <option value={2}>Retirar del stock</option>
                                            </select>
                                        </div>
                                        <div className="grid gap-2">
                                            <label
                                                className="block mb-1 font-montserrat text-sm font-medium text-black"
                                                htmlFor="quantity"
                                            >
                                                Cantidad
                                            </label>
                                            <input
                                                type="number"
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                id="quantity"
                                                min={1}
                                            />
                                        </div>
                                    </div>

                                    <Modal.Footer className=" col-span-2 flex justify-end w-full mt-14">
                                        <Button
                                            onClick={handleCloseModal}
                                            className="text-black h-10 cursor-pointer inline-flex items-center font-medium  text-sm px-5 py-2.5 text-center bg-transparent hover:bg-transparent"
                                        >
                                            Cancelar
                                        </Button>
                                        <Button
                                            onClick={handleCloseModal}
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
