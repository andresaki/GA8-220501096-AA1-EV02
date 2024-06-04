import React, { useEffect, useState } from "react";
import axios from "axios";

// iconos
import { IoCloseOutline } from "react-icons/io5";

// Keep react
import { Button, Modal, toast } from "keep-react";

// Hook
import { useForm } from "../../../Hooks/useForm";


export const ModalEditar = ({ clienteId, showModal, handleCloseModal ,actualizarTabla}) => {

    // Estado para almacenar los datos del cliente
    const [cliente , setCliente] = useState({});
    // Estado para la estructura inicial del formulario
    const [estructura, setEstructura] = useState({
        nombre: '',
        telefono1: '',
        telefono2: '',
    });

    // Función para obtener los datos del cliente desde la API
    const getCliente = () => {
        axios.get("/api/clientes/" + clienteId)
            .then((value) => {
                setCliente(value.data);
                setEstructura({
                    nombre: value.data.nombre,
                    telefono1 : value.data.telefono1,
                    telefono2 : value.data.telefono2
                })
            })
            .catch((error) => {
                console.error("Error fetching client list:", error);
            });
    };

    // Efecto para obtener los datos del cliente cuando el modal se muestra
    useEffect(() => {
        if (showModal) {
            getCliente();
        }
    }, [showModal]);
    
    const { formState, onInputChange, resetForm } = useForm(estructura);

    // Efecto para resetear el formulario cuando la estructura cambia
    useEffect(() => {
        resetForm(estructura);
    }, [estructura]);

    const { nombre, telefono1, telefono2 } = formState;

    // Función para manejar el envío del formulario
    const onSubmit = (event) => {
        event.preventDefault();
        axios.put('/api/clientes/' + clienteId ,formState )
            .then((response) => {
                console.log("ok")
                handleCloseModal();
                actualizarTabla();
                toast.success("cliente actualizado correctamente")
            })
            .catch((error) => {
                console.error("Error:", error);
                toast.error("No se pudo eliminar el cliente")
            });         
    };


    return (
        <>
            <Modal isOpen={showModal} onClose={handleCloseModal}>
                <Modal.Body className="space-y-3  w-[500px] rounded-sm p-6">
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
                            Editar cliente
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

                                <Modal.Footer className=" col-span-2 flex justify-center w-full mt-16 mb-6">
                                    <Button
                                        type="submit "
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
