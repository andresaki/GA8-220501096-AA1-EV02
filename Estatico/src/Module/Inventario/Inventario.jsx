import React from "react";

// iconos
import { GoHistory } from "react-icons/go";

// Keep react
import {  Button } from "keep-react";


// data
import { productos } from "../../Data/Productos";

// Menus y modales
import { ModalNewComponent } from "./Components/ModalNewComponent";
import { DropdownAccionesComponent } from "./Components/DropdownAccionesComponent";
import { DropdownFilterComponent } from "./Components/DropdownFilterComponent";

function Inventario() {
    const listaProductos = productos.map((producto) => (
        <tr
            key={producto.id}
            className="  bg-white border-b cursor-default  h-9 hover:bg-gray-50 font-light text-xs text-neutral-600 "
        >
            <td className="pl-10 ">{producto.id} </td>
            <td className="text-primario font-medium cursor-pointer">
                {producto.nombreProducto}
            </td>
            <td className="pl-4">{producto.cantidadInicial}</td>
            <td className="pl-7 font-medium text-primario">
                {producto.stockMinimo}
            </td>
            <td className="">{producto.fechaModificacion}</td>
            <td>
                <DropdownAccionesComponent productoId={producto.id} />
            </td>
        </tr>
    ));

    return (
        <main className="container mx-auto px-10 pt-10   self-center  lg:px-32 lg:pt-16   xl:px-24 xl:   2xl:px-32 2xl:pt-28   ">
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
                <ModalNewComponent />
            </div>

            <div className=" overflow-x-auto mt-16 lg:mx-8 xl:mx-7 border-x 2xl:mx-16 2xl:mt-20">
                <table className="w-full text-sm  text-left border text-gray-500 font-light">
                    <thead className="bg-white border-b">
                        <tr className=" text-sm  text-black h-12 ">
                            <th
                                scope="col"
                                className=" pl-10 pr-20  font-medium"
                            >
                                Id
                            </th>
                            <th scope="col" className="pr-48   font-medium">
                                Nombre
                            </th>
                            <th scope="col" className="pr-28  font-medium">
                                Unidades
                            </th>
                            <th
                                scope="col"
                                className="pr-32 whitespace-nowrap   font-medium "
                            >
                                Stock min
                            </th>
                            <th scope="col" className="pr-20   font-medium">
                                Modificaion
                            </th>
                            <th scope="col" className="pr-32 "></th>
                        </tr>
                    </thead>
                    <tbody className="">{listaProductos}</tbody>
                </table>
            </div>
        </main>
    );
}

export default Inventario;