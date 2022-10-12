import React, { useEffect,useState } from 'react';
import{Link} from "react-router-dom";
import apicliente from "../../servicios/apicliente";

import { MDBDataTableV5 } from 'mdbreact';
import Envios from '../Envios/Envios';
import { DateRangePicker } from 'rsuite';




let apiEliminarRegistros = "admin/acomodo/delete/";
let localListarRegistros = "/acomodo/listar";
let apiConsultaRegistro  = "admin/acomodo/listar/";
let apiConfig            = "admin/acomodo/init/"
let localEditarRegistros = "/acomodo/editar/";
let localInicio          = "/";
let localRegistrar       = "/acomodo/alta";
let apiConsultaReporte   = "admin/exceles/generapinsumos/";




class Insumosreporte  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idRegistro:this.props.match.params.id,
            datosCargados: false,
            columns:[],
            registros:[],
			
idcartonOptions:[],
idcartonCargado:false,
idenvioOptions:[],
idenvioCargado:false,
idcartonOptions:[],
idcartonCargado:false,
idenvioOptions:[],
idenvioCargado:false,
            form:{
		fecha_filtro1:"",
    fecha_filtro2:"",		
idcarton:"",
clave:"",
idenvio:"",
lote:"",
ubicacion:"",
               
            }  
        }
        
       
    }


      cambioValor =  async (e)=> {
         await this.setState({
              form:{
                  ...this.state.form,
                  [e.target.name]: e.target.value
              }
          })
         
         
      }
    salir = async (e) =>{
        e.preventDefault();
        this.props.history.push(localInicio);
       await localStorage.setItem("token","");
       

    }

   



getOptions_idcarton = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);

						this.setState({idcartonCargado:true, idcartonOptions: JSON.parse(res)});
					   // console.log(this................state);
					}
getOptions_idenvio = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({idenvioCargado:true, idenvioOptions: JSON.parse(res)});
					   // console.log(this................state);
					}


   borrarRegistros = async (e) => {



    //console.log(JSON.stringify(e.target));
   // console.log("boton: " + e.target.id);

  
      const resultOk = await apicliente.apifetch(apiEliminarRegistros +e.target.id,"POST",{},true);
	  
	   let variable = JSON.parse(resultOk);
        if(variable.error===true || variable===1){
            alert("error al borrar Registro");
        }
     // window.location.reload(false);
      this.cargarDatos();

}






    cargarDatos = async ()=>{
		const{insumo,cantidad,tipo,fecha_filtro1, fecha_filtro2} = this.state.form;
      //  const{paterno,materno} = this.state.form;
        
    console.log("fecha1="+fecha_filtro1+"json="+JSON.stringify({
      "fecha_filtro1":fecha_filtro1,
      "fecha_filtro2":fecha_filtro2
  }));

      const resultOk = await apicliente.apifetch("admin/exceles/generapinsumos/"+this.props.match.params.id,"POST",JSON.stringify({
        "fecha_filtro1":fecha_filtro1,
        "fecha_filtro2":fecha_filtro2
    }),false);
       let resultados= JSON.parse(resultOk);
	 
   
	   if(resultados===1|| resultados.error===true){
        alert("Error del servidor contacta al provedor de servicio");
       }
       else{

      
       
        
			this.setState({datosCargados:true,registros:resultados});
		} 
        console.log(JSON.parse(resultOk));

      // console.log(resultOk);
        

    }
 
    componentDidMount(){
    
	 
	    
 this.getOptions_idcarton("admin/cartones/search");
 this.getOptions_idenvio("admin/envios/search");
// this.getOptions_idcarton("admin/carton/search");
// this.getOptions_idenvio("admin/envio/search");
        this.cargarDatos();
       
       
    }
    
    render() { 
        const{datosCargados,form,registros}= this.state
        
        if(!datosCargados   || !this.state.idcartonCargado || !this.state.idenvioCargado || !this.state.idcartonCargado || !this.state.idenvioCargado){
            return (<div>Cargando...</div>)
        
        }else{
           
 
          //  console.log(this.state.registros.resultados.registros);
        return (

            
<>
          <div>
		  <h3>
                  Reporte de insumos
              </h3>
			<div className="pd-ltr-20 xs-pd-20-10">
			<div className="min-height-200px">
			
				    
                <div className="page-header">
					<div className="row_listar_buscar_agregar">
                        

	  <div className="row row-cols-4 d-lg-flex align-items-lg-center" style={{marginleft: "0px",marginRight: "0px",width: "100%",minHeight: "100px",maxHeight: "700px"}}>

     
 
                                   
                         
       
		 <div className='row-botones'>
			<div>
			<Link className=" btn btn-primary " type='button' to={localInicio}  style={{width: "100px",marginRight: "5px",marginLeft:"5px",height: "40px"}} >
			Atras 
			</Link>
			</div>
			
			
			
    
	  
	    </div>



	  </div>


				
						
					</div>
				</div>  
				
					</div>
				


			 <div style={{marginRigth:"auto",marginLeft:"auto", width: "95%",paddingTop: "2%", paddingLeft:"2%",paddingRight: "2%",paddingLeft:"2%"}} className="pd-20 bg-white border-radius-4 box-shadow mb-30">
	
                    
            
             {this.state.registros.map(
                                (row)=>(
                                <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.tipo}</td>
                                <td>{row.insumo}</td>
                                <td>{row.cantidad}</td>
                                
                                <td>
                                    
                                </td>
                            </tr>
                        
            
            
            
                                )
                            )
                            
                            
                            }
				</div>
				
				
				
				</div>
				</div>             
                      

             
         </>       
               );
 
                        }
                }   }
                           

export default Insumosreporte;