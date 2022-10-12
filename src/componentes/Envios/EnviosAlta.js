import React from 'react';
import {Link } from 
"react-router-dom";
import apicliente from "../../servicios/apicliente";

let localListarRegistros  = "/envios/listar";
let apiEditarRegistro     = "admin/envios/update/";
let apiShowRegistro       = "admin/envios/show/";
let apiCrearRgistro       = "admin/envios/crear"
let localEditarRegistros  = "/envios/editar/";
let localInicio           = "/";
let localRegistrar        = "/envios/alta";


class EnviosAlta extends React.Component {
    
    constructor(props) {
        super(props);
        
        
        this.state = {
            idRegistro:this.props.match.params.id,
            leyendaTitulo: "", 
            datosCargados: false,

            registro:[],
			
idchoferOptions:[],
idchoferCargado:false,
iddistribuidorOptions:[],
iddistribuidorCargado:false,
           
                
         }
        
         
        
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
                       // se hizo un cambio a ranchos por que se realixo un cambio de ranchos a disttribuidores 
					}

    getOptions = async (url,referencia) =>{
     
       
        const res = await apicliente.apifetch(url,"POST","{}",true);
       // console.log(res);
         this.setState({idColorCargado:true, idColorOptions: JSON.parse(res)});
       // console.log(this................state);
    }

    cambioValor = (e)=> {
        const state=this.state.registro;
        state[e.target.name]=e.target.value;
        this.setState({registro:state});
        console.log(this.state.registro);

    }

    EnviarDatos= async (e) =>{
       

      

        e.preventDefault();
        const{no_orden,precio_carton_ajuste,numero_transporte,placas_transporte,idchofer,no_termografo,iddistribuidor,fecha_salida,manifiesto,no_viaje,observaciones,temperatura,sello_primario,sello_secundario,almacen_destino,agencia_aduanal,no_economico_caja,placas_caja,tamanio_caja}= this.state.registro;

        

       if(this.state.idRegistro > 0)
       {
        const resultOk = await apicliente.apifetch(apiEditarRegistro+this.props.match.params.id,"POST",JSON.stringify( {
                  
                
            idchofer : idchofer,
            iddistribuidor : iddistribuidor,
            fecha_salida : fecha_salida,
            manifiesto : manifiesto,
            no_viaje : no_viaje,
            no_termografo:no_termografo,
            observaciones : observaciones,
            temperatura : temperatura,
            numero_transporte:numero_transporte,
            placas_transporte:placas_transporte,
            no_economico_caja:no_economico_caja,
            placas_caja:placas_caja,
            tamanio_caja:tamanio_caja,
            sello_primario:sello_primario,
            sello_secundario:sello_secundario,
            almacen_destino:almacen_destino,
            agencia_aduanal:agencia_aduanal,
            precio_carton_ajuste:precio_carton_ajuste,
            no_orden:no_orden,
                      

         }),true);
		  
		        
    }else{
        const resultOk = await apicliente.apifetch(apiCrearRgistro,"POST",JSON.stringify( {
                  
                
            idchofer : idchofer,
            iddistribuidor : iddistribuidor,
            fecha_salida : fecha_salida,
            manifiesto : manifiesto,
            no_viaje : no_viaje,
            no_termografo:no_termografo,
            observaciones : observaciones,
            temperatura : temperatura,
            numero_transporte:numero_transporte,
            placas_transporte:placas_transporte,
            no_economico_caja:no_economico_caja,
            placas_caja:placas_caja,
            tamanio_caja:tamanio_caja,
            sello_primario:sello_primario,
            sello_secundario:sello_secundario,
            almacen_destino:almacen_destino,
            agencia_aduanal:agencia_aduanal,
            precio_carton_ajuste:precio_carton_ajuste,
            no_orden:no_orden,
                      

         }),true);
		
        
    
	
	 let variable = JSON.parse(resultOk);
		 if(variable.error===true|| variable===1){
           alert("error al intentar guardar la información");
			}
        }
    //const navigateTo = () => this.history.push(localListarRegistros);//eg.history.push('/login');
//window.location = localListarRegistros;
this.props.history.push( localListarRegistros); 
    
    }

