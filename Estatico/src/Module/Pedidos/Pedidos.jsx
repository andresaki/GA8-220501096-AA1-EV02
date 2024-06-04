import React, { useEffect, useState } from "react";
import  axios from 'axios';

// iconos
import { GoHistory } from "react-icons/go";
import { MdHistoryToggleOff,  MdCheck} from "react-icons/md";

// Keep react
import { Button , toast} from "keep-react";


// data
import { pedidos } from "../../Data/Pedidos";

// Componentes
import { ModalNewComponent } from "./Components/ModalNewComponent";
import { DropdownAccionesComponent } from "./Components/DropdownAccionesComponent";
import { DropdownFilterComponent } from "./Components/DropdownFilterComponent";

function Pedidos() {

    const [pedidos , setPedidos] = useState([]);

    const getlist = () => {
        axios.get("/api/pedidos").then((value) => {
            setPedidos(value.data);
        });
    };

    useEffect(() => {
        getlist();
    },[])

    const listapedidos = pedidos.map((pedido) => (
        <tr
            key={pedido.id}
            className="  bg-white border-b cursor-default  h-10 hover:bg-gray-50 font-light text-xs text-neutral-600 "
        >
            <td className="min-w-20 text-center ">{pedido.id} </td>
            <td className="min-w-64 pl-6 w-3/4 whitespace-nowrap overflow-hidden text-ellipsis text-primario font-semibold  ">
                {pedido.nombre}
            </td>
            <td className="min-w-40 pl-2 ">{pedido.cliente.nombre}</td>
            <td className="min-w-20 h-full  ">
                {pedido.estadoProduccion ? (
                    <div className="bg-primario mx-auto w-11 h-7 flex justify-center items-center rounded-full hover:scale-105">
                        <MdCheck size={19} className="fill-white" />
                    </div>
                ) : (
                    <div className="bg-slate-200 mx-auto w-11 h-7 flex justify-center items-center rounded-full hover:scale-105">
                        <MdHistoryToggleOff size={19} className="fill-black" />
                    </div>
                )}
            </td>
            <td className="min-w-44 pl-7">
                {pedido.estadoEntrega ? (
                    <p className="font-semibold text-primario">Reclamado</p>
                ) : (
                    <p className="font-semibold text-gray-600">No Reclamado</p>
                )}
            </td>
            <td className="min-w-40 text-center">
                {pedido.fechaEntregaEstimada}
            </td>
            <td className="min-w-52  text-center">
                <DropdownAccionesComponent pedidoId={pedido.id} actualizarTabla={getlist}/>
            </td>
        </tr>
    ));

    return (
        <main className="container mx-auto px-10 pt-10   self-center 2xl:mx-40  lg:px-14 lg:pt-16   xl:px-10   2xl:px-10 2xl:pt-28   ">
            <div className="w-full flex justify-between items-center ">
                <div className=" flex items-center gap-4">
                    <div>
                        <input
                            className="outline-none border-b-2 pl-1 pb-[1px] border-primario w-48 h-7 font-light md:w-56  md:h-10  md:font-normal  lg:text-sm lg:pb-0 text-slate-600"
                            type="search "
                            placeholder="Buscar"
                        />
                    </div>
                    <DropdownFilterComponent />
                    <Button
                        shape="circle"
                        className="bg-transparent -ml-3 hover:bg-blue-100 transition-all duration-300 "
                    >
                        <GoHistory
                            size={32}
                            className="h-5 w-5  lg:w-5 lg:h-5   fill-zinc-500"
                        />
                    </Button>
                </div>
                <ModalNewComponent actualizarTabla={getlist} />
            </div>

            <div className=" overflow-x-auto mt-10   border-x  2xl:mt-20">
                <table className="w-full text-sm  text-left border text-gray-500 font-light ">
                    <thead className="bg-white border-b ">
                        <tr className=" text-sm  text-black h-12 ">
                            <th
                                scope="col"
                                className=" min-w-20 max-w-20 text-center  font-medium"
                            >
                                Id
                            </th>
                            <th
                                scope="col"
                                className="min-w-64  max-w-64 pl-6 font-medium"
                            >
                                Pedido
                            </th>
                            <th
                                scope="col"
                                className="min-w-40 pl-2  font-medium"
                            >
                                Cliente
                            </th>
                            <th
                                scope="col"
                                className="min-w-36 text-center  font-medium "
                            >
                                Estado
                            </th>
                            <th
                                scope="col"
                                className="min-w-44 pl-7  font-medium"
                            >
                                Entrega
                            </th>
                            <th
                                scope="col"
                                className="min-w-40 text-center  font-medium"
                            >
                                Fecha de Entrega
                            </th>
                            <th
                                scope="col"
                                className="min-w-52  text-center font-medium"
                            >
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">{listapedidos}</tbody>
                </table>
            </div>
        </main>
    );
}


export default Pedidos;
