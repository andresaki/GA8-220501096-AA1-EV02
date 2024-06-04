import React, { useState , useEffect } from "react";
import axios from "axios";


// iconos
import {  AiOutlineDelete} from "react-icons/ai";

// Keep react
import {Button, Modal, toast} from "keep-react";

// data
// import { pedidos } from "../../../Data/Pedidos";

export const ModalEliminar = ({ pedidoId, showModal, handleCloseModal , actualizarTabla}) => {
    
    const [pedido , setPedido] = useState([]);

    const getPedido = () => {
        axios.get("/api/pedidos/" + pedidoId)
            .then((value) => {
                setPedido(value.data)
            })
            .catch((error) => {
                console.log("Error al traer el pedido : " + error )
            })
    }

    useEffect(() => {
        getPedido();
    },[])

    const deletePedido = () => {
        axios.delete("/api/pedidos/" + pedidoId )
            .then((response) => {
                console.log("Se elimino el pedido")
                handleCloseModal()
                actualizarTabla()
                toast.info("Pedido eliminado correctamente")
            })
            .catch((error) => {
                console.log("Error al eliminar el pedido : " + error )
                toast.error("No se pudo eliminar el pedido")
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
                            ¿Eliminar el registro de {pedido.nombre}?
                        </h3>
                        <p className="mx-auto max-w-md text-body-4 font-normal text-metal-600">
                            Estás seguro de eliminar
                            {" " + pedido.nombre}.{" "}
                            {pedido.estadoProduccion ? (
                                ""
                            ) : (
                                <>
                                    <br /> <br />
                                    El Cual esta en estado : {" "}
                                    <strong>Pendiente</strong> <br /> <br />{" "}
                                </>
                            )}{" "}
                            No podrás recuperarlo. Se eliminaran todas la
                            relaciones asociadas a este pedido.
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
                            onClick={deletePedido}
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
