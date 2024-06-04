import React from "react";

// iconos
import { CiFilter } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { MdOutlineInventory } from "react-icons/md";

// Keep react
import { Dropdown } from "keep-react";


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
            className="p-0  py-1 w-48 origin-top-right rounded-md bg-white shadow-sm focus:outline-none"
            placement="right-start"
        >
            <Dropdown.List>
                <Dropdown.Item className=" pl-3  flex items-center text-primario font-semibold cursor-default hover:bg-transparent ">
                    <BiCategory
                        size={20}
                        fontWeight={100}
                        className="stroke-0 "
                    />
                    <p className=" ml-1 text-sm">Categorias</p>
                </Dropdown.Item>
                <Dropdown.Item className="hover:text-primario pl-9   flex items-center text-gray-600 h-7 ">
                    <p className=" ml-3 text-sm">categoria 1</p>
                </Dropdown.Item>
                <Dropdown.Item className="hover:text-primario pl-9   flex items-center text-gray-600 h-7 ">
                    <p className=" ml-3 text-sm">categoria 2</p>
                </Dropdown.Item>
                <Dropdown.Item className="hover:text-primario pl-9   flex items-center text-gray-600 h-7 ">
                    <p className=" ml-3 text-sm">categoria 3</p>
                </Dropdown.Item>
                <Dropdown.Item className="hover:text-primario pl-9   flex items-center text-gray-600 h-7 ">
                    <p className=" ml-3 text-sm">Categoria 4</p>
                </Dropdown.Item>
                <Dropdown.Item className=" pl-3  flex items-center text-primario font-semibold cursor-default hover:bg-transparent mt-3 ">
                    <MdOutlineInventory
                        size={20}
                        fontWeight={100}
                        className="stroke-0 "
                    />
                    <p className=" ml-1 text-sm">Stock</p>
                </Dropdown.Item>
                <Dropdown.Item className="hover:text-primario pl-9   flex items-center text-gray-600 h-7 ">
                    <p className=" ml-3 text-sm">Alto</p>
                </Dropdown.Item>
                <Dropdown.Item className="hover:text-primario pl-9   flex items-center text-gray-600 h-7 ">
                    <p className=" ml-3 text-sm">Escaso</p>
                </Dropdown.Item>
                <Dropdown.Item className="hover:text-primario pl-9   flex items-center text-gray-600 h-7 ">
                    <p className=" ml-3 text-sm">Nulo</p>
                </Dropdown.Item>
            </Dropdown.List>
        </Dropdown>
    );
};
