import axios  from "axios";
import React, { useEffect ,useState} from "react";
import { Link } from "react-router-dom";
import { UserCircle} from "phosphor-react";
import { AreaChart } from "keep-react";

function Home() {

  const [pedidos, setpedidos] = useState([]);

  const getPedidos  = () => {
    axios.get("/api/pedidos")
      .then((response) => {
        setpedidos(response.data)
        console.log(response.data)
      })
  }

  useEffect(() => {
    getPedidos();
  },[])

  const pedidosCompletados = pedidos.filter(pedido => pedido.estadoProduccion === 1).length;
  const pedidosPendientes = pedidos.filter(pedido => pedido.estadoProduccion === 0).length;
  const pedidosReclamados = pedidos.filter(pedido => pedido.estadoEntrega === 1).length;
  const pedidosTotales = pedidos.length;
  

  return (
      <main className="container mx-auto pt-20">
          <div>
              <h1 className="text-center text-primario  font-semibold text-lg mb-10  lg:text-lg ">
                  Datos Interesantes
              </h1>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-4 md:p-6">
                  <Card texto={"Total de pedidos"} informacion={pedidosTotales}>
                      {" "}
                      <UserCircle size={20} className="text-primario" />{" "}
                  </Card>
                  <Card
                      texto={"Total de completados"}
                      informacion={pedidosCompletados}
                  >
                      {" "}
                      <UserCircle size={20} className="text-primario" />{" "}
                  </Card>
                  <Card
                      texto={"Total de pendientes"}
                      informacion={pedidosPendientes}
                  >
                      {" "}
                      <UserCircle size={20} className="text-primario" />{" "}
                  </Card>
                  <Card
                      texto={"Total de reclamados"}
                      informacion={pedidosReclamados}
                  >
                      {" "}
                      <UserCircle size={20} className="text-primario" />{" "}
                  </Card>

              <div className="col-span-1 md:col-span-2 lg:col-span-2 ">
                  <CardArea
                      titulo={"Ingresos"}
                      texto={"Ingresos de los ultimos 6 meses"}
                  >
                      <AreaChart
                          dataKey="x"
                          secondaryDataKey="y"
                          showGridLine={true}
                          showXAxis={true}
                          showYAxis={true}
                          chartData={data}
                          XAxisDataKey="x"
                          YAxisDataKey="y"
                          showTooltip={true}
                          chartColor="#16A085"
                          secondaryChartColor="#2E86C1"
                          secondaryAreaStoke="#004DB3"
                          />
                  </CardArea>
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-2 ">
                  <CardArea
                      titulo={"Egresos"}
                      texto={"Egresos de los ultimos 6 meses"}
                  >
                      <AreaChart
                          dataKey="x"
                          secondaryDataKey="y"
                          showGridLine={true}
                          showXAxis={true}
                          showYAxis={true}
                          chartData={data2}
                          XAxisDataKey="x"
                          YAxisDataKey="y"
                          showTooltip={true}
                          chartColor="#16A085"
                          secondaryChartColor="#2E86C1"
                          secondaryAreaStoke="#004DB3"
                          />
                  </CardArea>

          
              </div>
              </div>
          </div>
      </main>
  );
}





const Card =({informacion , texto , color , to = "/", children}) => {
  return (

    <div className="shadow-sm border p-6 rounded-lg">
      <Link to={to}>
        <div className="flex flex-row items-center justify-between pb-2">
            <h1 className="text-sm font-medium"> {texto}</h1>
            {children}
        </div>
        <div className="pt-3">
          <h2 className="text-2xl font-bold text-primario pb-1 ml-1 ">{informacion}</h2>
          <p className="text-xs text-gray-500 "> +12.5% desde el mes pasado</p>
        </div>
      </Link>
    </div>

  );
}

const CardArea =({titulo , texto ,children}) => {
  return (

    <div className="shadow-sm border p-6 rounded-lg">
        <div className="pt-3">
          <h2 className="text-2xl font-bold text-primario pb-1 ">{titulo}</h2>
          <p className="text-xs text-gray-500 "> {texto}</p>
        </div>
        <div className="pt-10 px-3">{children}</div>
    </div>
  );
}


const data = [
  { x: "Jan", y: 60 },
  { x: "Feb", y: 48 },
  { x: "Mar", y: 177 },
  { x: "Apr", y: 78 },
  { x: "May", y: 96 },
  { x: "Jun", y: 204 },
]
const data2 = [
  { x: "Jan", y: 40 },
  { x: "Feb", y: 30 },
  { x: "Mar", y: 50 },
  { x: "Apr", y: 40 },
  { x: "May", y: 65 },
  { x: "Jun", y: 50 },
]
export default Home;