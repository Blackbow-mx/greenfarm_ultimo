import React, { useState,useEffect } from 'react';
import apicliente from './servicios/apicliente';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Column,
  ROW,
  PDFViewer,
} from "@react-pdf/renderer";
import Logo_sat from "../src/sat_logo2.png";
import logo_shcp from "../src/logoshcp.png";
import { Row } from 'jspdf-react';
// Create styles
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
    padding:"15px 15px 15px 15px",
  
    

  },
  section: {
    margin: "10px",
    padding: "10px",
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  table: { 
    display: "table", 
    width: "auto", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderRightWidth: 1, 
    borderBottomWidth: 1 
  }, 
  tableRow: { 
    margin: "auto", 
    flexDirection: "row" 
  }, 
  tableCol: { 
    width: "25%", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 1, 
    borderTopWidth: 1 
  }, 
  tableCell: { 
    margin: "auto", 
    marginTop: "5px", 
    fontSize: 9 
  },
  tableCol2: { 
    width: "50%", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 1, 
    borderTopWidth: 1 
  },
  tableCol2_sb: { 
    width: "50%",  
    borderWidth: 0, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
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
    borderWidth: 1, 
    borderLeftWidth: 1, 
    borderTopWidth: 1 
  },
  tableCell3: { 
    textAlign:"left",
    margin: "auto", 
    marginTop: "5px", 
    fontSize: 10 
  },
  tableCol4_sb: { 
    width: "33%", 
    borderWidth: 0, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  },
  tableCol3_sb: { 
    width: "100%", 
    borderWidth: 0, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  },
  tableCell3_firma: { 
    textAlign:"left", 
    marginTop: "5px", 
    fontSize: 10 }

});



