import React, { useEffect, useState } from "react";
import axios from "axios";

// iconos
import {  MdOutlineAdd} from "react-icons/md";
import { IoCloseOutline  } from "react-icons/io5";

// Keep react
import { Button, Modal, Divider , toast} from "keep-react";

// Hook
import { useForm } from "../../../Hooks/useForm";
import axiosInstance from "../../../axiosConfig";

// data
// import { pedidos } from "../../../Data/Pedidos";

export const ModalEditar = ({ pedidoId, showModal, handleCloseModal, actualizarTabla}) => {
    
    // AllClientes para crear pedido
    const [clientes , setClientes] = useState([]);

    const getlist = () => {
        axios.get("/api/clientes").then((value) => {
            setClientes(value.data);
        });
    };
    useEffect(() => {
        getlist();
    },[])



    // Estado para almacenar los datos del pedido
    const [pedido , setPedido] = useState({});

    const [estructura, setEstructura] = useState({
        nombre: 0,
        descripcion: "",
        especificacionesCliente: "",
        estadoProduccion: false, // Completado
        estadoEntrega: false, // No reclamado
        pagado: false,
        costoTotal: 0,
        fechaEntregaEstimada: "",
    });

    const getPedido = () => {
        axios.get("/api/pedidos/" + pedidoId)
            .then((value) => {
                setPedido(value.data);
                console.log(value.data)
                setEstructura({
                    nombre: value.data.nombre,
                    descripcion: value.data.descripcion,
                    especificacionesCliente: value.data.especificacionesCliente,
                    estadoProduccion: value.data.estadoProduccion, // Completado
                    estadoEntrega: value.data.estadoEntrega, // No reclamado
                    pagado: value.data.pagado,
                    costoTotal: value.data.costoTotal,
                    fechaEntregaEstimada: value.data.fechaEntregaEstimada
                });
            })
            .catch((error) => {
                console.error("Error fetching ordens list:", error);
            });
    };

    useEffect(() => {
        if (showModal) {
            getPedido();
        }
    }, [showModal]);

    const { formState, onInputChange, resetForm } = useForm(estructura);

    // Efecto para resetear el formulario cuando la estructura cambia
    useEffect(() => {
        resetForm(estructura);
    }, [estructura]);

    const { nombre, descripcion, especificacionesCliente, estadoProduccion ,estadoEntrega, pagado, costoTotal, fechaEntregaEstimada} = formState;

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
        axiosInstance.put("/api/pedidos/" + pedidoId , formState)
            .then((response) => {
                console.log("OK")
                handleCloseModal()
                actualizarTabla()
                toast.success("Pedido editado correctamente")
            })
            .catch((error) => {
                console.log("Error : ", error);
                toast.error("No se pudo actualizar los datos del pedido")
            })
    };

    return (
        <>
            <Modal isOpen={showModal} onClose={handleCloseModal}>
                <Modal.Body className="space-y-3  w-[450px] max-h-[900px] overflow-auto rounded-md p-6">
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
                            Editar pedido
                        </h3>
                    </div>
                    <Modal.Content>
                        <form className=" mt-20 px-2" onSubmit={onSubmit}>
                            <div className="grid gap-y-12  gap-x-5 grid-cols-2">
                                <div className="col-span-2">
                                    <label
                                        htmlFor="nombre"
                                        className="block mb-3  text-xs font-medium text-black"
                                    >
                                        Nombre del pedido
                                    </label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        className="outline-none border border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2 "
                                        placeholder="ej: estampado , confeccion , areglo . . . "
                                        required
                                        value={nombre}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label
                                        htmlFor="descripcion"
                                        className="block mb-3  text-xs font-medium text-black"
                                    >
                                        Descripcion del pedido
                                    </label>
                                    <textarea
                                        type="text"
                                        name="descripcion"
                                        className="outline-none border min-h-40 border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2 "
                                        placeholder="Ingrese los detalles o la descripcion del pedido"
                                        required
                                        value={descripcion}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label
                                        htmlFor="especificacionespedido"
                                        className="block mb-3  text-xs font-medium text-black"
                                    >
                                        Especificaciones de pedido
                                    </label>
                                    <textarea
                                        type="text"
                                        name="especificacionespedido"
                                        className="outline-none border min-h-40 border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2 "
                                        placeholder="Ingrese las especificaciones o requerimientos que tiene el pedido"
                                        value={especificacionesCliente}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label
                                        htmlFor="fechaEntregaEstimada"
                                        className="block mb-3  text-xs font-medium text-black"
                                    >
                                        Fecha estimada de entrega
                                    </label>
                                    <input
                                        type="date"
                                        className="outline-none border min-h-10  border-bordeInput text-gray-800 text-xs rounded-md block w-2/3 p-3 focus:ring-primario focus:ring-2 "
                                        name="fechaEntregaEstimada"
                                        value={fechaEntregaEstimada}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label
                                        htmlFor="costoTotal"
                                        className="block mb-3  text-xs font-medium text-black"
                                    >
                                        Costo total
                                    </label>
                                    <input
                                        type="text"
                                        name="costoTotal"
                                        className="outline-none border border-bordeInput text-gray-800 text-xs rounded-md block w-2/3 p-3 focus:ring-primario focus:ring-2 "
                                        required
                                        value={costoTotal}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <div className="col-span-1  ">
                                    <label
                                        htmlFor="estadoEntrega"
                                        className="block mb-3 font-montserrat text-xs font-medium text-black"
                                    >
                                        Entregado
                                    </label>
                                    <select
                                        value={estadoEntrega}
                                        onChange={onInputChange}
                                        name="estadoEntrega"
                                        className="outline-none border w-2/3 border-bordeInput text-gray-800 text-xs rounded-md block  p-3 focus:ring-primario focus:ring-2"
                                    >
                                        <option
                                            className="py-2 text-sm text-secundario"
                                            value={0}
                                        >
                                            No entregado
                                        </option>
                                        <option
                                            className="py-2 text-sm text-secundario"
                                            value={1}
                                        >
                                            Entregado
                                        </option>
                                    </select>
                                </div>
                                <div className="col-span-1  ">
                                    <label
                                        htmlFor="estadoProduccion"
                                        className="block mb-3 font-montserrat text-xs font-medium text-black"
                                    >
                                        Elaboracion
                                    </label>
                                    <select
                                        value={estadoProduccion}
                                        onChange={onInputChange}
                                        name="estadoProduccion"
                                        className="outline-none border w-2/3 border-bordeInput text-gray-800 text-xs rounded-md block  p-3 focus:ring-primario focus:ring-2"
                                    >
                                        <option
                                            className="py-2 text-sm text-secundario"
                                            value={0}
                                        >
                                            En proceso
                                        </option>
                                        <option
                                            className="py-2 text-sm text-secundario"
                                            value={1}
                                        >
                                            Terminado
                                        </option>
                                    </select>
                                </div>
                                

                                <div className="col-span-2  ">
                                    <label
                                        htmlFor="pagado"
                                        className="block mb-3 font-montserrat text-xs font-medium text-black"
                                    >
                                        Pagado
                                    </label>
                                    <select
                                        value={pagado}
                                        onChange={onInputChange}
                                        name="pagado"
                                        className="outline-none border w-2/3 border-bordeInput text-gray-800 text-xs rounded-md block  p-3 focus:ring-primario focus:ring-2"
                                    >
                                        <option
                                            className="py-2 text-sm text-secundario"
                                            value={0}
                                        >
                                            No
                                        </option>
                                        <option
                                            className="py-2 text-sm text-secundario"
                                            value={1}
                                        >
                                            Si
                                        </option>
                                    </select>
                                </div>
                                

                                <Modal.Footer className=" col-span-2 flex justify-center w-full mt-16 mb-6">
                                    <Button
                                        type="submit"
                                        className="text-white h-10 inline-flex items-center bg-primario focus:ring-4 focus:outline-none font-medium  text-sm px-5 py-2.5 text-center  rounded hover:bg-primario hover:scale-105"
                                    >
                                        Guardar cambios
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
