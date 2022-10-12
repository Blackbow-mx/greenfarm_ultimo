import React from 'react';
import {Link } from 
"react-router-dom";
import apicliente from "../../servicios/apicliente";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Transporte from "../../Transporte.png";
import InputMask from "react-input-mask";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css



let localListarRegistros  = "/acomodo/listar";
let localListarEnvios     = "/envios/listar"
let apiEditarRegistro     = "admin/acomodo/update/";
let apiShowRegistro       = "admin/acomodo/show/";
let apiCrearRgistro       = "admin/acomodo/crear"
let localEditarRegistros  = "/acomodo/editar/";
let localInicio           = "/";
let localRegistrar        = "/acomodo/alta";
let apiConsultaRegistro   = "admin/acomodo/listar"
let localrecargar         = "/acomodo/";
class AcomdoG_d extends React.Component {
     
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
    




    EnviarDatos= async (e, campo) =>{
                    
                      
                
        e.preventDefault();
        const{idcarton,idenvio,lote,ubicacion,cantidad,observaciones,mascara }= this.state.registro;
        
      
     
        const cant_x_pallet =await apicliente.apifetch("admin/acomodo/restaacomodo/21","POST",JSON.stringify({"ubicacion":ubicacion, "idenvio":this.props.match.params.id }),true);
        let acomodo_cantxpallet= JSON.parse(cant_x_pallet);
        
        console.log(acomodo_cantxpallet);
        this.setState({cant_x_palletCargado_01:true,acomodo_cant_x_pallet_01:acomodo_cantxpallet});
       
            const cant_x_pallet_02 =await apicliente.apifetch("admin/cartones/show/"+idcarton, "POST",JSON.stringify({}),true);
        let acomodo_cantxpallet_02= JSON.parse(cant_x_pallet_02);
        this.setState({cant_x_palletCargado_02:true,acomodo_cant_x_pallet_02:acomodo_cantxpallet_02});

        

        const acomodo_cantidad = await apicliente.apifetch("admin/almacencartones2/listar/","POST",JSON.stringify({"id_carton":idcarton}),true);
        let acomodo_c = JSON.parse(acomodo_cantidad);
        this.setState({acomodoCargado:true,acomodo_al:acomodo_c});

         this.state.registro.mascara = lote.replace(/-/g, " ");

      
        
        
      
             const{acomodoCargado,acomodo_al, acomodo_cant_x_pallet_01,cant_x_palletCargado_01,acomodo_cant_x_pallet_02,cant_x_palletCargado_02}= this.state
            
             if(acomodoCargado==true && cant_x_palletCargado_01== true && cant_x_palletCargado_02== true && this.state.registro.mascara != undefined  ){
               
                try {
                if(acomodo_al.rows[0].cantidad === undefined){
                    alert(" Error esta intentando agregar un tipo carton no disponible en almacen ");

             }else if(parseFloat(acomodo_al.rows[0].cantidad) < parseFloat(cantidad)){
                var confirmacion= window.confirm("el numero de cartones es mayor al disponible solo se cuentan con "+ acomodo_al.rows[0].cantidad +" y esta agregando "+ cantidad + " favor de ingresarlos en almacen "+ "desea agregar mas cartones?");
                  
                   if(confirmacion){
                    window.open("/almacencartones2/listar");
                   }

                   
                
                }else if( parseFloat( acomodo_cant_x_pallet_02.cant_x_pallet) < parseFloat(cantidad) ){
                    alert ("error la cantidad permitida por este tipo de pallet es " + acomodo_cant_x_pallet_02.cant_x_pallet + " y se esta ingresando " + cantidad);
              
                }else if( parseFloat( acomodo_cant_x_pallet_02.cant_x_pallet) < (parseFloat(acomodo_cant_x_pallet_01.capacidad) + parseFloat(cantidad))){
                    alert ("error la cantidad permitida por este tipo de pallet es " + acomodo_cant_x_pallet_02.cant_x_pallet + " y se esta intentando ingresar " + (parseFloat(acomodo_cant_x_pallet_01.capacidad) + parseFloat(cantidad)) );
               
              
                }else if(parseFloat(acomodo_al.rows[0].cantidad)=== parseFloat(cantidad)){
   

                    const result = await apicliente.apifetch("admin/almacencartones2/update/"+lote,"POST",JSON.stringify({
                        "cantidad":"0"
                    }),true);
                      
                    const resultOk = await apicliente.apifetch(apiCrearRgistro,"POST",JSON.stringify({
                            
                          
            
                        
                    
                        idenvio : this.props.match.params.id,
                        lote : this.state.registro.mascara,
                        idcarton:idcarton,
                        cantidad:cantidad,
                        observaciones:observaciones,
                        ubicacion : ubicacion,
                        
                                  }),true);
                     
                  
                    let variable = JSON.parse(resultOk);
                   
                      
                  if(variable.error===true|| variable===1){
                        alert("error al intentar guardar la información");
                         }         
                         else{        
                 const result = await apicliente.apifetch("admin/almacencartones2/update/"+lote,"POST",JSON.stringify({"cantidad":(acomodo_al.cantidad-cantidad)}),true);
                
                
                
               
                    setTimeout(function(){
                        window.location.href = window.location.href;
                    }, 2000);
                    
                    toast.success(' Guardando registro', {
                        
                        position: "bottom-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      
                        })
    
                     
                    }
 
                             
                 }else{
                     
                      
                     const resultOk = await apicliente.apifetch(apiCrearRgistro,"POST",JSON.stringify({
                            
                          
            
                        
                        
                        idenvio : this.props.match.params.id,
                        lote : this.state.registro.mascara,
                        cantidad:cantidad,
                        observaciones:observaciones,
                        ubicacion : ubicacion,
                        idcarton:idcarton,
                        
                                  }),true);
                     
                  
                    let variable = JSON.parse(resultOk);
                   
                      
                  if(variable.error===true|| variable===1){
                        alert("error al intentar guardar la información");
                         }         
                         else{        
                 const result = await apicliente.apifetch("admin/almacencartones2/update/"+lote,"POST",JSON.stringify({"cantidad":(acomodo_al.cantidad-cantidad)}),true);
                
                
                
               
                    setTimeout(function(){
                    
                        
                        window.location.href = window.location.href;
                    }, 2000);
                    
                    toast.success(' Guardando registro', {
                        
                        position: "bottom-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      
                        })
    
                     
                    }
                 
             } function onChange (select) {
               
                if( acomodo_cant_x_pallet_02.cant_x_pallet==acomodo_cant_x_pallet_01.cantidad){
                const value = select.value;
                let option = select.querySelector(`option[value="${value}"]`);
                option.disabled = true;
             }
            }
            
            } catch (err) {

               alert("Error esta intentando agregar cajas que no se encuentran dadas de alta  en almacen");
              
              }
                 
                
        }
                             
                    
}



