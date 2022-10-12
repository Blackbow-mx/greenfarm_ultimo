import React, { useEffect,useState } from 'react';
import{Link} from "react-router-dom";
import apicliente from "../../servicios/apicliente";

import { MDBDataTableV5 } from 'mdbreact';



let apiEliminarRegistros = "admin/almacencartones2/delete/";
let localListarRegistros = "/almacencartones2/listar";
let apiConsultaRegistro  = "admin/almacencartones2/listar/";
let apiConfig            = "admin/almacencartones2/init/"
let localEditarRegistros = "/almacencartones2/editar/";
let localInicio          = "/";
let localRegistrar       = "/almacencartones2/alta";





class Almacencartones2  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            columns:[],
            registros:[],
			
id_cartonOptions:[],
id_cartonCargado:false,
id_loteOptions:[],
id_loteCargado:false,
id_proveedorOptions:[],
id_proveedorCargado:false,
id_cartonOptions:[],
id_cartonCargado:false,
id_loteOptions:[],
id_loteCargado:false,
id_proveedorOptions:[],
id_proveedorCargado:false,
id_cartonOptions:[],
id_cartonCargado:false,
id_loteOptions:[],
id_loteCargado:false,
id_proveedorOptions:[],
id_proveedorCargado:false,
            form:{
				
id_carton:"",
id_lote:"",
id_proveedor:"",
               
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



getOptions_id_carton = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({id_cartonCargado:true, id_cartonOptions: JSON.parse(res)});
					   // console.log(this................state);
					}
getOptions_id_lote = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({id_loteCargado:true, id_loteOptions: JSON.parse(res)});
					   // console.log(this................state);
					}
getOptions_id_proveedor = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({id_proveedorCargado:true, id_proveedorOptions: JSON.parse(res)});
					   // console.log(this................state);
					}
getOptions_id_carton = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({id_cartonCargado:true, id_cartonOptions: JSON.parse(res)});
					   // console.log(this................state);
					}
getOptions_id_lote = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({id_loteCargado:true, id_loteOptions: JSON.parse(res)});
					   // console.log(this................state);
					}
getOptions_id_proveedor = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({id_proveedorCargado:true, id_proveedorOptions: JSON.parse(res)});
					   // console.log(this................state);
					}
getOptions_id_carton = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({id_cartonCargado:true, id_cartonOptions: JSON.parse(res)});
					   // console.log(this................state);
					}
getOptions_id_lote = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({id_loteCargado:true, id_loteOptions: JSON.parse(res)});
					   // console.log(this................state);
					}
getOptions_id_proveedor = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({id_proveedorCargado:true, id_proveedorOptions: JSON.parse(res)});
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
		const{id_carton,lote,id_proveedor,precio,cantidad,merma,frac_arancelaria,fecha_suministro,fecha_caducidad} = this.state.form;
      //  const{paterno,materno} = this.state.form;
      
        
        

       const resultOk = await apicliente.apifetch(apiConsultaRegistro,"POST",JSON.stringify({
             
		
         id_carton : id_carton,
         lote : lote,
         id_proveedor : id_proveedor,
         precio:precio,
         cantidad:cantidad,
         merma:merma,
         frac_arancelaria:frac_arancelaria,
         fecha_suministro:fecha_suministro,
         fecha_caducidad:fecha_caducidad
         
         
                   
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
    
	 
	    
 this.getOptions_id_carton("admin/cartones/search");
 this.getOptions_id_proveedor("admin/proveedores/search");
// this.getOptions_id_carton("admin/_carton/search");
// this.getOptions_id_lote("admin/_lote/search");
// this.getOptions_id_proveedor("admin/_proveedor/search");
// this.getOptions_id_carton("admin/_carton/search");
// this.getOptions_id_lote("admin/_lote/search");
// this.getOptions_id_proveedor("admin/_proveedor/search");
        this.cargarDatos();

    }
    
    render() { 
        const{datosCargados,form,registro}= this.state
        
        if(!datosCargados   || !this.state.id_cartonCargado ||  !this.state.id_proveedorCargado || !this.state.id_cartonCargado  || !this.state.id_proveedorCargado || !this.state.id_cartonCargado || !this.state.id_proveedorCargado){
            return (<div>Cargando...</div>)
        
        }else{
 
          //  console.log(this.state.registros.resultados.registros);
        return (

            
<>
          <div>
		  <h3>
                  Almacen 
              </h3>
			<div className="pd-ltr-20 xs-pd-20-10">
			<div className="min-height-200px">
			
				    
                <div className="page-header">
					<div className="row_listar_buscar_agregar">


   
	  <div className="row row-cols-4 d-lg-flex align-items-lg-center" style={{marginleft: "0px",marginRight: "0px",width: "100%",minHeight: "100px",maxHeight: "700px"}}>

		
     <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingBottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Carton</h6>
                                        <select className="form-control" placeholder="Carton" name="id_carton" onChange={this.cambioValor} value={form.id_carton} >
										<option value="-1">Seleccione</option>
                                        {this.state.id_cartonOptions.resultados.registros.map(
                                (row)=>(
                                  <option value={row.id}>{row.descripcion}</option>

                                ))}    
                                       
                                        </select>
                                     </div>
    
     <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingBottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Proveedor</h6>
                                        <select className="form-control" placeholder="Proveedor" name="id_proveedor" onChange={this.cambioValor} value={form.id_proveedor} >
										<option value="-1">Seleccione</option>
                                        {this.state.id_proveedorOptions.resultados.registros.map(
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
                           

export default Almacencartones2;