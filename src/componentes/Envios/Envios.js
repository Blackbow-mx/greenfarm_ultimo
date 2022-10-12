import React, { useEffect,useState } from 'react';
import{Link} from "react-router-dom";
import apicliente from "../../servicios/apicliente";

import { MDBDataTableV5 } from 'mdbreact';
import { Button } from 'reactstrap';



let apiEliminarRegistros = "admin/envios/delete/";
let localListarRegistros = "/envios/listar";
let apiConsultaRegistro  = "admin/envios/listar/";
let apiConfig            = "admin/envios/init/"
let localEditarRegistros = "/envios/editar/";
let localInicio          = "/";
let localRegistrar       = "/envios/alta";
let localArchivo         = "/documentos/generar/";
let localEditarAcomodo = "/acomodo/ ";
let localListarInsumos ="/reporteinsumos/listar/"




class Envios  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            columns:[],
            registros:[],
			
idchoferOptions:[],
idchoferCargado:false,
iddistribuidorOptions:[],
iddistribuidorCargado:false,
idchoferOptions:[],
idchoferCargado:false,
iddistribuidorOptions:[],
iddistribuidorCargado:false,
            form:{
				
idchofer:"",
iddistribuidor:"",
fecha_salida:"",
manifiesto:"",
no_viaje:"",
observaciones:"",
temperatura:"",
               
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

  


getOptions_idchofer = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({idchoferCargado:true, idchoferOptions: JSON.parse(res)});
					   // console.log(this................state);
					}
getOptions_iddistribuidor = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({iddistribuidorCargado:true, iddistribuidorOptions: JSON.parse(res)});
					   // console.log(this................state);
					}
getOptions_idchofer = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({idchoferCargado:true, idchoferOptions: JSON.parse(res)});
					   // console.log(this................state);
					}
getOptions_iddistribuidor = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({iddistribuidorCargado:true, iddistribuidorOptions: JSON.parse(res)});
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