     async componentDidMount(){

      
      
	   
 this.getOptions_idcarton("admin/cartones/search"); 
 this.getOptions_idenvio("admin/envios/show/"+this.props.match.params.id);
 this.getOptions_idlote("admin/almacencartones2/search");




	   
        
    }
 
    
    render() { 
        const{datosCargados, registro}= this.state
        
        if( !this.state.idcartonCargado || !this.state.idenvioCargado|| !this.state.idloteCargado )
		{
            return (<div>Cargando...</div>)
        
        }else{
        
       
        return ( 
            <div className="container">
                        <div className="row">
                          <div className="col-12">
                          <div className="row" style={{ border: "1px solid #d0d0d0"}}>
            
                         <div className="col">
                         <div className="pd-ltr-20 xs-pd-20-10">
			<div >
			<h2>Registrando Acomodo del envio  {this.state.idenvioOptions.no_viaje}</h2>
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
            <h6 style={{marginbottom: "0px",width: "100%"}}>Lote Code/ Etiqueta</h6>
            
                                            <InputMask {...this.props} mask="99-999-99-99-99-99" maskPlaceholder='99-999-99-99-99-99' placeholder='99-999-99-99-99-99' className="form-control"  maskChar={null}   onChange={this.cambioValor} value={registro.lote}  name="lote"  />
                                            
                                            <br/>
                                        </div>

       <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Tipo de carton</h6>
            <select className="form-control" placeholder="idcarton" name="idcarton" onChange={this.cambioValor} value={registro.idcarton} >
			<option value="-1">Seleccione</option>
            { this.state.idcartonOptions.resultados.registros.map(
             (row)=>(
             <option value={row.id}>{row.descripcion}</option>

             ))}    
                                       
            </select>
       </div>

                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Cantidad</h6>
                                            <input type="text" className="form-control"  name="cantidad" onChange={this.cambioValor} value={registro.cantidad} placeholder="Cantidad"  />
                                            <br/>
                                        </div> 



<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Ubicacion</h6>
            <select onChange={this.cambioValor} style={{paddingBottom: "12px",height: "auto"}} className="form-control" type="text" name="ubicacion" value={registro.ubicacion}>
            <option selected="true" >seleccione la ubicacion </option>
                                             <option value="1">1</option>
                                             <option value="2">2</option>
                                             <option value="3">3</option>
                                             <option value="4">4</option>
                                             <option value="5">5</option>
                                             <option value="6">6</option>
                                             <option value="7">7</option>
                                             <option value="8">8</option>
                                             <option value="9">9</option>
                                             <option value="10">10</option>
                                             <option value="11">11</option>
                                             <option value="12">12</option>
                                             <option value="13">13</option>
                                             <option value="14">14</option>
                                             <option value="15">15</option>
                                             <option value="16">16</option>
                                             <option value="17">17</option>
                                             <option value="18">18</option>
                                             <option value="19">19</option>
                                             <option value="20">20</option>
                                             <option value="21">21</option>
                                             <option value="22">22</option>
                                             <option value="23">23</option>
                                             <option value="24">24</option>
                                             <option value="25">25</option>
                                             <option value="26">26</option>
                                             <option value="27">27</option>
                                             <option value="28">28</option>
                                             
                                            
                                            
                        
                                            </select> 
                                        <br/>
                                     </div>

                                     <div id="form" className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
                            <h6 style={{marginbottom: "0px",width: "100%"}}>Observaciones </h6>
                                                            <textarea rows={4}  type="text" className="form-control"  name="observaciones" onChange={this.cambioValor} value={registro.observaciones} placeholder="Observaciones"  />
                                                            <br/>
                                                        </div> 

                                       
									   
									   <div className="row-botones"> <Link type="button" to={localListarEnvios} className="btn btn-primary"   style={{width: "100px",marginRight: "5px",marginLeft:"5px",height: "40px"}}> Atras  </Link> <Link type="button"  className="btn btn-primary" onClick={(event)=>this.EnviarDatos(event)} style={{width: "100px",marginRight: "5px",marginLeft:"5px",height: "40px"}}> Guardar  </Link>  </div>
 
                                    </div>
  
                     
            </div>
                         
                         
                         </div> 
                   </div>       
                   
                        
                         </div>
                 
              <img style={{margin:"4%"}} src={Transporte} />
                  
            </div>
           
            </div>
            
            
                          
            </div>
            
                        </div>
                       

            
          );
         
    }
   
}
} 
export default AcomdoG_d;