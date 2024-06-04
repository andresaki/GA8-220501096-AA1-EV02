import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// iconos
import { MdOutlineMenu , MdOutlineNotificationsNone } from "react-icons/md";
import { RiStackLine, RiSettings3Line  } from "react-icons/ri";
import { UserCircle} from "phosphor-react";

// Keep react
import { Dropdown } from "keep-react";

function Header() {
    const [isOpenHeader, setisOpenHeader] = useState(false);

    return (
        <header
            id="header"
            className={` text-gray-600 z-10 bg-white fixed top-0 left-0 w-full transition duration-700 z-20" ${
                isOpenHeader ? "shadow-xl" : "" //pone sombra cuando esta abierto el menu
            } `}
        >
            <div className="container mx-auto flex p-5 items-center flex-wrap lg:flex-nowrap">
                {/* Logo de la empresa */}
                <Link
                    className="flex flex-1 font-medium items-center text-gray-900  cursor-pointer "
                    to="/Home"
                >
					<RiStackLine  className="w-10 h-10 text-white p-2  bg-terceario rounded-full" />
                    <span className="ml-3 text-xl font-medium">Empresa</span>
                </Link>

                {/* boton para abrir menu para pantallas pequeñas */}
                <button
                    onClick={() => setisOpenHeader(!isOpenHeader)}
                    id="btn_header"
                    className=" sm:block lg:hidden bg-transparent hover:bg-blue-100 rounded-full p-1"
                    type="button"
                >

					<MdOutlineMenu className="fill-terceario w-6 h-6"/>
                </button>

                <nav
                    id="nav"
                    className={`px-10 sm:px-72  lg:px-0 w-screen lg:w-auto flex-grow  lg:flex gap-5 flex-wrap items-center text-base justify-center ${
                        isOpenHeader ? "block" : "hidden"
                    }`}
                >
                    <NavLinkComponent to={"/Home"} text={"Home"} />
                    <NavLinkComponent to={"/Inventario"} text={"Inventario"} />
                    <NavLinkComponent to={"/Clientes"} text={"Clientes"} />
                    <NavLinkComponent to={"/Pedidos"} text={"Pedidos"} />
                    <NavLinkComponent
                        to={"/Proveedores"}
                        text={"Proveedores"}
                    />
                    <NavLinkComponent
                        to={"/Contabilidad"}
                        text={"Contabilidad"}
                    />
                </nav>

                {/* separador para pantallas pequeñas */}
                <div
                    id="separador"
                    className={` mx-auto w-[calc(100%-3rem)] h-1  border-b border-gray-300  my-10 lg:hidden" ${
                        isOpenHeader ? "" : "hidden"
                    }`}
                ></div>

                <div
                    className={` justify-end  lg:m-0 w-full text-center lg:flex-1 lg:justify-end lg:flex items-center ${
                        isOpenHeader ? "" : "hidden"
                    }`}
                >
                    <DropdownComponent ></DropdownComponent>
                </div>
            </div>
        </header>
    );
}

const NavLinkComponent = ({ to, text }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `block my-9 lg:my-0 text-gray-500 text-center cursor-pointer hover:text-gray-900 hover:font-medium hover:border-terceario hover:border-b-2  transition-all ${
                    isActive
                        ? " mt-9 lg:mt4 text-gray-900 font-medium border-terceario border-b-2"
                        : ""
                }`
            }
        >
            {text}
        </NavLink>
	);
};



const DropdownComponent = () => {
    return (
        <Dropdown
            action={
                <UserCircle
                    size={32}
                    className="hover:bg-blue-100  rounded-full w-8 h-8   transition-all duration-300 bg-transparent text-terceario m-auto"
					
                />
            }
            actionClassName="border-none rounded-full py-1  focus:outline-none w-10" className="p-0  py-1 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" placement="bottom" 
        >
            <Dropdown.List  >
                <Dropdown.Item className="hover:text-primario pl-4   flex items-center text-gray-700 ">
                    <MdOutlineNotificationsNone  size={24} fontWeight={100} className="stroke-0 " />
                    <p className=" ml-3 text-sm">Notificaciones</p>
                </Dropdown.Item>
                <Dropdown.Item className="hover:text-primario pl-4   flex items-center text-gray-700 ">
                    <RiSettings3Line    size={24}  />
                    <p className=" ml-3 text-sm">Ajustes</p>
                </Dropdown.Item>
                
            </Dropdown.List>
        </Dropdown>
    );
};

export default Header;
