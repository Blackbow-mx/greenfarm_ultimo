import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";
import Inicio from "./Inicio";
import "./App.css";
import BasicDocument from "../src/MovieList";
import BasicDocument2 from "./Distribucion";
import Importacion from "./componentes/Archivos/pruebaImportacion";
import Factura from "./componentes/Archivos/Facturas";








let numero 
let posicion = window.location.toString();
let factura = posicion.indexOf("http://localhost:3000/documento/factura/?id=");
let avisoimportacion = posicion.indexOf("http://localhost:3000/documento/avisoimportacion/?id=");
let acomodo = posicion.indexOf("http://localhost:3000/documento/acomodo/?id=");
let localLogin       = "/login";

const App = () => {
  
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  
    if(!localStorage.token || localStorage.token===null ){
  return(
    <Inicio/>
    
  ) 
  
  }
  
else if((factura != -1) ){
  return(
   
  
  <Factura/>
  
     
  )
 }
 else if((avisoimportacion != -1) ){
  return(
   
   <BasicDocument/>
 
     
  )
 }
 else if((acomodo != -1) ){
  return(
   
  
  <BasicDocument2/>
     
  )
 }
 else{
  return (
    
    
    
    <Router>
      
      
      <div className="App wrapper">
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
               
        
      </div>
     
    </Router>
    
  );
 }
};


export default App;
