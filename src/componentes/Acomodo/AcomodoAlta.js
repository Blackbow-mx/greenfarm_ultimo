import React from 'react';
import {Link } from 
"react-router-dom";
import apicliente from "../../servicios/apicliente";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

let localListarRegistros  = "/acomodo/listar";
let apiEditarRegistro     = "admin/acomodo/update/";
let apiShowRegistro       = "admin/acomodo/show/";
let apiCrearRgistro       = "admin/acomodo/crear"
let localEditarRegistros  = "/acomodo/editar/";
let localInicio           = "/";
let localRegistrar        = "/acomodo/alta";


class AcomodoAlta extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            idRegistro:this.props.match.params.id,
            leyendaTitulo: "", 
            datosCargados: false,

            registro:[],
			
idcartonOptions:[],
idcartonCargado:false,
idloteOptions:[],
idloteCargado:false,
idenvioOptions:[],
idenvioCargado:false,
idubicacionOptions:[
],
idubicacionCargado:false,



acomodo_al:[],
acomodoCargado:false,
acomodo_cant_x_pallet_01:[],
cant_x_palletCargado_01:false,
cant_x_palletCargado_02:false,
acomodo_cant_x_pallet_02:[],

           
                
         }
        
         
        
    }
	
    	
getOptions_idcarton = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({idcartonCargado:true, idcartonOptions: JSON.parse(res)});
					   // console.log(this................state);
					}

getOptions_idlote = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({idloteCargado:true, idloteOptions: JSON.parse(res)});
					   // console.log(this................state);
					}                   



getOptions_idenvio = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({idenvioCargado:true, idenvioOptions: JSON.parse(res)});
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
        const{idcarton,clave,idenvio,lote,ubicacion,peso,cantidad,observaciones }= this.state.registro;


                      
                    const resultOk = await apicliente.apifetch(apiEditarRegistro+this.props.match.params.id,"POST",JSON.stringify({
                            
                          
                        clave : clave,
                        idenvio : idenvio,
                        lote : lote,
                        peso:peso,
                        cantidad:cantidad,
                        observaciones:observaciones,
                        ubicacion : ubicacion,
                        
                                  }),true);
                     
                  
                    let variable = JSON.parse(resultOk);
                   
                      
                  if(variable.error===true|| variable===1){
                        alert("error al intentar guardar la información");
                         }         
                         else{        
               
                    setTimeout(function(){
                        window.location.assign(localListarRegistros)
                    }, 2000);
                    
                    toast.success(' Editando registro', {
                        
                        position: "bottom-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      
                        })
    
                     
                    }
 
                             
                
                 
            
                             
                    
}


     async componentDidMount(){

      
      
	   
 this.getOptions_idcarton("admin/cartones/search");
 this.getOptions_idenvio("admin/envios/search");
 this.getOptions_idlote("admin/almacencartones2/search");



	   
        if(this.state.idRegistro > 0)
        {
        const resultOk = await apicliente.apifetch(apiShowRegistro+this.props.match.params.id,"POST",{},true);
        
		if(resultOk===1){
            alert("error al cargar registro"); 
        }
		
        this.setState({leyendaTitulo:"Editando Acomodo", datosCargados:true,registro:JSON.parse(resultOk) })
        }
        else
        {
            this.setState({leyendaTitulo:"Agregando Acomodo", datosCargados:true})

        }
    }
 
    
    render() { 
        const{datosCargados, registro}= this.state
        
        if(!datosCargados  || !this.state.idcartonCargado || !this.state.idenvioCargado|| !this.state.idloteCargado )
		{
            return (<div>Cargando...</div>)
        
        }else{
        
       
        return ( 
         			<div className="pd-ltr-20 xs-pd-20-10">
			<div className="pd-20 bg-white border-radius-4 box-shadow mb-30">
			<h2>{this.state.leyendaTitulo}</h2>
            <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
                                
                                <div className="row register-form">
                                    <div style={{paddingLeft:"3%"}} className="col-md-12">

                                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Lote</h6>
			<input disabled type="text" className="form-control" placeholder="Lote" name="lote"  onChange={this.cambioValor} value={registro.lote}   />
            <br/>
                                        </div>					     




                                        
                                         <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Envío</h6>

                                        <select disabled className="form-control" placeholder="Envío" name="idenvio" onChange={this.cambioValor} value={registro.idenvio} >
										<option value="-1">Seleccione</option>
                                        {this.state.idenvioOptions.resultados.registros.map(
                                (row)=>(
                                  <option value={row.id}>{row.no_viaje}</option>

                                ))}    
                                       
                                        </select>
                                        <br/>
                                     </div>

                                     
                                       
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Cantidad</h6>
                                            <input disabled type="text" className="form-control"  name="cantidad" onChange={this.cambioValor} value={registro.cantidad} placeholder="Cantidad"  />
                                            <br/>
                                        </div> 

                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Observaciones </h6>
                                            <input  type="text" className="form-control"  name="observaciones" onChange={this.cambioValor} value={registro.observaciones} placeholder="Observaciones"  />
                                            <br/>
                                        </div> 

            





                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Ubicacion</h6>
            <input disabled onChange={this.cambioValor} style={{paddingBottom: "12px",height: "auto"}} className="form-control" type="text" name="ubicacion" value={registro.ubicacion}/>
           
                                             
                                        <br/>
                                     </div>
                                       
									   
									   <div className="row-botones"> <Link type="button" to={localListarRegistros} className="btn btn-primary"  style={{width: "100px",marginRight: "5px",marginLeft:"5px",height: "40px"}}> Atras  </Link> <Link type="button"  onClick={this.EnviarDatos} className="btn btn-primary" style={{width: "100px",marginRight: "5px",marginLeft:"5px",height: "40px"}}> Guardar  </Link> </div>
 
                                    </div>
                           
                                </div>
                           
                                </div>
                            </div>
                       

            
          );
         
    }
   
}
} 
export default AcomodoAlta;