     async componentDidMount(){

      
  
	   
     this.getOptions_idchofer("admin/chofers/search");
     this.getOptions_iddistribuidor("admin/ranchs/search");// se hizo un cambio a ranchos por que se realixo un cambio de ranchos a disttribuidores 
	   
        if(this.state.idRegistro > 0)
        {
        const resultOk = await apicliente.apifetch(apiShowRegistro+this.props.match.params.id,"POST",{},true);
        
		if(resultOk===1){
            alert("error al cargar registro"); 
        }
		
        this.setState({leyendaTitulo:"Editando Envios", datosCargados:true,registro:JSON.parse(resultOk) })
        
        }
        else
        {
            this.setState({leyendaTitulo:"Agregando Envios", datosCargados:true})

        }
    }
 
    
    render() { 
        const{datosCargados, registro}= this.state
        
        if(!datosCargados  || !this.state.idchoferCargado || !this.state.iddistribuidorCargado)
		{
            return (<div>Cargando...</div>)
        
        }else{
        
       
        return ( 
         			<div className="pd-ltr-20 xs-pd-20-10">
			<div className="pd-20 bg-white border-radius-4 box-shadow mb-30">
			<h2>{this.state.leyendaTitulo}</h2>
                                
                                <div className="row register-form">
                                    <div style={{paddingLeft:"3%"}} className="col-md-12">
									     <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Chofer</h6>
                                        <select className="form-control" placeholder="Chofer" name="idchofer" onChange={this.cambioValor} value={registro.idchofer} >
										<option value="-1">Seleccione</option>
                                        {this.state.idchoferOptions.resultados.registros.map(
                                (row)=>(
                                  <option value={row.id}>{row.nombre}</option>

                                ))}    
                                       
                                        </select>
                                     </div>   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Cliente</h6>
                                        <select className="form-control" placeholder="Distribuidor" name="iddistribuidor" onChange={this.cambioValor} value={registro.iddistribuidor} >
										<option value="-1">Seleccione</option>
                                        {this.state.iddistribuidorOptions.resultados.registros.map(
                                (row)=>(
                                  <option value={row.id}>{row.nombre}</option>

                                ))}    
                                       
                                        </select>
                                     </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Fecha de salida </h6>
                                            <input type="datetime-local" className="form-control"  name="fecha_salida" onChange={this.cambioValor} value={registro.fecha_salida} placeholder="Fecha Salida"  />
                                            <br/>
                                        </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Manifiesto</h6>
                                            <input type="text" className="form-control"  name="manifiesto" onChange={this.cambioValor} value={registro.manifiesto} placeholder="Manifiesto"  />
                                            <br/>
                                        </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>No. de Viaje</h6>
                                            <input type="text" className="form-control"  name="no_viaje" onChange={this.cambioValor} value={registro.no_viaje} placeholder="No. de Viaje"  />
                                            <br/>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>No. de Orden</h6>
                                            <input type="text" className="form-control"  name="no_orden" onChange={this.cambioValor} value={registro.no_orden} placeholder="No. de Orden"  />
                                            <br/>
                                        </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Observaciones</h6>
                                            <input type="text" className="form-control"  name="observaciones" onChange={this.cambioValor} value={registro.observaciones} placeholder="Observaciones"  />
                                            <br/>
                                        </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Temperatura en °F</h6>
                                            <input type="text" className="form-control"  name="temperatura" onChange={this.cambioValor} value={registro.temperatura} placeholder="Temperatura"  />
                                            <br/>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Sello primario</h6>
                                            <input type="text" className="form-control"  name="sello_primario" onChange={this.cambioValor} value={registro.sello_primario} placeholder="Sello primario"  />
                                            <br/>
                                        </div>

                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Sello secundario</h6>
                                            <input type="text" className="form-control"  name="sello_secundario" onChange={this.cambioValor} value={registro.sello_secundario} placeholder="Sello secundario"  />
                                            <br/>
                                        </div>

                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Almace destino </h6>
                                            <input type="text" className="form-control"  name="almacen_destino" onChange={this.cambioValor} value={registro.almacen_destino} placeholder="Almacen destino"  />
                                            <br/>
                                        </div>

                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Agencia aduanal</h6>
                                            <input type="text" className="form-control"  name="agencia_aduanal" onChange={this.cambioValor} value={registro.agencia_aduanal} placeholder="Agencia aduanal"  />
                                            <br/>
                                        </div>

                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Numero de termografo </h6>
                                            <input type="text" className="form-control"  name="no_termografo" onChange={this.cambioValor} value={registro.no_termografo} placeholder="numero de termografo  "  />
                                            <br/>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Tamaño contenedor </h6>
                                            <input type="text" className="form-control"  name="tamanio_caja" onChange={this.cambioValor} value={registro.tamanio_caja} placeholder="Tamaño contenedor  "  />
                                            <br/>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>No.Economico/serie del transporte  </h6>
                                            <input type="text" className="form-control"  name="numero_transporte" onChange={this.cambioValor} value={registro.numero_transporte} placeholder="no. Economico/serie del transporte"  />
                                            <br/>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Placas transporte  </h6>
                                            <input type="text" className="form-control"  name="placas_transporte" onChange={this.cambioValor} value={registro.placas_transporte} placeholder="placas del transporte"  />
                                            <br/>
                                        </div>
                                        
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Placas caja  </h6>
                                            <input type="text" className="form-control"  name="placas_caja" onChange={this.cambioValor} value={registro.placas_caja} placeholder="placas contenedor"  />
                                            <br/>
                                        </div>

                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Numero economico de contenedor  </h6>
                                            <input type="text" className="form-control"  name="no_economico_caja" onChange={this.cambioValor} value={registro.no_economico_caja} placeholder="no economico contenedor"  />
                                            <br/>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Precio por carton  </h6>
                                            <input type="text" className="form-control"  name="precio_carton_ajuste" onChange={this.cambioValor} value={registro.precio_carton_ajuste} placeholder="Precio por carton "  />
                                            <br/>
                                        </div>
                                     
                                        
                                   
                                        
                                       
									   
									   <div className="row-botones"> <Link type="button" to={localListarRegistros} className="btn btn-primary"  style={{width: "100px",marginRight: "5px",marginLeft:"5px",height: "40px"}}> Atras  </Link> <Link type="button"  onClick={this.EnviarDatos} className="btn btn-primary"  style={{width: "100px",marginRight: "5px",marginLeft:"5px",height: "40px"}}> Guardar  </Link> </div>
 
                                    </div>
                           
                                </div>
                           
                                </div>
                            </div>
                       

            
          );
         
    }
   
}
} 
export default EnviosAlta;