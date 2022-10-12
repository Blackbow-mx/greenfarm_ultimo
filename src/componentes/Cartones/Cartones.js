import React, { useEffect,useState } from 'react';
import{Link} from "react-router-dom";
import apicliente from "../../servicios/apicliente";

import { MDBDataTableV5 } from 'mdbreact';



let apiEliminarRegistros = "admin/cartones/delete/";
let localListarRegistros = "/cartones/listar";
let apiConsultaRegistro  = "admin/cartones/listar/";
let apiConfig            = "admin/cartones/init/"
let localEditarRegistros = "/cartones/editar/";
let localInicio          = "/";
let localRegistrar       = "/cartones/alta";





class Cartones  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            columns:[],
            registros:[],
			
            form:{
				
               
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
     borrarRegistros = async (e) =>{


        //console.log(JSON.stringify(e.target));
       // console.log("boton: " + e.target.id);
    
      
          const resultOk = await apicliente.apifetch(apiEliminarRegistros +e.target.id,"POST",{},true);
          
           let variable = JSON.parse(resultOk);
            if(variable.error===true || variable===1){
                alert("error al borrar Registro");
            }
       //this.props.history.push(localListarRegistros);
          //window.location.reload(false);
         this.cargarDatos();
       
      
        }
    

     



    cargarDatos = async ()=>{
		const{} = this.state.form;
      //  const{paterno,materno} = this.state.form;
       
        

       const resultOk = await apicliente.apifetch(apiConsultaRegistro,"POST",JSON.stringify({}),true);
       let resultados= JSON.parse(resultOk);
	   
	   if(resultados===1|| resultados.error===true){
           console.log(resultados)
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
    
	 
	    
        this.cargarDatos();

    }
    
    render() { 
        const{datosCargados,form}= this.state
        
        if(!datosCargados  ){
            return (<div>Cargando...</div>)
        
        }else{
 
          //  console.log(this.state.registros.resultados.registros);
        return (

            
<>
          <div>
		  <h3>
                  Configuracion por pallet
              </h3>
			<div className="pd-ltr-20 xs-pd-20-10">
			<div className="min-height-200px">
			
				    
                <div className="page-header">
					<div className="row_listar_buscar_agregar">


   
	  <div className="row row-cols-4 d-lg-flex align-items-lg-center" style={{marginleft: "0px",marginRight: "0px",width: "100%",minHeight: "100px",maxHeight: "700px"}}>

		       
	   

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
                           

export default Cartones;