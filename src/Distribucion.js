import React, { useState,useEffect } from 'react';
import GreenFarmL from "./GreenFarmL.jpg"
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFViewer,
} from "@react-pdf/renderer";
import apicliente from './servicios/apicliente';


let localListarRegistros  = "/envios/listar";
let apiEditarRegistro     = "admin/envios/update/";
let apiShowRegistro       = "admin/envios/show/";
let apiCrearRgistro       = "admin/envios/crear"
let localEditarRegistros  = "/envios/editar/";
let localInicio           = "/";
let localRegistrar        = "/envios/alta";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
  },
  section: {
    margin: "10 px",
    padding: "10 px",
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
    marginTop: "5px", 
    fontSize: 18 
  },
  tableCell: { 
    margin: "auto", 
    marginTop: "5px", 
    fontSize: 7 
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
    fontSize: 7 
  },

});



 



// Create Document Component

     function BasicDocument2 () {
      
      
       const [valores, setvalores] = useState({})
       const [datoscargados, setdatoscargados] = useState(false)
       


       const urlSearchParams = new URLSearchParams(window.location.search);
       const id = urlSearchParams.get("id");
       
       async function llamar (){
        const resultOk = await apicliente.apifetch(apiShowRegistro+id ,"POST",{},true);
        const resultados=(JSON.parse(resultOk));
     
        setvalores({resultados})
        setdatoscargados(true)
        // return(resultados);
        
    }

    llamar();
    
       // this.getOptions("admin/colores/search"
        
    if(datoscargados===true){
      
  return (  
    
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
            
        
         
          
          
          <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol4}> 
          <Image style={{width:"50px", height:"50px",margin:"7px"}} src={GreenFarmL} />
          <Text style={{fontSize:"9px"}}>Innovaciones agricolas  </Text>  
          <Text style={{fontSize:"9px"}}> Green Farm de S. de R.L. de C.V. </Text>
          <Text style={{fontSize:"9px"}}>Lote #34, colonia Madero  </Text>
          <Text style={{fontSize:"9px"}}>C.P. 21723  </Text>
          </View> 
          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell_titulos}>Distribucion de la carga </Text> 
          </View> 
          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}>  </Text> 
          </View>   
        </View>
        <Text>{"\n"}</Text> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}> </Text> 
          </View> 
          <View style={styles.tableCol4_bordes}> 
            <Text style={styles.tableCell}>Hora de salida/Departing hour: </Text> 
          </View> 
          <View style={styles.tableCol4_bordes}> 
            <Text style={styles.tableCell} >  </Text> 
          </View> 
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}> </Text> 
          </View> 
          <View style={styles.tableCol4_bordes}> 
            <Text style={styles.tableCell}>Fecha: </Text> 
          </View> 
          <View style={styles.tableCol4_bordes}> 
            <Text style={styles.tableCell} > {valores.resultados.fecha_salida} </Text> 
          </View> 
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}> </Text> 
          </View> 
          <View style={styles.tableCol4_bordes}> 
            <Text style={styles.tableCell}>Manifiesto: </Text> 
          </View> 
          <View style={styles.tableCol4_bordes}> 
            <Text style={styles.tableCell}> {valores.resultados.manifiesto} </Text> 
          </View> 
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}> </Text> 
          </View> 
          <View style={styles.tableCol4_bordes}> 
            <Text style={styles.tableCell}>No. de viaje : </Text> 
          </View> 
          <View style={styles.tableCol4_bordes}> 
            <Text style={styles.tableCell}> {valores.resultados.no_viaje} </Text> 
          </View> 
          </View>
          <Text>{"\n"}</Text> 
          <View style={styles.tableRow}> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> Distribuidor/Distributor: </Text> 
          </View> 

          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>{valores.resultados.iddistribuidor}</Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>Transportista/ Trucking Co.: </Text> 
          </View>
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> {valores.resultados.idchofer} </Text> 
          </View>  
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> Direccion/Address: </Text> 
          </View> 

          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> Callle luis donaldo c. #123 </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> Chofer/Driver: </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>{valores.resultados.idchofer} </Text> 
          </View> 
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>Numero Termografo </Text> 
          </View> 

          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> #12789 </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> Placas tractocamion/Truck plates </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> AB34TF23 </Text> 
          </View> 
          </View>
         
          <View style={styles.tableRow}> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>Temperatura </Text> 
          </View> 

          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> {valores.resultados.temperatura} </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> Placas contenedor/ Container plates </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> A123F20 </Text> 
          </View> 
          </View>    
          <View style={styles.tableRow}> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>Observaciones/Remarks </Text> 
          </View> 

          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> Entregar caja..... </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> Numero Economico/Economic Number </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> 1278 </Text> 
          </View> 
          </View>  
          
          <Text>{"\n"}</Text> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>Acomodo </Text>  
          </View> 

          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}> Productos </Text> 
          </View> 
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol_bordes}> 
          <Text style={styles.tableCell}>01  </Text> 
          <Text style={styles.tableCell}>10 342 06  </Text> 
            <Text style={styles.tableCell}>Medium Sakura (xx)  </Text> 
            <Text style={styles.tableCell}>xx sakura    84  </Text> 
          </View> 

          <View style={styles.tableCol_bordes}> 
          <Text style={styles.tableCell}>02  </Text> 
          <Text style={styles.tableCell}>10 342 06  </Text> 
            <Text style={styles.tableCell}>Small Sakura (x)  </Text> 
            <Text style={styles.tableCell}>x sakura    98  </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> </Text> 
          </View>
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>  </Text> 
          </View>  
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol2}> 
          <Text style={styles.tableCell}>03  </Text> 
            <Text style={styles.tableCell}> <Text style={styles.tableCell}>10 342 06  </Text> 
            <Text style={styles.tableCell}>Medium Sakura (xx)  </Text> 
            <Text style={styles.tableCell}>xx sakura    84  </Text>  </Text> 
          </View> 

          
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>  </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> </Text> 
          </View> 
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol_bordes}>
          <Text style={styles.tableCell}>05 </Text>  
          <Text style={styles.tableCell}>10 342 06  2x24 </Text> 
            <Text style={styles.tableCell}>Iceless sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura    120  </Text> 
          </View> 

          <View style={styles.tableCol_bordes}> 
          <Text style={styles.tableCell}>04  </Text> 
          <Text style={styles.tableCell}>10 342 06  </Text> 
            <Text style={styles.tableCell}>Medium Sakura (xx)  </Text> 
            <Text style={styles.tableCell}>xx sakura    84  </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>  </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>  </Text> 
          </View> 
          </View>
         
          <View style={styles.tableRow}> 
          <View style={styles.tableCol_bordes}> 
          <Text style={styles.tableCell}>07  </Text> 
          <Text style={styles.tableCell}>10 342 06  </Text> 
            <Text style={styles.tableCell}>Small Sakura (x)  </Text> 
            <Text style={styles.tableCell}>x sakura    98  </Text> 
          </View> 

          <View style={styles.tableCol_bordes}> 
          <Text style={styles.tableCell}>06  </Text> 
          <Text style={styles.tableCell}>10 342 06  2x24 </Text> 
            <Text style={styles.tableCell}>Iceless sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura    120  </Text>  
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>  </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>  </Text> 
          </View> 
          </View>    
          <View style={styles.tableRow}> 
          <View style={styles.tableCol_bordes}>
          <Text style={styles.tableCell}>09  </Text>  
          <Text style={styles.tableCell}>10 342 06  2x24 </Text> 
            <Text style={styles.tableCell}>Iceless sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura    120  </Text>  
          </View> 

          <View style={styles.tableCol_bordes}>
          <Text style={styles.tableCell}>08  </Text>  
          <Text style={styles.tableCell}>10 342 06  2x24 </Text> 
            <Text style={styles.tableCell}>Iceless sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura    120  </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>  </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>  </Text> 
          </View> 
          </View>  
          <View style={styles.tableRow}> 
          <View style={styles.tableCol_bordes}> 
          <Text style={styles.tableCell}>11  </Text> 
          <Text style={styles.tableCell}>10 342 06  2x24 </Text> 
            <Text style={styles.tableCell}>Iceless sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura    120  </Text> 
          </View> 

          <View style={styles.tableCol_bordes}> 
          <Text style={styles.tableCell}>10  </Text> 
          <Text style={styles.tableCell}>10 342 06  2x24 </Text> 
            <Text style={styles.tableCell}>Iceless sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura    120  </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> </Text> 
          </View>
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> </Text> 
          </View>  
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol_bordes}>
          <Text style={styles.tableCell}>13  </Text>  
          <Text style={styles.tableCell}>10 342 05   </Text> 
            <Text style={styles.tableCell}>spinach sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura    11  </Text> 
            <Text style={styles.tableCell}>10 342 06   </Text> 
            <Text style={styles.tableCell}>spinach sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura    09  </Text> 
            <Text style={styles.tableCell}>10 342 06   </Text> 
            <Text style={styles.tableCell}>spinach sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura    09  </Text> 
          </View> 

          <View style={styles.tableCol_bordes}> 
          <Text style={styles.tableCell}>12  </Text> 
          <Text style={styles.tableCell}>10 342 06  2x24 </Text> 
            <Text style={styles.tableCell}>Iceless sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura    120  </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>  </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> </Text> 
          </View> 
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol_bordes}>
          <Text style={styles.tableCell}>15  </Text>  
          <Text style={styles.tableCell}>10 343 06  2x24 </Text> 
            <Text style={styles.tableCell}>Spinach  sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura      </Text> 
          </View> 

          <View style={styles.tableCol_bordes}> 
          <Text style={styles.tableCell}>14  </Text> 
          <Text style={styles.tableCell}>10 342 05   </Text> 
            <Text style={styles.tableCell}>spinach sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura    03  </Text> 
            <Text style={styles.tableCell}>10 342 06   </Text> 
            <Text style={styles.tableCell}>spinach sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura    05  </Text> 
            <Text style={styles.tableCell}>10 342 06   </Text> 
            <Text style={styles.tableCell}>spinach sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura     </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>  </Text> 
          </View> 
          </View>
         
          <View style={styles.tableRow}> 
          <View style={styles.tableCol_bordes}> 
          <Text style={styles.tableCell}>17  </Text> 
          <Text style={styles.tableCell}>10 342 06   </Text> 
            <Text style={styles.tableCell}>spinach sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura     </Text>  
          </View> 

          <View style={styles.tableCol_bordes}> 
          <Text style={styles.tableCell}>16  </Text> 
          <Text style={styles.tableCell}>10 342 06   </Text> 
            <Text style={styles.tableCell}>spinach sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura     </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>  </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>  </Text> 
          </View> 
          </View>    
          <View style={styles.tableRow}> 
          <View style={styles.tableCol_bordes}> 
          <Text style={styles.tableCell}>19 </Text> 
          <Text style={styles.tableCell}>10 342 06   </Text> 
            <Text style={styles.tableCell}>spinach sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura     </Text> 
          </View> 

          <View style={styles.tableCol_bordes}> 
          <Text style={styles.tableCell}>18  </Text> 
          <Text style={styles.tableCell}>10 342 06   </Text> 
            <Text style={styles.tableCell}>Medium sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura  55   </Text> 
            <Text style={styles.tableCell}>10 342 07   </Text> 
            <Text style={styles.tableCell}>Medium sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura  28   </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>  </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}> </Text> 
          </View> 
          </View> 
          <View style={styles.tableRow}> 
          <View style={styles.tableCol_bordes}> 
          <Text style={styles.tableCell}>21  </Text> 
          <Text style={styles.tableCell}>10 342 06   </Text> 
            <Text style={styles.tableCell}>Medium sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura  84   </Text> 
          </View> 

          <View style={styles.tableCol_bordes}> 
          <Text style={styles.tableCell}>20  </Text> 
          <Text style={styles.tableCell}>10 342 06   </Text> 
            <Text style={styles.tableCell}>Medium sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura  84   </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>  </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>  </Text> 
          </View> 
          </View>    
          <View style={styles.tableRow}> 
          <View style={styles.tableCol_bordes}> 
          <Text style={styles.tableCell}>23  </Text> 
          <Text style={styles.tableCell}>10 342 06   </Text> 
            <Text style={styles.tableCell}>Medium sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura  84   </Text> 
          </View> 

          <View style={styles.tableCol_bordes}> 
          <Text style={styles.tableCell}>22  </Text> 
          <Text style={styles.tableCell}>10 342 06   </Text> 
            <Text style={styles.tableCell}>Medium sakura (xx) </Text> 
            <Text style={styles.tableCell}>xx sakura  84   </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>  </Text> 
          </View> 
          <View style={styles.tableCol_bordes}> 
            <Text style={styles.tableCell}>  </Text> 
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
     
     
  
export default BasicDocument2;
     