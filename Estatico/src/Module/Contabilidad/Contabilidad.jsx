import React from "react";

// iconos
import { TbReportMoney } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

function Contabilidad() {
    return (
        <main className="mx-auto flex justify-center items-center  flex-col mt-36 sm:mt-44 lg:mt-52 xl:mt-64 ">

            <h1 className="font-medium text-xl text-black ">Seleccione el apartado</h1>

            <div className="mt-24  sm:flex gap-x-32 ">

                <div className="hover:scale-105 transition-all duration-200 mb-10 sm:mb-0 ">
                    <div className="  lg:w-40 lg:h-40 rounded-xl    xl:w-[200px] xl:h-[200px] bg-primario text-white flex items-center justify-center"><HiOutlineCurrencyDollar size={110}/></div> 
                    <h2 className=" font-medium lg:text-2xl xl:text-[32px] text-primario text-center mt-4 sm:mt-12">Ingresos</h2>
                </div>

                <div className="hover:scale-105 transition-all duration-200">
                    <div className="  lg:w-40 lg:h-40 rounded-xl xl:w-[200px] xl:h-[200px] bg-[#E3E3E3] text-black flex items-center justify-center"><TbReportMoney size={110}/></div> 
                    <h2 className=" font-medium lg:text-2xl xl:text-[32px] text-[#767676] text-center mt-4 sm:mt-12">Gastos</h2>
                </div>
                
            </div>

        </main>
    );
}

export default Contabilidad;
