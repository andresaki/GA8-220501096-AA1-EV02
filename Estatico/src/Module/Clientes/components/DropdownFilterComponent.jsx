import React from "react";

// iconos
import { CiFilter } from "react-icons/ci";
import {  GoTasklist } from "react-icons/go";
import {  BiBox } from "react-icons/bi";
import { MdBrightness1} from "react-icons/md";

// Keep react
import { Dropdown} from "keep-react";

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
                <Dropdown.Item className=" pl-3  flex items-center text-primario font-semibold cursor-default hover:bg-transparent ">
                    <GoTasklist
                        size={20}
                        fontWeight={100}
                        className="stroke-0 "
                    />
                    <p className=" ml-1 text-sm">Por ordenamiento</p>
                </Dropdown.Item>
                <Dropdown.Item className="hover:text-primario pl-5   flex items-center text-gray-500 h-7 ">
                    <MdBrightness1
                        size={5}
                        fontWeight={100}
                        className="fill-gray-500 "
                    />
                    <p className=" ml-4 text-sm">Ascendente</p>
                </Dropdown.Item>
                <Dropdown.Item className="hover:text-primario pl-9   flex items-center text-gray-500 h-7 ">
                    <p className=" ml-3 text-sm">Descendente</p>
                </Dropdown.Item>
                <Dropdown.Item className="hover:text-primario pl-9   flex items-center text-gray-500 h-7 ">
                    <p className=" ml-3 text-sm">De la A a la Z</p>
                </Dropdown.Item>
                <Dropdown.Item className="hover:text-primario pl-9   flex items-center text-gray-500 h-7 ">
                    <p className=" ml-3 text-sm">De la z a la A 4</p>
                </Dropdown.Item>

                <Dropdown.Item className=" pl-3  flex items-center text-primario font-semibold cursor-default hover:bg-transparent mt-3 ">
                    <BiBox size={20} fontWeight={100} className="stroke-0 " />
                    <p className=" ml-1 text-sm">Por nº de pedidos</p>
                </Dropdown.Item>
                <Dropdown.Item className="hover:text-primario pl-9   flex items-center text-gray-500 h-7 ">
                    <p className=" ml-3 text-sm">Menos de 5</p>
                </Dropdown.Item>
                <Dropdown.Item className="hover:text-primario pl-9   flex items-center text-gray-500 h-7 ">
                    <p className=" ml-3 text-sm">Entre 5 y 10</p>
                </Dropdown.Item>
                <Dropdown.Item className="hover:text-primario pl-9   flex items-center text-gray-500 h-7 ">
                    <p className=" ml-3 text-sm">Màs de 10</p>
                </Dropdown.Item>
            </Dropdown.List>
        </Dropdown>
    );
};
