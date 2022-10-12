import React, { useState,useEffect } from 'react';
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
import{Link} from "react-router-dom";
import apicliente from "../../servicios/apicliente"



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
  tableCol01: { 
    width: "25%", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 1, 
    borderTopWidth: 1,
    borderBottomWidth:1
  }, 
  tableCol01_sb: { 
    width: "25%", 
    borderStyle: "solid", 
    borderWidth: 0, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  },   
  tableCell_titulos: { 
    margin: "auto", 
    marginTop: "5px", 
    fontSize: 18 
  },
  tableCell: { 
    margin: "auto", 
    marginTop: "5px", 
    fontSize: 10 
  },
  tableCell_peque: { 
    margin: "auto", 
    marginTop: "5px", 
    fontSize: 8 
  },
  tableCell_peque_all: { 
    
    marginTop: "5px",  
    fontSize: 8 
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
  tableCol3_sb: { 
    width: "100%", 
    borderStyle: "solid", 
    borderWidth: 0, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  },
  tableCol4: { 
    width: "33%", 
    borderStyle: "solid", 
    borderWidth: 0, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  },

  tableCol401: { 
    width: "33%", 
    borderStyle: "solid", 
    borderWidth: 0, 
    borderLeftWidth: 0, 
    borderTopWidth: 0,
    borderBottomWidth:1
  },
  tableCol6: { 
    width: "45%", 
    borderStyle: "solid", 
    borderWidth: 0, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  },
  tableCol601: { 
    width: "20%", 
    borderStyle: "solid", 
    borderWidth: 0, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  },
  tableCol602: { 
    width: "35%", 
    borderStyle: "solid",
    padding:"2%", 
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
  tableCol5_bordes: { 
    width: "12.5%", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 1, 
    borderTopWidth: 1,
    borderBottomWidth:1 
  },
  tableCol5_bordes1: { 
    width: "12.5%", 
    borderStyle: "solid", 
    borderWidth: 0, 
    borderLeftWidth: 0, 
    borderTopWidth: 0,
    borderBottomWidth:1 
  },
  tableCell3: { 
    textAlign:"left",
    margin: "auto", 
    marginTop: "5px", 
    fontSize: 10 
  },
  tableCell4: { 
     
    marginTop: "5px", 
    fontSize: 7 
  },
  tableCol7: { 
    width: "25%", 
    borderStyle: "solid", 
    borderWidth: 0, 
    borderLeftWidth: 0, 
    borderTopWidth: 0,
   
  },
  tableCol701: { 
    width: "12.5%", 
    borderStyle: "solid", 
    borderWidth: 0, 
    borderLeftWidth: 0, 
    borderTopWidth: 0,
   
  },

});



 



