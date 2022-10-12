import React, { useEffect,useState } from 'react';
import{Link} from "react-router-dom";
import apicliente from "../../servicios/apicliente";

import { MDBDataTableV5 } from 'mdbreact';



let apiEliminarRegistros = "admin/insumoscajas2/delete/";
let localListarRegistros = "/insumoscajas2/listar";
let apiConsultaRegistro  = "admin/insumoscajas2/listar/";
let apiConfig            = "admin/insumoscajas2/init/"
let localEditarRegistros = "/insumoscajas2/editar/";
let localInicio          = "/";
let localRegistrar       = "/insumoscajas2/alta";





class Insumoscajas2  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            columns:[],
            registros:[],
			
idcartonOptions:[],
idcartonCargado:false,
idinsumoOptions:[],
idinsumoCargado:false,
idcartonOptions:[],
idcartonCargado:false,
idinsumoOptions:[],
idinsumoCargado:false,
            form:{
				
cantidad:"",
idcarton:"",
idinsumo:"",
               
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
                        console.clear();
                        console.log(res);
						this.setState({idcartonCargado:true, idcartonOptions: JSON.parse(res)});
					   // console.log(this................state);
					}
getOptions_idinsumo = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({idinsumoCargado:true, idinsumoOptions: JSON.parse(res)});
					   // console.log(this................state);
					}



                      borrarRegistros= async(e)=>{



                        //console.log(JSON.stringify(e.target));
                       // console.log("boton: " + e.target.id);
                    
                      
                          const resultOk = await apicliente.apifetch(apiEliminarRegistros +e.target.id,"POST",{},true);
                          
                           let variable = JSON.parse(resultOk);
                            if(variable.error===true || variable===1){
                                alert("error al borrar Registro");
                            }
                          //window.location.reload(false);
                         this.cargarDatos();
                    
                    }
                    
    cargarDatos = async ()=>{
		const{cantidad,idcarton,idinsumo} = this.state.form;
      //  const{paterno,materno} = this.state.form;
       
       
        

       const resultOk = await apicliente.apifetch(apiConsultaRegistro,"POST",JSON.stringify( {
             
		
        cantidad : cantidad,
        idcarton : idcarton,
        idinsumo : idinsumo, 
                  
                }),true);
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
      // console.log(resultOk);
        

    }
 
    componentDidMount(){
    
	 
	    
 this.getOptions_idcarton("admin/cartones/search/");
 this.getOptions_idinsumo("admin/insumos/search/");
 
        this.cargarDatos();

    }
    
    render() { 
        const{datosCargados,form}= this.state
        
        if(!datosCargados   || !this.state.idcartonCargado || !this.state.idinsumoCargado || !this.state.idcartonCargado || !this.state.idinsumoCargado){
            return (<div>Cargando...</div>)
        
        }else{
 
          
        return (

            
<>
          <div>
		  <h3>
                  Insumos por caja
              </h3>
			<div className="pd-ltr-20 xs-pd-20-10">
			<div className="min-height-200px">
			
				    
                <div className="page-header">
					<div className="row_listar_buscar_agregar">


   
	  <div className="row row-cols-4 d-lg-flex align-items-lg-center" style={{marginleft: "0px",marginRight: "0px",width: "100%",minHeight: "100px",maxHeight: "700px"}}>

		
 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingBottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Cantidad</h6><input  style={{borderradius: "2px",border: "1px solid rgb(217,217,217)",marginTop: "2%",width: "100%"}}  className="form-control form-control-sm" type="text"   name="cantidad" onChange={this.cambioValor} value={this.state.form.cantidad}  />
        </div>
     <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingBottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Carton</h6>
                                        <select className="form-control" placeholder="Carton" name="idcarton" onChange={this.cambioValor} value={form.idcarton} >
										<option value="-1">Seleccione</option>
                                        {this.state.idcartonOptions.resultados.registros.map(
                                (row)=>(
                                  <option value={row.id}>{row.descripcion}</option>

                                ))}    
                                       
                                        </select>
                                     </div>
     <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingBottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Insumo</h6>
                                        <select className="form-control" placeholder="Insumo" name="idinsumo" onChange={this.cambioValor} value={form.idinsumo} >
										<option value="-1">Seleccione</option>
                                        {this.state.idinsumoOptions.resultados.registros.map(
                                (row)=>(
                                  <option value={row.id}>{row.nombre}</option>

                                ))}    
                                       
                                        </select>
                                     </div>       
	   

		 <div className='row-botones'>
			<div>
			<button className=" btn btn-primary " type='button' onClick={this.cargarDatos} style={{width: "100px",marginRight: "5px",marginLeft:"5px",height: "40px"}} >
			Buscar 
			</button>
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
                           

export default Insumoscajas2;