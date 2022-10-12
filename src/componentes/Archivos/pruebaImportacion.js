import React from 'react';
import GreenFarmL from "../../GreenFarmL.jpg"
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFViewer,
} from "@react-pdf/renderer";
import apicliente from '../../servicios/apicliente';

let localListarRegistros  = "/envios/listar";
let apiEditarRegistro     = "admin/envios/update/";
let apiShowRegistro       = "admin/envios/show/";
let apiCrearRgistro       = "admin/envios/crear"
let localEditarRegistros  = "/envios/editar/";
let localInicio           = "/";
let localRegistrar        = "/envios/alta";
const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      color: "black",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
    table: { 
      display: "table", 
      width: "auto", 
      borderStyle: "solid", 
      borderWidth: 0, 
      borderRightWidth: 0, 
      borderBottomWidth: 0 
    }, 
    tableRow: { 
      margin: "auto", 
      flexDirection: "row" 
    }, 
    tableCol: { 
      width: "25%", 
      borderStyle: "solid", 
      borderWidth: 0, 
      borderLeftWidth: 0, 
      borderTopWidth: 0 
    },
    tableCol_bordes: { 
      width: "25%", 
      borderStyle: "solid", 
      borderWidth: 1, 
      borderLeftWidth: 1, 
      borderTopWidth: 1 
    },  
    tableCell_titulos: { 
      margin: "auto", 
      marginTop: 5, 
      fontSize: 18 
    },
    tableCell: { 
      margin: "auto", 
      marginTop: 5, 
      fontSize: 10 
    },
    tableCol2: { 
      width: "50%", 
      borderStyle: "solid", 
      borderWidth: 1, 
      borderLeftWidth: 1, 
      borderTopWidth: 1 
    },
    tableCol3: { 
      width: "100%", 
      borderStyle: "solid", 
      borderWidth: 1, 
      borderLeftWidth: 1, 
      borderTopWidth: 1 
    },
    tableCol4: { 
      width: "33%", 
      borderStyle: "solid", 
      borderWidth: 0, 
      borderLeftWidth: 0, 
      borderTopWidth: 0 
    },
    tableCol4_bordes: { 
      width: "33%", 
      borderStyle: "solid", 
      borderWidth: 1, 
      borderLeftWidth: 1, 
      borderTopWidth: 1 
    },
    tableCell3: { 
      textAlign:"left",
      margin: "auto", 
      marginTop: 5, 
      fontSize: 10 
    },
  
  });

class Importacion extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { idRegistro:this.props.match.params.id,
        
        datosCargados: false,

        registro:[],
    
       
            
     }

    async componentDidMount(){

      
        // this.getOptions("admin/colores/search");
        
     ;
        
         
         const resultOk = await apicliente.apifetch(apiShowRegistro+this.props.match.params.id,"POST",{},true);
         this.setState({ datosCargados:true,registro:JSON.parse(resultOk) })
         
        
    }
     BasicDocument2 = () => {
    
    
        return (
            this.BasicDocument2()
           
        );
    }
         
    }

 
export default Importacion;