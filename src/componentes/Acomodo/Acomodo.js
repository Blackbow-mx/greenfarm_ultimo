import React, { useEffect,useState } from 'react';
import{Link} from "react-router-dom";
import apicliente from "../../servicios/apicliente";

import { MDBDataTableV5 } from 'mdbreact';
import Envios from '../Envios/Envios';



let apiEliminarRegistros = "admin/acomodo/delete/";
let localListarRegistros = "/acomodo/listar";
let apiConsultaRegistro  = "admin/acomodo/listar/";
let apiConfig            = "admin/acomodo/init/"
let localEditarRegistros = "/acomodo/editar/";
let localInicio          = "/";
let localRegistrar       = "/acomodo/alta";





class Acomodo  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
		const{idcarton,clave,idenvio,lote,ubicacion} = this.state.form;
      //  const{paterno,materno} = this.state.form;
        
      

       const resultOk = await apicliente.apifetch(apiConsultaRegistro,"POST",JSON.stringify(  {
             
		
        idcarton : idcarton,
        clave : clave,
        
        idenvio : idenvio,
        lote : lote,
        ubicacion : ubicacion, 
                  
                }
                ),true);
       let resultados= JSON.parse(resultOk);
	   
	   if(resultados===1|| resultados.error===true){
        alert("Error del servidor contacta al provedor de servicio")
       }
       else{

       
		   for (var i = 0; i < resultados.rows.length; i++) {

			//console.log(resultados[i]);
			resultados.rows[i].botones2 =<> <Link  style={{color:"white"}} type="button" className="btn " to= {localEditarRegistros+resultados.rows[i].id}> Editar </Link>
			<button  style={{color:"white"}} id={resultados.rows[i].id} type="button" className="btn "
			onClick={(event)=>this.borrarRegistros(event)
			}
			> Borrar </button></>
		   }
		  
		  

		   
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
        const{datosCargados,form}= this.state
        
        if(!datosCargados   || !this.state.idcartonCargado || !this.state.idenvioCargado || !this.state.idcartonCargado || !this.state.idenvioCargado){
            return (<div>Cargando...</div>)
        
        }else{
 
          //  console.log(this.state.registros.resultados.registros);
        return (

            
<>
          <div>
		  <h3>
                  Acomodo
              </h3>
			<div className="pd-ltr-20 xs-pd-20-10">
			<div className="min-height-200px">
			
				    
                <div className="page-header">
					<div className="row_listar_buscar_agregar">

	  <div className="row row-cols-4 d-lg-flex align-items-lg-center" style={{marginleft: "0px",marginRight: "0px",width: "100%",minHeight: "100px",maxHeight: "700px"}}>

		
    
 
 
     <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingBottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Envío</h6>
                                        <select className="form-control" placeholder="Envío" name="idenvio" onChange={this.cambioValor} value={this.state.form.idenvio} >
										<option value="-1">Seleccione</option>
                                        {this.state.idenvioOptions.resultados.registros.map(
                                (row)=>(
                                  <option value={row.id}>{row.no_viaje}</option>
                                  

                                ))}    
                                       
                                        </select>
                                     </div>

                                     <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingBottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%",marginTop:"7%"}}>Ubicacion</h6>
            <select onChange={this.cambioValor}  className="form-control" type="text" name="ubicacion" value={this.state.form.ubicacion}>
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
	   

		 <div className='row-botones'>
			<div>
			<Link className=" btn btn-primary " type='button' to={localInicio}  style={{width: "100px",marginRight: "5px",marginLeft:"5px",height: "40px"}} >
			Atras 
			</Link>
			</div>
			
			
            <div>
			<button className=" btn btn-primary " type='button' onClick={this.cargarDatos} style={{width: "100px",marginRight: "5px",marginLeft:"5px",height: "40px"}} >
			Buscar 
			</button>
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
                           

export default Acomodo;