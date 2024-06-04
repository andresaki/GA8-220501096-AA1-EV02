import React, { useEffect, useState } from "react";
import  axios from 'axios';


// iconos
import { IoCloseOutline } from "react-icons/io5";

// Keep react
import {Button, Modal } from "keep-react";

// data
// import { clientes } from "../../../Data/Clientes";

export const ModalDetalles = ({ clienteId, showModal, handleCloseModal }) => {

    const [cliente , setCliente] = useState([]);

    const getCliente = () => {
        axios.get("/api/clientes/" + clienteId)
            .then((value) => {
                setCliente(value.data);
            })
            .catch((error) => {
                console.error("Error fetching client list:", error);
            });
    };
    useEffect(() => {
        getCliente();
    },[])

    

    return (
        <>
            <Modal isOpen={showModal} onClose={handleCloseModal}>
                <Modal.Body className="space-y-3  w-[470px] rounded-sm p-6 pb-10">
                    <div>
                        <Button
                            onClick={handleCloseModal}
                            className="p-0 bg-transparent hover:bg-blue-50  rounded-full hover:scale-105 transition-all duration-100 font-montserrat hover:text-gray-900  flex justify-center items-center "
                        >
                            <span>
                                <IoCloseOutline className="text-black text-2xl" />
                            </span>
                        </Button>
                        <h3 className=" text-base text-center font-medium mt-9 text-black font-montserrat">
                            Detalles del cliente
                        </h3>
                    </div>
                    <Modal.Content>
                        <div className="grid gap-y-12 mt-20 mx-3 px-2 gap-x-5 grid-cols-2">
                            <div className="col-span-2">
                                <h1 className="font-semibold text-xs text-primario">
                                    Nombre del cliente
                                </h1>
                                <p className="font-normal text-[14px] text-secundario ml-5 mt-4">
                                    {cliente.nombre}
                                </p>
                            </div>

                            <div className="col-span-1">
                                <h1 className="font-semibold text-xs text-primario">
                                    Telefono
                                </h1>
                                <p className="font-normal text-[14px] text-secundario ml-5 mt-4">
                                    {cliente.telefono1}
                                </p>
                            </div>

                            <div className="col-span-1">
                                <h1 className="font-semibold text-xs text-primario">
                                    Telefono secundario
                                </h1>
                                <p className="font-normal text-[14px] text-secundario ml-5 mt-4">
                                    {cliente.telefono2}
                                </p>
                            </div>
                        </div>

                        

                        
                    </Modal.Content>
                </Modal.Body>
            </Modal>
        </>
    );
};