// Create Document Component

     function Factura () {

      
      
       
  const [valores, setvalores] = useState({})
  const [datoscargados, setdatoscargados] = useState(false)
  const [valores_tr, setvalores_tr] = useState({})
  const [datoscargados_tr, setdatoscargados_tr] = useState(false)
  const [valores_cmp, setvalores_cmp] = useState({})
  const [datoscargados_cmp, setdatoscargados_cmp] = useState(false)
  const [valores_rach, setvalores_rach] = useState({})
  const [datoscargados_rach, setdatoscargados_rach] = useState(false)
  const [valores_acm, setvalores_acm] = useState([])
  const [datoscargados_acm, setdatoscargados_acm] = useState(false)
  const [valores_almacen, setvalores_almacen] = useState([])
  const [datoscargados_almacen, setdatoscargados_almacen] = useState(false)
  const [vSumTotal, setVSumTotal] = useState(0);
  const [vSumTotal_peso, setVSumTotal_peso] = useState(0);
  const [vSuma_precio, setVSumTotal_precio] = useState(0);
  const[vSumdatos,setVSumdatos]= useState(false)
  let numeroALetras = (function() {

    // Código basado en https://gist.github.com/alfchee/e563340276f89b22042a
        function Unidades(num){
    
            switch(num)
            {
                case 1: return 'UN';
                case 2: return 'DOS';
                case 3: return 'TRES';
                case 4: return 'CUATRO';
                case 5: return 'CINCO';
                case 6: return 'SEIS';
                case 7: return 'SIETE';
                case 8: return 'OCHO';
                case 9: return 'NUEVE';
            }
    
            return '';
        }//Unidades()
    
        function Decenas(num){
    
            let decena = Math.floor(num/10);
            let unidad = num - (decena * 10);
    
            switch(decena)
            {
                case 1:
                    switch(unidad)
                    {
                        case 0: return 'DIEZ';
                        case 1: return 'ONCE';
                        case 2: return 'DOCE';
                        case 3: return 'TRECE';
                        case 4: return 'CATORCE';
                        case 5: return 'QUINCE';
                        default: return 'DIECI' + Unidades(unidad);
                    }
                case 2:
                    switch(unidad)
                    {
                        case 0: return 'VEINTE';
                        default: return 'VEINTI' + Unidades(unidad);
                    }
                case 3: return DecenasY('TREINTA', unidad);
                case 4: return DecenasY('CUARENTA', unidad);
                case 5: return DecenasY('CINCUENTA', unidad);
                case 6: return DecenasY('SESENTA', unidad);
                case 7: return DecenasY('SETENTA', unidad);
                case 8: return DecenasY('OCHENTA', unidad);
                case 9: return DecenasY('NOVENTA', unidad);
                case 0: return Unidades(unidad);
               
            }
        }//Unidades()
    
        function DecenasY(strSin, numUnidades) {
            if (numUnidades > 0)
                return strSin + ' Y ' + Unidades(numUnidades)
    
            return strSin;
        }//DecenasY()
    
        function Centenas(num) {
            let centenas = Math.floor(num / 100);
            let decenas = num - (centenas * 100);
    
            switch(centenas)
            {
                case 1:
                    if (decenas > 0)
                        return 'CIENTO ' + Decenas(decenas);
                    return 'CIEN';
                case 2: return 'DOSCIENTOS ' + Decenas(decenas);
                case 3: return 'TRESCIENTOS ' + Decenas(decenas);
                case 4: return 'CUATROCIENTOS ' + Decenas(decenas);
                case 5: return 'QUINIENTOS ' + Decenas(decenas);
                case 6: return 'SEISCIENTOS ' + Decenas(decenas);
                case 7: return 'SETECIENTOS ' + Decenas(decenas);
                case 8: return 'OCHOCIENTOS ' + Decenas(decenas);
                case 9: return 'NOVECIENTOS ' + Decenas(decenas);
            }
    
            return Decenas(decenas);
        }//Centenas()
    
        function Seccion(num, divisor, strSingular, strPlural) {
            let cientos = Math.floor(num / divisor)
            let resto = num - (cientos * divisor)
    
            let letras = '';
    
            if (cientos > 0)
                if (cientos > 1)
                    letras = Centenas(cientos) + ' ' + strPlural;
                else
                    letras = strSingular;
    
            if (resto > 0)
                letras += '';
    
            return letras;
        }//Seccion()
    
        function Miles(num) {
            let divisor = 1000;
            let cientos = Math.floor(num / divisor)
            let resto = num - (cientos * divisor)
    
            let strMiles = Seccion(num, divisor, ' MIL', 'MIL');
            let strCentenas = Centenas(resto);
    
            if(strMiles == '')
                return strCentenas;
    
            return strMiles + ' ' + strCentenas;
        }//Miles()
    
        function Millones(num) {
            let divisor = 1000000;
            let cientos = Math.floor(num / divisor)
            let resto = num - (cientos * divisor)
    
            let strMillones = Seccion(num, divisor, 'UN MILLON ', 'MILLONES ');
            let strMiles = Miles(resto);
    
            if(strMillones == '')
                return strMiles;
    
            return strMillones + ' ' + strMiles;
        }//Millones()
    
        return function NumeroALetras(num, currency) {
            currency = currency || {};
            let data = {
                numero: num,
                enteros: Math.floor(num),
                centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
                letrasCentavos: '',
                letrasMonedaPlural: currency.plural || 'USD',//'PESOS', 'Dólares', 'Bolívares', 'etcs'
                letrasMonedaSingular: currency.singular || 'USD', //'PESO', 'Dólar', 'Bolivar', 'etc'
                letrasMonedaCentavoPlural: currency.centPlural || 'USD',
                letrasMonedaCentavoSingular: currency.centSingular || 'USD'
            };
    
            if (data.centavos > 0) {
                data.letrasCentavos = 'CON ' + (function () {
                        if (data.centavos == 1)
                            return Millones(data.centavos) + ' ' + data.letrasMonedaCentavoSingular;
                        else
                            return Millones(data.centavos) + ' ' + data.letrasMonedaCentavoPlural;
                    })();
            };
    
            if(data.enteros == 0)
                return 'CERO ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
            if (data.enteros == 1)
                return Millones(data.enteros) + ' ' + data.letrasMonedaSingular + ' ' + data.letrasCentavos;
            else
                return Millones(data.enteros) + ' ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
        };
    
    })();
    

  useEffect(() => {

    async function handlesumar () {
      llamar_acomodo();
      llamar_almacen();
      if(datoscargados_acm===true && datoscargados_almacen===true){
      const sumar = valores_acm.rows.map((saldo) => parseFloat(saldo.cantidad))
      
  
        .reduce((previous, current) => {
  
          return previous + current;
  
        }, 0);

        const suma_peso=valores_acm.rows.map((saldo)=> parseFloat(saldo.peso))
        .reduce((previous, current) => {
  
          return previous + current;
  
        }, 0);

        const suma_precio=valores_acm.rows.map((saldo)=> parseFloat(saldo.cantidad)*(valores_almacen.precio))
        .reduce((previous, current) => {
  
          return previous + current;
  
        }, 0);
  
      setVSumTotal(sumar);
      setVSumTotal_peso(suma_peso)
      setVSumTotal_precio(suma_precio)
      setVSumdatos(true);
  
  
  
    };
  
  
  
    
  }
  
  handlesumar();
  
  });

  
  


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




async function llamar_almacen (){
  
  
  let raw = {
    "id_lote":"3"
  }
   const resultOk_almacen = await apicliente.apifetch("admin/almacencartones2/show/16","POST",JSON.stringify({}),true);
   const resultados_almacen=(JSON.parse(resultOk_almacen))
  
   setvalores_almacen (resultados_almacen)
   setdatoscargados_almacen (true)
  
  
  //if(datoscargados===true){
   //console.log(valores.resultados.idchofer)
   
  
  
  //}else{
   // console.log("espera perrin")
  //}
  
    return(resultados_almacen);
    
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

async function llamar_acomodo(){
  let raw={
    "ubicacion":"Rainfield Ranches L.P."
  }
  
  const resultOk_acm = await apicliente.apifetch("admin/acomodo/listar/","POST",JSON.stringify({}),true);
       let resultados_acm= JSON.parse(resultOk_acm);
       console.log("rult fetch"+resultOk_acm)
       
	   
	   if(resultados_acm===1|| resultados_acm.error===true){
        alert("Error del servidor contacta al provedor de servicio")
       }
       //else{
       

       
        


			//console.log(resultados_acm[i]);
			//return(resultados_acm[i] )
       

     
		 // }
     setvalores_acm (resultados_acm)
      
        setdatoscargados_acm (true)
		 
       
			
		   
			
     
		 
        

       
        

    }









llamar();
llamar_transportes();
llamar_cmp();
llamar_ranchos();
llamar_acomodo();
llamar_almacen();





if(datoscargados===true && datoscargados_rach===true && datoscargados_tr===true && datoscargados_cmp===true && datoscargados_acm===true && vSumdatos===true && datoscargados_almacen===true){      
  return (  
    
    
    <PDFViewer style={styles.viewer}>
      
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>

        <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol601}> 
          <Image style={{width:"50px", height:"50px"}} src={GreenFarmL} />
          </View> 
          <View style={styles.tableCol6}> 
          <Text style={{fontSize:"10px",  marginTop:"2%"}}>Innovaciones agricolas Green Farm de S. de R.L. de C.V.  </Text>  
        <Text style={{ fontSize:"7px"}}>Lote #34, colonia Madero  </Text>
        <Text style={{fontSize:"7px"}}>C.P. 21723  </Text>
        <Text style={{fontSize:"7px"}}>R.F.C. IAG160808RE5  </Text>
        <Text style={{fontSize:"7px"}}>TEL. 686-109-7021  </Text>
        <Text style={{ fontSize:"7px"}}>FDA 15228078990  </Text>
      
          </View> 
      
          
          <View style={styles.tableCol602}> 
        <Text style={{ fontSize:"7px"}}>Carretera De Colonia Madero a   </Text>
        <Text style={{ fontSize:"7px"}}> Col Agricola Benito Juarez Valle de Mexicali </Text>
        <Text style={{fontSize:"7px"}}> Facrtura :  </Text>
          </View>
          
        </View>
        </View>

        <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol4}> 
          <Text style={{fontSize:"7px",marginTop:"2%"}}> </Text>
          </View> 
          <View style={styles.tableCol4}> 
          <Text style={{fontSize:"7px", marginTop:"2%",marginRight:"auto",marginLeft:"auto"}}>  Fecha/Date:  </Text>
          </View> 
      
          
          <View style={styles.tableCol4}> 
          <Text style={{fontSize:"7px",marginTop:"2%",marginRight:"auto",marginLeft:"auto"}}> Hora/Hour :  </Text>
          </View>
          
        </View>
        </View>






        <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol401}> 
          <Text style={{fontSize:"7px",marginTop:"2%"}}>Manufacturer and Exporter </Text>
          </View> 
          <View style={styles.tableCol401}> 
          <Text style={{fontSize:"7px", marginTop:"2%"}}>Remision  {valores.resultados.fecha_salida}  </Text>
          </View> 
      
          
          <View style={styles.tableCol401}> 
          <Text style={{fontSize:"7px",marginTop:"2%"}}> {valores.resultados.fecha_salida}  </Text>
          </View>
          
        </View>
        </View>


          <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol01_sb}> 
            <Text style={styles.tableCell4}>Facturar a / Consigne </Text> 
            <Text style={styles.tableCell4}>{valores.resultados.almacen_destino} </Text> 
          </View> 
          <View style={styles.tableCol01_sb}> 
            <Text style={styles.tableCell4}>telefono/Phone </Text> 
            <Text style={styles.tableCell4}>Estado/State </Text> 
            <Text style={styles.tableCell4}>C.P./Zip Code </Text> 
            <Text style={styles.tableCell4}>Tax Id </Text> 
          </View> 
          <View style={styles.tableCol01_sb}> 
            <Text style={styles.tableCell4}>{valores_rach.resultados_rach.telefono} </Text> 
            <Text style={styles.tableCell4}>{valores_rach.resultados_rach.domicilio} </Text> 
            <Text style={styles.tableCell4}>{valores_rach.resultados_rach.domicilio} </Text> 
            <Text style={styles.tableCell4}>{valores_rach.resultados_rach.taxid} </Text> 
          </View> 
          <View style={styles.tableCol01_sb}> 
            <Text style={styles.tableCell4}>SCAC:{valores_cmp.resultados_cmp.scac} </Text> 
            <Text style={styles.tableCell4}>CAAT:{valores_cmp.resultados_cmp.caat} </Text> 
          </View> 
           
        </View>

        <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol01_sb}> 
            <Text style={styles.tableCell4}>{} </Text> 
            <Text style={styles.tableCell4}></Text> 
          </View> 
          <View style={styles.tableCol01_sb}> 
            <Text style={styles.tableCell4}> </Text> 
            <Text style={styles.tableCell4}> </Text> 
            <Text style={styles.tableCell4}> </Text> 
            <Text style={styles.tableCell4}> </Text> 
          </View> 
          <View style={styles.tableCol01_sb}> 
            <Text style={styles.tableCell4}> </Text> 
            <Text style={styles.tableCell4}> </Text> 
            <Text style={styles.tableCell4}> </Text> 
            <Text style={styles.tableCell4}> </Text> 
          </View> 
          <View style={styles.tableCol01}> 
            <Text style={styles.tableCell4}>Order Number:  </Text> 
            
          </View> 
           
        </View>
        </View>
       

        <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol01}> 
            <Text style={styles.tableCell4}>Almacen/Warehouse: </Text> 
            <Text style={styles.tableCell4}>{valores.resultados.almacen_destino}</Text> 
          </View> 
          <View style={styles.tableCol01}> 
            <Text style={styles.tableCell4}>Agencia aduanal/C.Broker: </Text> 
            <Text style={styles.tableCell4}>{valores.resultados.agencia_aduanal} </Text> 
            
          </View> 
          <View style={styles.tableCol01}> 
            <Text style={styles.tableCell4}>Transportista/Transport Comp </Text> 
            <Text style={styles.tableCell4}>{valores_cmp.resultados_cmp.nombre} </Text> 
             
          </View> 
          <View style={styles.tableCol01}> 
            <Text style={styles.tableCell4}>Chofer/Driver: </Text> 
            <Text style={styles.tableCell4}>{valores_tr.resultados_trs.nombre} </Text> 
          </View> 
           
        </View>
        </View>

        <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol01}> 
            <Text style={styles.tableCell4}>truck plates: </Text> 
            <Text style={styles.tableCell4}></Text> 
          </View> 
          <View style={styles.tableCol01}> 
            <Text style={styles.tableCell4}>Container Plates: </Text> 
            <Text style={styles.tableCell4}> </Text> 
            
          </View> 
          <View style={styles.tableCol01}> 
            <Text style={styles.tableCell4}>Name </Text> 
            <Text style={styles.tableCell4}>{valores_cmp.resultados_cmp.propietario} </Text> 
             
          </View> 
          <View style={styles.tableCol01}> 
            <Text style={styles.tableCell4}>Observaciones/Remarks: </Text> 
            <Text style={styles.tableCell4}>{valores_cmp.resultados_cmp.propietario} </Text> 
          </View> 
           
        </View>
        </View>
        
       

          <Text>{"\n"}</Text> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol5_bordes}> 
            <Text style={styles.tableCell_peque}>Code </Text> 
          </View> 
          <View style={styles.tableCol5_bordes}> 
            <Text style={styles.tableCell_peque}>Lote code  </Text> 
          </View> 
          <View style={styles.tableCol5_bordes}> 
            <Text style={styles.tableCell_peque} >Description Product   </Text> 
          </View> 
          <View style={styles.tableCol5_bordes}> 
            <Text style={styles.tableCell_peque}>Frac. arancelaria </Text> 
          </View> 
          <View style={styles.tableCol5_bordes}> 
            <Text style={styles.tableCell_peque}>Unidad/units </Text> 
          </View> 
          <View style={styles.tableCol5_bordes}> 
            <Text style={styles.tableCell_peque}>Kilos </Text> 
          </View> 
          <View style={styles.tableCol5_bordes}> 
            <Text style={styles.tableCell_peque}>Precio/Unit cost </Text> 
          </View> 
          <View style={styles.tableCol5_bordes}> 
            <Text style={styles.tableCell_peque}>Total </Text> 
          </View> 
          
          </View>
         
          {valores_acm.rows.map((resultado,index)=>(
      


          <View style={styles.tableRow} key={index}> 
          <View style={styles.tableCol5_bordes1}> 
          <Text style={styles.tableCell_peque}>{resultado.id} </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
          <Text style={styles.tableCell_peque}>{resultado.lote}  </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
          <Text style={styles.tableCell_peque} >{resultado.idcarton}  </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
          <Text style={styles.tableCell_peque}>{resultado.fracc_arancelaria} </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
          <Text style={styles.tableCell_peque}>{resultado.cantidad} </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
          <Text style={styles.tableCell_peque}>{resultado.peso} </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
          <Text style={styles.tableCell_peque}>{valores_almacen.precio} </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
          <Text style={styles.tableCell_peque}>{(resultado.cantidad)* (valores_almacen.precio)} </Text> 
          </View> 

          </View>
          ))}

  




          <View style={styles.tableRow}> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque}> </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque}>  </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque} >   </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque}>{} </Text> 
          </View> 
          <View style={styles.tableCol5_bordes}> 
            <Text style={styles.tableCell_peque}>{vSumTotal} </Text> 
          </View> 
          <View style={styles.tableCol5_bordes}> 
            <Text style={styles.tableCell_peque}>{vSumTotal_peso} </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque}> </Text> 
          </View> 
          <View style={styles.tableCol5_bordes}> 
            <Text style={styles.tableCell_peque}>{vSuma_precio}</Text> 
          </View> 
      
          
          </View>

          {valores_acm.rows.map((resultado,index)=>(
          <View style={styles.tableRow} key={index}> 
          <View style={styles.tableCol7}> 
            <Text style={styles.tableCell_peque}>{resultado.idcarton}</Text> 
          </View> 
          <View style={styles.tableCol7}> 
            <Text style={styles.tableCell_peque}>{resultado.ubicacion}  </Text> 
          </View> 
          <View style={styles.tableCol7}> 
            <Text style={styles.tableCell_peque} > Carton  </Text> 
          </View> 
          <View style={styles.tableCol701}> 
            <Text style={styles.tableCell_peque}>{resultado.cantidad}</Text> 
          </View> 
          <View style={styles.tableCol701}> 
            <Text style={styles.tableCell_peque}>7 </Text> 
          </View> 
          </View>
          ))}

          <View style={styles.tableRow}> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque}> </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque}>  </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque} >   </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque}> </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque}> </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque}> </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque}> </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque}></Text> 
          </View> 
          </View>

          <View style={styles.tableRow}> 
          <View style={styles.tableCol3_sb}> 
            <Text style={styles.tableCell_peque_all}>Califica para Nafta </Text> 
          </View>
          </View> 
          <View style={styles.tableRow}> 
          <View style={styles.tableCol3_sb}> 
            <Text style={styles.tableCell_peque_all}>Remarks: </Text> 
          </View>
          </View>  
          <View style={styles.tableRow}> 
          <View style={styles.tableCol3_sb}> 
            <Text style={styles.tableCell_peque_all}> </Text> 
          </View>
          </View>  

          
          <View style={styles.tableRow}> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque}> </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque}>  </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque} >   </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque}> </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque}> </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque}> </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque}> </Text> 
          </View> 
          <View style={styles.tableCol5_bordes1}> 
            <Text style={styles.tableCell_peque}></Text> 
          </View> 
          </View>

          <View style={styles.tableRow}> 
          <View style={styles.tableCol4_bordes}> 
            <Text style={styles.tableCell_peque}>Primary seal: </Text> 
          </View> 
          <View style={styles.tableCol4_bordes}> 
            <Text style={styles.tableCell_peque} > Secondary Seal:  </Text> 
          </View> 
          <View style={styles.tableCol4_bordes}> 
            <Text style={styles.tableCell_peque}>Third Seal or More: </Text> 
          </View> 
         
          </View>

          <View style={styles.tableRow}> 
          <View style={styles.tableCol4_bordes}> 
            <Text style={styles.tableCell_peque}>Signature Agent Removing Seal:</Text> 
          </View> 
          <View style={styles.tableCol4_bordes}> 
            <Text style={styles.tableCell_peque} >Signature Agent Removing Seal:</Text> 
          </View> 
          <View style={styles.tableCol4_bordes}> 
            <Text style={styles.tableCell_peque}>Signature Agent Removing Seal: </Text> 
          </View> 
         
          </View>
          <View style={styles.tableRow}> 
          <View style={styles.tableCol4_bordes}> 
            <Text style={styles.tableCell_peque}>Agency Represented:</Text> 
          </View> 
          <View style={styles.tableCol4_bordes}> 
            <Text style={styles.tableCell_peque} >Agency Represented:</Text> 
          </View> 
          <View style={styles.tableCol4_bordes}> 
            <Text style={styles.tableCell_peque}>Agency Represented: </Text> 
          </View> 
         
          </View>
          
         
          <View style={styles.tableRow}> 
          <View style={styles.tableCol4_bordes}> 
            <Text style={styles.tableCell_peque}>Agency Represented:</Text> 
          </View> 
          <View style={styles.tableCol4_bordes}> 
            <Text style={styles.tableCell_peque} >Agency Represented:</Text> 
          </View> 
          <View style={styles.tableCol4_bordes}> 
            <Text style={styles.tableCell_peque}>Agency Represented: </Text> 
          </View> 
         
          </View>

         
          <View style={styles.tableRow}> 
          <View style={styles.tableCol01}> 
            <Text style={styles.tableCell_peque}>Total Mount:</Text> 
            <Text style={styles.tableCell_peque}>{numeroALetras(vSuma_precio)} </Text> 
          </View> 
          <View style={styles.tableCol01}> 
            <Text style={styles.tableCell_peque} >Libras :</Text> 
            <Text style={styles.tableCell_peque}>{(vSumTotal_peso)/ (0.45359237)}</Text> 
          </View> 
          <View style={styles.tableCol01}> 
            <Text style={styles.tableCell_peque}>Kilos : </Text>
            <Text style={styles.tableCell_peque}>{vSumTotal_peso}</Text>  
          </View> 
          <View style={styles.tableCol01}> 
            <Text style={styles.tableCell_peque}>Total : </Text> 
            <Text style={styles.tableCell_peque}>{vSuma_precio}</Text> 
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
 
export default Factura;
     