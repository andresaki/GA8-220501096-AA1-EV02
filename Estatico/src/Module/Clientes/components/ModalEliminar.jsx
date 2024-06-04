import React, { useState , useEffect } from "react";


// iconos
import {
    AiOutlineDelete,
} from "react-icons/ai";

// Keep react
import { Button, Modal ,toast} from "keep-react";

// data
import axios from 'axios'

export const ModalEliminar = ({ clienteId, showModal, handleCloseModal ,actualizarTabla}) => {

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
    

    const deleteCliente = () => {
        
        axios.delete("/api/clientes/" + clienteId)
            .then((response) => {
                console.log("OK")
                handleCloseModal();
                actualizarTabla();
                toast.info("cliente eliminado correctamente")
            })
            .catch((error) => {
                console.log("Error : " , error)
                toast.error("No se pudo eliminar el cliente")
            })
    }



    return (
        <>
            <Modal isOpen={showModal} onClose={handleCloseModal}>
                <Modal.Body className="flex w-[500px] flex-col items-center p-6 lg:p-8">
                    <Modal.Icon className="h-20 w-20 border mb-2 border-blue-200 bg-blue-50 text-blue-500">
                        <AiOutlineDelete size={50} />
                    </Modal.Icon>
                    <Modal.Content className="my-8 text-center">
                        <h3 className="mb-4 text-body-1 font-bold text-metal-900">
                            ¿Eliminar datos de {cliente.nombre}?
                        </h3>
                        <p className="mx-auto max-w-md text-body-4 font-normal text-metal-600">
                            Estás seguro de eliminar los datos de
                            {" " + cliente.nombre}. No podrás recuperarlo. Se
                            eliminaran todas la relaciones asociadas a este
                            cliente.
                        </p>
                    </Modal.Content>
                    <Modal.Footer>
                        <Button
                            onClick={handleCloseModal}
                            className="text-black h-12 after:border-none before:border-none after:outline-none before:outline-none bg-transparent focus:outline-none focus:border-none inline-flex items-center hover:bg-transparent focus:ring-4  font-medium  text-base px-5 py-2.5 text-center  rounded  hover:scale-105"
                        >
                            cancelar
                        </Button>
                        <Button
                            onClick={deleteCliente}
                            className="text-white h-12 inline-flex items-center bg-primario focus:ring-4 focus:outline-none font-medium  text-base px-5 py-2.5 text-center  rounded-xl hover:bg-primario hover:scale-105"
                        >
                            Confirmar
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        </>
    );
};
