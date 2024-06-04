import React from "react";
import { useState , useEffect } from "react";

// iconos
import { MdOutlineAdd } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

// Keep react
import {  Button, Modal ,toast } from "keep-react";

// Hook
import { useForm } from "../../../Hooks/useForm";

import axios from "axios";


export const ModalNewComponent = ({actualizarTabla}) => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const estructura = {
        nombre: "",
        telefono1: "",
        telefono2: "",
    };
    
    const { formState, onInputChange , resetForm } = useForm(estructura);
    
    const { nombre, telefono1, telefono2 } = formState;

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
        axios.post('/api/clientes' ,formState )
            .then((response) => {
                console.log("ok")
                actualizarTabla();
                toast.success("cliente registrado correctamente")
                
            })
            .catch((error) => {
                console.error("Error:", error);
                toast.error("No se pudo registrar el cliente")
            });
        setIsOpen(false);
    
         
    };

    return (
        <>
            <Button
                onClick={openModal}
                className="bg-primario hover:scale-110 p-0 hover:bg-primario transition-all duration-300 z-10 rounded-full w-10 h-10 text-center fixed bottom-8 right-10  lg:static  xl:w-10 xl:h-10"
                type="button"
            >
                <span>
                    {" "}
                    <MdOutlineAdd className="block text-2xl w-5 h-5  fill-white  lg:w-5" />
                </span>
            </Button>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <Modal.Body className="space-y-3  w-[500px] rounded-md p-6">
                    <div>
                        <Button
                            onClick={closeModal}
                            className="p-0 bg-transparent hover:bg-blue-50  rounded-full hover:scale-105 transition-all duration-100 font-montserrat hover:text-gray-900  flex justify-center items-center "
                        >
                            <span>
                                <IoCloseOutline className="text-black text-2xl" />
                            </span>
                        </Button>
                        <h3 className=" text-base text-center font-medium mt-9 text-black font-montserrat">
                            Registrar cliente
                        </h3>
                    </div>
                    <Modal.Content>
                        <form className=" mt-20 px-2" onSubmit={onSubmit}>
                            <div className="grid gap-y-12  gap-x-5 grid-cols-2">
                                <div className="col-span-2">
                                    <label
                                        htmlFor="nombre"
                                        className="block mb-3 font-montserrat text-xs font-medium text-black"
                                    >
                                        Nombre del cliente
                                    </label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        className="outline-none border border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2 "
                                        placeholder="Nombre del cliente"
                                        required
                                        value={nombre}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <div className="col-span-1 ">
                                    <label
                                        htmlFor="cantidadInicial"
                                        className="block mb-3 font-montserrat text-xs font-medium text-black"
                                    >
                                        Telefono
                                    </label>
                                    <input
                                        type="tel"
                                        name="telefono1"
                                        className="outline-none border border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2"
                                        required
                                        placeholder="0"
                                        value={telefono1}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <div className="col-span-1 ">
                                    <label
                                        htmlFor="stockMinimo"
                                        className="block mb-3 font-montserrat text-xs font-medium text-black"
                                    >
                                        Telefono secundario
                                    </label>
                                    <input
                                        type="tel"
                                        name="telefono2"
                                        className="outline-none border border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2 "
                                        placeholder="0"
                                        required=""
                                        value={telefono2}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <Modal.Footer className=" col-span-2 flex justify-end w-full mt-14">
                                    <Button
                                        type="button"
                                        onClick={closeModal}
                                        className="text-black h-10 cursor-pointer inline-flex items-center font-medium  text-sm px-5 py-2.5 text-center bg-transparent hover:bg-transparent"
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        type="submit "
                                        className="text-white h-10 inline-flex items-center bg-primario focus:ring-4 focus:outline-none font-medium  text-sm px-5 py-2.5 text-center  rounded hover:bg-primario hover:scale-105"
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