abrirDocumento =  (e) => {
 // window.open("http://localhost:3000/documento/avisoimportacion/?id="+e.target.id)
  window.open("http://localhost:3000/documento/factura/?id="+e.target.id)  

}



    cargarDatos = async ()=>{
		const{precio_carton_ajuste,idchofer,no_termografo,iddistribuidor,fecha_salida,manifiesto,no_viaje,observaciones,temperatura,no_economico_caja,placas_caja,tamanio_caja} = this.state.form;
      //  const{paterno,materno} = this.state.form;

        

       const resultOk = await apicliente.apifetch(apiConsultaRegistro,"POST",JSON.stringify( {
             
		
        idchofer : idchofer,
        iddistribuidor : iddistribuidor,
        fecha_salida : fecha_salida,
        manifiesto : manifiesto,
        no_viaje : no_viaje,
        observaciones : observaciones,
        temperatura : temperatura,
        no_termografo:no_termografo,
        no_economico_caja:no_economico_caja,
        placas_caja:placas_caja,
        tamanio_caja:tamanio_caja,
        precio_carton_ajuste:precio_carton_ajuste,
                  
                }),true);
       let resultados= JSON.parse(resultOk);
       console.log(resultOk);
	   
	   if(resultados===1|| resultados.error===true){
        alert("Error del servidor contacta al provedor de servicio")
       }
       else{

       
		   for (var i = 0; i < resultados.rows.length; i++) {

			//console.log(resultados[i]);
			resultados.rows[i].botones2 =<> <Link  style={{color:"white"}} type="button" className="btn" to= {localEditarRegistros+resultados.rows[i].id}> Editar </Link>
            <Link  style={{color:"white"}} type="button" className="btn" to= {localEditarAcomodo+resultados.rows[i].id}> Acomodo </Link>
            <Link style={{color:"white"}} type="button" className="btn" to={localArchivo + resultados.rows[i].id} > Archivos </Link>
			
            <button  style={{color:"white"}} id={resultados.rows[i].id} type="button" className="btn "
			onClick={(event)=>this.borrarRegistros(event)
			}
			> Borrar </button></>
		   }
		  
		  

		   
			this.setState({datosCargados:true,registros:resultados});
		} 
      // console.log(resultOk);
        

    }
 
    componentDidMount(){
    
	 
	    
 this.getOptions_idchofer("admin/chofers/search/");
 this.getOptions_iddistribuidor("admin/ranchs/search/");

        this.cargarDatos();

    }
    
    render() { 
        const{datosCargados,form}= this.state
        
        if(!datosCargados   || !this.state.idchoferCargado || !this.state.iddistribuidorCargado || !this.state.idchoferCargado || !this.state.iddistribuidorCargado){
            return (<div>Cargando...</div>)
        
        }else{
 
          //  console.log(this.state.registros.resultados.registros);
        return (

            
<>
          <div>
		  <h3>
                  Envios
              </h3>
			<div className="pd-ltr-20 xs-pd-20-10">
			<div className="min-height-200px">
			
				    
                <div className="page-header">
					<div className="row_listar_buscar_agregar">


   
	  <div className="row row-cols-4 d-lg-flex align-items-lg-center" style={{marginleft: "0px",marginRight: "0px",width: "100%",minHeight: "100px",maxHeight: "700px"}}>

		
     <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingBottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Chofer</h6>
                                        <select className="form-control" placeholder="Chofer" name="idchofer" onChange={this.cambioValor} value={form.idchofer} >
										<option value="-1">Seleccione</option>
                                        {this.state.idchoferOptions.resultados.registros.map(
                                (row)=>(
                                  <option value={row.id}>{row.nombre}</option>

                                ))}    
                                       
                                        </select>
                                     </div>
     <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingBottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Cliente</h6>
                                        <select className="form-control" placeholder="Distribuidor" name="iddistribuidor" onChange={this.cambioValor} value={form.iddistribuidor} >
										<option value="-1">Seleccione</option>
                                        {this.state.iddistribuidorOptions.resultados.registros.map(
                                (row)=>(
                                  <option value={row.id}>{row.nombre}</option>

                                ))}    
                                       
                                        </select>
                                     </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingBottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Fecha Salida</h6><input style={{borderradius: "2px",border: "1px solid rgb(217,217,217)",marginTop: "2%",width: "100%"}}  className="form-control form-control-sm" type="datetime-local"
               name="fecha_salida" onChange={this.cambioValor} value={this.state.form.fecha_salida}  />
        </div>
 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingBottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Manifiesto</h6><input  style={{borderradius: "2px",border: "1px solid rgb(217,217,217)",marginTop: "2%",width: "100%"}}  className="form-control form-control-sm" type="text"   name="manifiesto" onChange={this.cambioValor} value={this.state.form.manifiesto}  />
        </div>
 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingBottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>No. de Viaje</h6><input  style={{borderradius: "2px",border: "1px solid rgb(217,217,217)",marginTop: "2%",width: "100%"}}  className="form-control form-control-sm" type="text"   name="no_viaje" onChange={this.cambioValor} value={this.state.form.no_viaje}  />
        </div>
 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingBottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Observaciones</h6><input  style={{borderradius: "2px",border: "1px solid rgb(217,217,217)",marginTop: "2%",width: "100%"}}  className="form-control form-control-sm" type="text"   name="observaciones" onChange={this.cambioValor} value={this.state.form.observaciones}  />
        </div>
 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingBottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Temperatura</h6><input  style={{borderradius: "2px",border: "1px solid rgb(217,217,217)",marginTop: "2%",width: "100%"}}  className="form-control form-control-sm" type="text"   name="temperatura" onChange={this.cambioValor} value={this.state.form.temperatura}  />
        </div>       
	   

		 <div className='row-botones'>
			<div>
			<button className=" btn btn-primary " type='button' onClick={this.cargarDatos} style={{width: "100px",marginRight: "5px",marginLeft:"5px",height: "40px"}} >
			Buscar 
			</button>
			</div>
            <div>
			
			</div>
			
			
				<div>
					<Link type="button" className=" btn btn-primary" to= {localEditarRegistros+'-1'}
                                 
                                 style={{width: "100px",marginRight: "5px",marginLeft:"5px",height: "40px"}} > Agregar </Link> 
				</div>
    
	  
	    </div>



	  </div>


				
						
					</div>
				</div>  
				
					</div>
				


			 <div style={{marginRigth:"auto",marginLeft:"auto", width: "95%",paddingTop: "2%", paddingLeft:"2%",paddingRight: "2%",paddingLeft:"2%"}} className="pd-20 bg-white border-radius-4 box-shadow mb-30">
	
                    

                <MDBDataTableV5 responsive  small hover entriesOptions={[5, 20, 25]}  paging={{display:"flex"}} entries={5} pagesAmount={4} data={this.state.registros} searchTop searchBottom={false}/>


				</div>
				
				
				
				</div>
				</div>             
                      

             
         </>       
               );
 
                        }
                }   }
                           

export default Envios;