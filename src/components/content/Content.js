import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import Topbar from "./Topbar";
import Insumos from "../../componentes/Insumos/Insumos";
import InsumosAlta from "../../componentes/Insumos/InsumosAlta";	
import Cartones from "../../componentes/Cartones/Cartones";
import CartonesAlta from "../../componentes/Cartones/CartonesAlta";
import Ciatransportes from "../../componentes/Ciatransportes/Ciatransportes";
import CiatransportesAlta from "../../componentes/Ciatransportes/CiatransportesAlta";
import Distribuidores from "../../componentes/Distribuidores/Distribuidores";
import DistribuidoresAlta from "../../componentes/Distribuidores/DistibuidoresAlta";
import Ranchs from "../../componentes/Ranchs/Ranchs";
import RanchsAlta from "../../componentes/Ranchs/RanchsAlta";
import Insumoscajas2 from "../../componentes/Insumoscajas2/Insumoscajas2";
import Insumoscajas2Alta from "../../componentes/Insumoscajas2/Insumoscajas2Alta";
import Chofers from "../../componentes/Chofers/Chofers";
import ChofersAlta from "../../componentes/Chofers/ChofersAlta";
import Paramsportransporte from "../../componentes/Paramsportransporte/Paramsportransporte";
import ParamsportransporteAlta from "../../componentes/Paramsportransporte/ParamsportransporteAlta";
import Acomodo from "../../componentes/Acomodo/Acomodo";
import AcomodoAlta from "../../componentes/Acomodo/AcomodoAlta";
import Envios from "../../componentes/Envios/Envios";
import EnviosAlta from "../../componentes/Envios/EnviosAlta";
import Importacion from "../../componentes/Archivos/pruebaImportacion";
import Proveedores from "../../componentes/Proveedores/ProveedoresListar";
import ProveedoresAlta from "../../componentes/Proveedores/ProveedoresRegistro";
import Almacencartones2 from "../../componentes/Almacencartones2/Almacencartones2Listar";
import Almacencartones2Alta from "../../componentes/Almacencartones2/Almacencartones2Registro";
import AcomodoG_d from "../../componentes/UI/AcomodoG_dragdrop";
import Documentos from "../../componentes/Archivos/Documentos";
import Archivo from "../../componentes/Carga_arch/carga";
import Insumosgenerales from "../../componentes/Insumosgenerales/InsumosgeneralesListar";
import InsumosgeneralesAlta from "../../componentes/Insumosgenerales/InsumosgeneralesRegistro";
import Tiposinsumos from "../../componentes/Tiposinsumos/TiposinsumosListar";
import TiposinsumosAlta from "../../componentes/Tiposinsumos/TiposinsumosRegistro";
import Insumosreporte from "../../componentes/insumosxenvioformato/insumosreporte";
import Insumosreportemenu from "../../componentes/insumosxenvioformato/insumosreportemenu";		
import Importacionesarc from "../../componentes/Archivos/importacionesarc";	
import Tags from "../../componentes/Tags/TagsListar";
import TagsAlta from "../../componentes/Tags/TagsRegistro";
import Agrupaciones from "../../componentes/Tags/Agrupacion";
		
		
		
	
		
		
		

		
		


		
		
	
		
	
		

		




function Content({ sidebarIsOpen, toggleSidebar }) {


  return (
    <Container
      fluid
      className={classNames("content", { "is-open": sidebarIsOpen })}
    >
      <Topbar toggleSidebar={toggleSidebar} />
      <Switch>

       <Route exact path="/" component={Envios}></Route>
        <Route path="/insumos/listar" component={Insumos}></Route>
        <Route path="/insumos/editar/:id" component={InsumosAlta}></Route>
        <Route path="/cartones/listar" component={Cartones}></Route>
        <Route path="/cartones/editar/:id" component={CartonesAlta}></Route>
        <Route path="/ciatransportes/listar" component={Ciatransportes}></Route>
        <Route path="/ciatransportes/editar/:id" component={CiatransportesAlta}></Route>
        <Route path="/distribuidores/listar" component={Distribuidores}></Route>
        <Route path="/distribuidores/editar/:id" component={DistribuidoresAlta}></Route>
        <Route path="/ranchs/listar" component={Ranchs}></Route>
        <Route path="/ranchs/editar/:id" component={RanchsAlta}></Route>
        <Route path="/insumoscajas2/listar" component={Insumoscajas2}></Route>
        <Route path="/insumoscajas2/editar/:id" component={Insumoscajas2Alta}></Route>
        <Route path="/chofers/listar" component={Chofers}></Route>
        <Route path="/chofers/editar/:id" component={ChofersAlta}></Route>
        <Route path="/envios/listar" component={Envios}></Route>
        <Route path="/envios/editar/:id" component={EnviosAlta}></Route>
        <Route path="/paramsportransporte/listar" component={Paramsportransporte}></Route>
        <Route path="/paramsportransporte/editar/:id" component={ParamsportransporteAlta}></Route>
        <Route path="/acomodo/listar" component={Acomodo}></Route>
        <Route path="/acomodo/editar/:id" component={AcomodoAlta}></Route>
        <Route path="/documento/avisoimportacion/:id" component={Importacion}></Route>
		    <Route  path="/proveedores/listar" component={Proveedores}></Route>
        <Route path="/proveedores/editar/:id" component={ProveedoresAlta}></Route>
        <Route  path="/almacencartones2/listar" component={Almacencartones2}></Route>
        <Route path="/almacencartones2/editar/:id" component={Almacencartones2Alta}></Route>
        <Route  path="/acomodo/:id" component={AcomodoG_d}></Route>
        <Route path="/documentos/generar/:id" component={Documentos}></Route>
        <Route path="/carga" component={Archivo}></Route>
        <Route  path="/insumosgenerales/listar" component={Insumosgenerales}></Route>
         <Route path="/insumosgenerales/editar/:id" component={InsumosgeneralesAlta}></Route>
         <Route  path="/tiposinsumos/listar" component={Tiposinsumos}></Route>
          <Route path="/tiposinsumos/editar/:id" component={TiposinsumosAlta}></Route>
          <Route path="/reporteinsumos/listar/:id" component={Insumosreporte}></Route>
          <Route path="/reporteinsumos2/listar/" component={Insumosreportemenu}></Route>
          <Route  path="/tags/listar" component={Tags}></Route>
          <Route path="/tags/editar/:id" component={TagsAlta}></Route>
          <Route path="/tags/agrupaciones/:id" component={Agrupaciones}></Route>
          
		

        
        





      </Switch>
    </Container>
  );
}

export default Content;