// Create Document Component
function BasicDocument() {
 
 

  const [valores, setvalores] = useState({})
       const [datoscargados, setdatoscargados] = useState(false)
       const [valores_tr, setvalores_tr] = useState({})
       const [datoscargados_tr, setdatoscargados_tr] = useState(false)
       const [valores_cmp, setvalores_cmp] = useState({})
       const [datoscargados_cmp, setdatoscargados_cmp] = useState(false)
       const [valores_rach, setvalores_rach] = useState({})
       const [datoscargados_rach, setdatoscargados_rach] = useState(false)
       


       const urlSearchParams = new URLSearchParams(window.location.search);
       const id = urlSearchParams.get("id");
       
       async function llamar (){
        const resultOk = await apicliente.apifetch(apiShowRegistro+id ,"POST",{},true);
        const resultados=(JSON.parse(resultOk));
     
        setvalores({resultados})
        setdatoscargados(true)
       
        // return(resultados);
        
       }

    async function llamar_transportes (){

      
     let id="4"//valores.resultados.idchofer;
     
    

      const resultOk = await apicliente.apifetch("admin/chofers/show/"+id,"POST",{},true);
      const resultados_trs=(JSON.parse(resultOk))
    
      setvalores_tr ({resultados_trs})
      setdatoscargados_tr (true)
     

     //if(datoscargados===true){
      //console.log(valores.resultados.idchofer)
      
    
   
     //}else{
      // console.log("espera perrin")
     //}
     
       return(resultados_trs);
       
  }

  async function llamar_cmp (){

      
    let id="8"//valores.resultados.idcompania;
    
   

     const resultOk = await apicliente.apifetch("admin/ciatransportes/show/"+id,"POST",{},true);
     const resultados_cmp=(JSON.parse(resultOk))
     
   
     setvalores_cmp ({resultados_cmp})
     setdatoscargados_cmp (true)
    

    //if(datoscargados===true){
     //console.log(valores_tr.resultados_trs.id)
     
   
  
    //}else{
     // console.log("espera perrin")
    //}
    
      return(resultados_cmp);
      
 }

 async function llamar_ranchos (){

      
let raw ={
  "nombre": "Rainfield Ranches Bandini L.P."
}
  
 

   const resultOk = await apicliente.apifetch("admin/ranchs/show/2","POST",{},true);
   const resultados_rach=(JSON.parse(resultOk))
   
 
   setvalores_rach ({resultados_rach})
   setdatoscargados_rach (true)
  

  //if(datoscargados===true){
   //console.log(valores_tr.resultados_trs.id)
   
 

  //}else{
   // console.log("espera perrin")
  //}
  
    return(resultados_rach);
    
}





  

    llamar();
    llamar_transportes();
    llamar_cmp();
    llamar_ranchos();
    
    if(datoscargados===true && datoscargados_rach===true && datoscargados_tr===true && datoscargados_cmp){





  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
        
         
            <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol4_sb}> 
          <Image style={{  width:"40px", height:"35px",margin:"5px", } } src={logo_shcp} />
          </View> 
          <View style={styles.tableCol4_sb}> 
          <Text style={{fontSize:"9px",textAlign:"center",marginTop:"5px", marginBotton:"5px" }}>Avíso de importación o exportación temporal y retorno de envases </Text> 
          </View> 
      
          
          <View style={styles.tableCol4_sb}> 
          <Image style={{ width:"60px", height:"35px",margin:"5px", marginLeft: "80px", marginBottom:"auto",marginTop:"auto" }} src={Logo_sat} />
          </View>
          
        </View>
        </View>
         
         
         
         
          <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Importacion (  )</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Exportacion (  )</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Retorno ( x )</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Numero de folio (  )</Text> 
          </View>
          
        </View>
        <Text>{"\n"}</Text> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>Fecha de ingreso, salida o de retorno </Text> 
          </View> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}> Fecha de vencimiento </Text> 
          </View> 
          
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>{valores.resultados.fecha_salida} </Text> 
          </View> 

          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>{valores.resultados.fecha_salida} </Text> 
          </View> 
          
          </View>
          <Text>{"\n"}</Text> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol3}> 
            <Text style={styles.tableCell3}> Datos del propietario </Text> 
          </View> 
          
          
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}> Nombre completo: {valores_rach.resultados_rach.propietario} </Text> 
          </View> 

          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}> Razon social: {valores_rach.resultados_rach.nombre} </Text> 
          </View> 
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>Domicilio: {valores_rach.resultados_rach.domicilio} </Text> 
          </View> 

          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>Tax Id:{valores_rach.resultados_rach.taxid} </Text> 
          </View> 
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}> Telefono {valores_rach.resultados_rach.telefono} </Text> 
          </View> 

          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}> Correo: {valores_rach.resultados_rach.correo} </Text> 
          </View>
           
          </View>
          <Text>{"\n"}</Text> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol3}> 
            <Text style={styles.tableCell3}> Datos de la persona que importa, exporta o retorna los envases  </Text> 
          </View> 
          
          
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}> Nombre Completo: Lopez Palomares Jose Angel </Text> 
          </View> 

          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}> Razon social: Innovaciones Agricolas Green Farm S.de E.L. de C.V. </Text> 
          </View> 
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}> Domicilio: Carretera de colonia Madero a colonia de Benito Juarez lote 34 colonia Madero CP 21723,Mexicali,Baja California, Mexico </Text> 
          </View> 

          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}> Tax Id: IAG160808RE5  </Text> 
          </View> 
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}> Numero: 686 113 9590 </Text> 
          </View> 

          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}> Correo: josel@greenonionfarm.com  </Text> 
          </View> 
        
          </View>
          <Text>{"\n"}</Text> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol3}> 
            <Text style={styles.tableCell3}> Datos del transportista y/o quien realiza el tramite  </Text> 
          </View> 
          
          
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}> Nombre completo: {valores_cmp.resultados_cmp.propietario} </Text> 
          </View> 

          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>Razon social: {valores_cmp.resultados_cmp.nombre} </Text> 
          </View> 
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}> Domicilio: {valores_cmp.resultados_cmp.domicilio} </Text> 
          </View> 

          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}> Tax Id:  </Text> 
          </View> 
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}> {valores_cmp.resultados_cmp.telefono} </Text> 
          </View> 

          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}> Correo: {valores_cmp.resultados_cmp.correo} </Text> 
          </View> 
          </View>
          <Text>{"\n"}</Text> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol3}> 
            <Text style={styles.tableCell3}> Datos de los envases  </Text> 
          </View> 
          
          
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}>Cantidad de envases: </Text> 
          </View> 

          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}>Descripcion: </Text> 
          </View> 
          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}>Valor unitario: </Text> 
          </View> 
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol3}> 
          <Text style={styles.tableCell3_firma}>Firma: </Text> 
          </View> 

          </View>
          <Text>{"\n"}</Text> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol3}> 
            <Text style={styles.tableCell3}> Validacion del aviso de impotacion,exportacion o retorno </Text> 
          </View> 
          
          
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}>Fecha: </Text> 
          </View> 

          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}>Aduana: </Text> 
          </View> 
          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}>Clave  </Text> 
          </View> 
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}> </Text> 
          </View> 

          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}> </Text> 
          </View> 
          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}> </Text> 
          </View> 
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}>Nombre: </Text> 
          </View> 

          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}>No. gafete de empleado: </Text> 
          </View> 
          <View style={styles.tableCol2_sb}>
          <Text style={styles.tableCell}> Sello aduana </Text> 
          </View> 
          </View>
         
          <View style={styles.tableRow}> 
          <View style={styles.tableCol3_sb}> 
          <Text style={styles.tableCell3_firma}>Firma: </Text> 
          </View> 
          </View>

          <Text>{"\n"}</Text> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell3}> Rectificacion </Text> 
          </View> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell3}> No.de folio </Text> 
          </View> 
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell3}>  </Text> 
          </View> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell3}>  </Text> 
          </View> 
          </View>
          
          
          <View style={styles.tableRow}> 
          <View style={styles.tableCol3}> 
            <Text style={styles.tableCell}> </Text> 
          </View> 
          </View>
      
          
          
          <Text>{"\n"}</Text> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol3}> 
          <Text style={styles.tableCell3}> Aduana o seccion aduanera que interviene en la rectificacion </Text> 
          </View> 
          
          
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}>Fecha: </Text> 
          </View> 

          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}>Aduana: </Text> 
          </View> 
          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}>Clave  </Text> 
          </View> 
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}> </Text> 
          </View> 

          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}> </Text> 
          </View> 
          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}> </Text> 
          </View> 
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}>Nombre: </Text> 
          </View> 

          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}>No. gafete de empleado: </Text> 
          </View> 
          <View style={styles.tableCol2_sb}>
          <Text style={styles.tableCell}> Sello aduana </Text> 
          </View> 
          </View>
         
          <View style={styles.tableRow}> 
          <View style={styles.tableCol3_sb}> 
          <Text style={styles.tableCell3_firma}>Firma: </Text> 
          </View> 

          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}> </Text> 
          </View> 
          
          </View>
        </View> 
          
        </Page>
      </Document>
    </PDFViewer>
  );
    
}else{
  return(<div>Cargando...</div>)
 }
}
export default BasicDocument;