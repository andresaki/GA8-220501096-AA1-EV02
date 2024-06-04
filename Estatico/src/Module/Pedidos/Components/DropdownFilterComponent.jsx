import React from "react";

// iconos
import { CiFilter} from "react-icons/ci";
import {  MdCheck} from "react-icons/md";

// Keep react
import { Dropdown, Divider} from "keep-react";


export const DropdownFilterComponent = () => {
    return (
        <Dropdown
            action={
                <CiFilter
                    size={32}
                    className=" rounded-full h-6     w-6  lg:w-5 lg:h-5   fill-gray-600 transition-all duration-300 bg-transparent m-auto"
                />
            }
            actionClassName="border-none hover:bg-blue-100  rounded-full flex items-center justify-center  h-10 focus:outline-none w-10 transition-all duration-300"
            className="p-0  py-1 w-52 origin-top-right rounded-md bg-white shadow-sm focus:outline-none"
            placement="right-start"
        >
            <Dropdown.List>
                <Dropdown.Item className=" pl-3  flex items-center text-gray-600 hover:text-primario cursor-default hover:bg-transparent ">
                    <MdCheck size={20} fontWeight={100} />
                    <p className=" ml-1 text-sm">Ascendente</p>
                </Dropdown.Item>
                <Dropdown.Item className=" pl-3  flex items-center text-gray-600 hover:text-primario cursor-default hover:bg-transparent ">
                    <MdCheck
                        size={20}
                        fontWeight={100}
                        className="fill-transparent "
                    />
                    <p className=" ml-1 text-sm">Descendente</p>
                </Dropdown.Item>

                <Divider className="w-11/12 mx-auto my-2" />

                <Dropdown.Item className=" pl-3  flex items-center text-gray-600 hover:text-primario cursor-default hover:bg-transparent ">
                    <MdCheck
                        size={20}
                        fontWeight={100}
                        className="fill-transparent "
                    />
                    <p className=" ml-1 text-sm">Pendientes</p>
                </Dropdown.Item>
                <Dropdown.Item className=" pl-3  flex items-center text-gray-600 hover:text-primario cursor-default hover:bg-transparent ">
                    <MdCheck
                        size={20}
                        fontWeight={100}
                        className="fill-transparent "
                    />
                    <p className=" ml-1 text-sm">Completados </p>
                </Dropdown.Item>

                <Divider className="w-11/12 mx-auto my-2" />

                <Dropdown.Item className=" pl-3  flex items-center text-gray-600 hover:text-primario cursor-default hover:bg-transparent ">
                    <MdCheck
                        size={20}
                        fontWeight={100}
                        className="fill-transparent "
                    />
                    <p className=" ml-1 text-sm">Reclamados</p>
                </Dropdown.Item>
                <Dropdown.Item className=" pl-3  flex items-center text-gray-600 hover:text-primario cursor-default hover:bg-transparent ">
                    <MdCheck
                        size={20}
                        fontWeight={100}
                        className="fill-transparent "
                    />
                    <p className=" ml-1 text-sm">No reclamados </p>
                </Dropdown.Item>
                <Divider className="w-11/12 mx-auto my-2" />

                <Dropdown.Item className=" pl-3  flex items-center text-gray-600 hover:text-primario cursor-default hover:bg-transparent ">
                    <MdCheck
                        size={20}
                        fontWeight={100}
                        className="fill-transparent "
                    />
                    <p className=" ml-1 text-sm">Pagados</p>
                </Dropdown.Item>
                <Dropdown.Item className=" pl-3  flex items-center text-gray-600 hover:text-primario cursor-default hover:bg-transparent ">
                    <MdCheck
                        size={20}
                        fontWeight={100}
                        className="fill-transparent "
                    />
                    <p className=" ml-1 text-sm">No pagados </p>
                </Dropdown.Item>

                <Divider className="w-11/12 mx-auto my-2" />

                <Dropdown.Item className=" pl-3  flex items-center text-gray-600 hover:text-primario cursor-default hover:bg-transparent ">
                    <MdCheck
                        size={20}
                        fontWeight={100}
                        className="fill-transparent "
                    />
                    <p className=" ml-1 text-sm">Fecha de Entrega</p>
                </Dropdown.Item>
            </Dropdown.List>
        </Dropdown>
    );
};
