import React, { useEffect, useState } from "react";
import  axios from 'axios';

// iconos
import { CiDeliveryTruck} from "react-icons/ci";
import { IoCloseOutline ,IoCalendarOutline } from "react-icons/io5";

// Keep react
import { Button, Modal, Divider ,toast } from "keep-react";

// data
// import { pedidos } from "../../../Data/Pedidos";

export const ModalDetalles = ({ pedidoId, showModal, handleCloseModal }) => {
    const [pedido , setPedido] = useState([]);

    const getPedido = () => {
        axios.get("/api/pedidos/" + pedidoId)
            .then((value) => {
                setPedido(value.data);
                console.log(value.data);
            })
            .catch((error) => {
                console.error("Error fetching client list:", error);
            });
    };
    useEffect(() => {
        getPedido();
    },[])

    function convertirFecha(fechaString) {
        // Crear un nuevo objeto Date a partir de la cadena de fecha
        const fecha = new Date(fechaString);
        
        // Obtener los componentes de la fecha
        const anio = fecha.getFullYear();
        const mes = fecha.getMonth(); // Los meses en JavaScript son 0-11
        const dia = fecha.getDate();
        
        // Convertir el mes a nombre
        const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
                       "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
        const mesNombre = meses[mes];
        
        // Formatear la fecha
        return `${dia} de ${mesNombre} de ${anio}`;
    }

    return (
        <>
            <Modal isOpen={showModal} onClose={handleCloseModal}>
                <Modal.Body className="space-y-3  w-[450px] max-h-[900px] overflow-auto rounded-md p-4">
                    <div>
                        <Button
                            onClick={handleCloseModal}
                            className="p-0 bg-transparent hover:bg-blue-50  rounded-full hover:scale-105 transition-all duration-100 font-montserrat hover:text-gray-900  flex justify-center items-center "
                        >
                            <span>
                                <IoCloseOutline className="text-black text-2xl" />
                            </span>
                        </Button>
                        <h3 className=" text-base text-center font-semibold mt-5 text-gray-700">
                            Detalles del pedido
                        </h3>
                    </div>
                    <Modal.Content>
                        <div className="grid gap-y-10 mt-20 mx-2 px-2 gap-x-5 grid-cols-3">
                            <div className="col-span-3 mx-3">
                                <h1 className="block mb-2  text-sm font-bold  text-primario">
                                    {pedido.nombre}
                                </h1>
                                <p className="font-normal text-xs text-secundario">
                                    {pedido.descripcion}
                                </p>
                            </div>

                            <Divider className="col-span-3" />

                            <div className="col-span-1 mx-3">
                                <h1 className="block mb-2  text-xs font-semibold  text-zinc-700">
                                    Cliente
                                </h1>
                                {pedido.cliente ? (
                                    <p className="font-normal text-xs text-secundario">
                                        {pedido.cliente.nombre}
                                    </p>
                                ) : (
                                    <p className="font-normal text-xs text-secundario">
                                        Cargando...
                                    </p>
                                )}
                            </div>

                            <div className="col-span-2">
                                <h1 className="block mb-2  text-xs font-semibold  text-zinc-700">
                                    Especificaciones del cliente
                                </h1>
                                <p className="font-normal text-xs text-secundario  w-full break-words">
                                    {pedido.especificacionesCliente}
                                </p>
                            </div>

                            <Divider className="col-span-3" />

                            <div className="grid gap-x-5 grid-cols-2 gap-y-10 col-span-3 mx-3">
                                <div className="col-span-1">
                                    <h1 className="block mb-3  text-xs font-medium  text-black">
                                        Estado de entrega
                                    </h1>

                                    {pedido.estadoEntrega ? (
                                        <div className=" ml-2 font-semibold text-xs text-primario border-blue-300   border w-max py-1  px-2 rounded-full ">
                                            <p> Reclamado</p>
                                        </div>
                                    ) : (
                                        <div className=" ml-2 font-semibold text-xs text-zinc-900 border-gray-300  border w-max py-1  px-2 rounded-full ">
                                            <p> No reclamado</p>
                                        </div>
                                    )}
                                </div>

                                <div className="col-span-1">
                                    <h1 className="block mb-3  text-xs font-medium  text-black">
                                        Estado de elaboracion
                                    </h1>
                                    {pedido.estadoProduccion ? (
                                        <div className=" ml-2 font-semibold text-xs text-primario border-blue-300  border w-max py-1  px-2 rounded-full ">
                                            <p> Completado</p>
                                        </div>
                                    ) : (
                                        <div className=" ml-2 font-semibold text-xs text-zinc-900 border-gray-300   border w-max py-1  px-2 rounded-full ">
                                            <p> Pendiente</p>
                                        </div>
                                    )}
                                </div>

                                <div className="col-span-2">
                                    <h1 className="block mb-3  text-xs font-medium  text-black">
                                        Pago
                                    </h1>
                                    {pedido.pagado ? (
                                        <div className=" ml-2 font-semibold text-xs text-primario border-blue-300   border w-max py-1  px-2 rounded-full ">
                                            <p> Pagado</p>
                                        </div>
                                    ) : (
                                        <div className=" ml-2 font-semibold text-xs text-zinc-900 border-gray-300  border w-max py-1  px-2 rounded-full ">
                                            <p> No pagado</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <Divider className="col-span-2" />

                            <div className="col-span-3 mb-8 mx-3">
                                <h1 className="block mb-5  text-sm font-medium  text-zinc-600">
                                    Recogida
                                </h1>

                                <div className="items-center ml-3 flex gap-3 font-normal text-xs mb-3 text-secundario">
                                    {" "}
                                    <IoCalendarOutline
                                        className="fill-primario text-primario"
                                        size={18}
                                    />{" "}
                                    <p>
                                        {" "}
                                        Pedido realizado el {convertirFecha(pedido.created_at)}
                                    </p>
                                </div>
                                <div className="items-center ml-3 flex gap-3 font-normal text-xs text-secundario">
                                    {" "}
                                    <CiDeliveryTruck
                                        className="fill-primario text-primario"
                                        size={20}
                                    />{" "}
                                    <p>
                                        {" "}
                                        Listo para la entrega el{" "}
                                        {convertirFecha(pedido.fechaEntregaEstimada)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Modal.Content>
                </Modal.Body>
            </Modal>
        </>
    );
};
