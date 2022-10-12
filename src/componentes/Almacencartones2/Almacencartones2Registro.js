import React from 'react';
import {Link } from 
"react-router-dom";
import apicliente from "../../servicios/apicliente";

let localListarRegistros  = "/almacencartones2/listar";
let apiEditarRegistro     = "admin/almacencartones2/update/";
let apiShowRegistro       = "admin/almacencartones2/show/";
let apiCrearRgistro       = "admin/almacencartones2/crear";
let localEditarRegistros  = "/almacencartones2/editar/";
let localInicio           = "/";
let localRegistrar        = "/almacencartones2/alta";


class Almacencartones2Alta extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            idRegistro:this.props.match.params.id,
            leyendaTitulo: "", 
            datosCargados: false,

            registro:[],
			
id_cartonOptions:[],
id_cartonCargado:false,
id_loteOptions:[],
id_proveedorOptions:[],
id_proveedorCargado:false,
           
                
         }
        
         
        
    }
	
	
getOptions_id_carton = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({id_cartonCargado:true, id_cartonOptions: JSON.parse(res)});
					   // console.log(this................state);
					}

getOptions_id_proveedor = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({id_proveedorCargado:true, id_proveedorOptions: JSON.parse(res)});
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
        const{id_carton,id_proveedor,precio,cantidad,merma,frac_arancelaria,fecha_suministro,fecha_caducidad,lote}= this.state.registro;
        

        
           
       if(this.state.idRegistro > 0)
	    
       {
        const resultOk = await apicliente.apifetch(apiEditarRegistro+this.props.match.params.id,"POST",JSON.stringify( {
                  
                
            id_carton : id_carton,
            
            precio:precio,
            id_proveedor : id_proveedor,
            cantidad:(cantidad-merma),
            merma:merma,
            frac_arancelaria:frac_arancelaria,
            fecha_suministro:fecha_suministro,
            fecha_vencimiento:fecha_caducidad,
            lote:lote
            
            
                         }
                    
            ),true);
		   let variable = JSON.parse(resultOk);
		   
		 if(variable.error===true|| variable===1){
           alert("error al intentar guardar la información");
			}
		        
		}else{
			const resultOk = await apicliente.apifetch(apiCrearRgistro,"POST",JSON.stringify( {
                  
                
                id_carton : id_carton,
             
                precio:precio,
                id_proveedor : id_proveedor,
                cantidad:(cantidad-merma),
                merma:merma,
                frac_arancelaria:frac_arancelaria,
                fecha_suministro:fecha_suministro,
                fecha_vencimiento:fecha_caducidad,
                lote:lote,
                
                
                             }
                        
                ),true);
			console.log( {
                  
                
                id_carton : id_carton,
               
                precio:precio,
                id_proveedor : id_proveedor,
                cantidad:(cantidad-merma),
                merma:merma,
                frac_arancelaria:frac_arancelaria,
                fecha_suministro:fecha_suministro,
                fecha_vencimiento:fecha_caducidad,
                lote:lote,
                
                
                             }
                        
                );
			
		
	
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

      
   
	   
this.getOptions_id_carton("admin/cartones/search");
 
 this.getOptions_id_proveedor("admin/proveedores/search");
	   
        if(this.state.idRegistro > 0)
        {
        const resultOk = await apicliente.apifetch(apiShowRegistro+this.props.match.params.id,"POST",{},true);
        
		if(resultOk===1){
            alert("error al cargar registro"); 
        }
		
        this.setState({leyendaTitulo:"Editando   Almacen ", datosCargados:true,registro:JSON.parse(resultOk) })
        }
        else
        {
            this.setState({leyendaTitulo:"Agregando  Almacen", datosCargados:true})

        }
    }
 
    
    render() { 
        const{datosCargados, registro}= this.state
        
        if(!datosCargados  || !this.state.id_cartonCargado ||  !this.state.id_proveedorCargado)
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
            <h6 style={{marginbottom: "0px",width: "100%"}}>Carton</h6>
                                        <select className="form-control" placeholder="Carton" name="id_carton" onChange={this.cambioValor} value={registro.id_carton} >
										<option value="-1">Seleccione</option>
                                        {this.state.id_cartonOptions.resultados.registros.map(
                                (row)=>(
                                  <option value={row.id}>{row.descripcion}</option>

                                ))}    
                                       
                                        </select>
                                     </div> 

                                    
                                     
                                     
                                     
                                     
                                       <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Proveedor</h6>
                                        <select className="form-control" placeholder="Proveedor" name="id_proveedor" onChange={this.cambioValor} value={registro.id_proveedor} >
										<option value="-1">Seleccione</option>
                                        {this.state.id_proveedorOptions.resultados.registros.map(
                                (row)=>(
                                  <option value={row.id}>{row.nombre}</option>

                                ))}    
                                       
                                        </select>
                                     </div>
                                     <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingBottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Precio</h6><input  style={{borderradius: "2px",border: "1px solid rgb(217,217,217)",marginTop: "2%",width: "100%"}}  className="form-control form-control-sm" type="number"   name="precio" onChange={this.cambioValor} value={registro.precio}  />
        </div>  
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Cantidad</h6>
                                            <input type="text" className="form-control"  name="cantidad" onChange={this.cambioValor} value={registro.cantidad} placeholder="cantidad"  />
                                            <br/>
                                        </div> 

                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Merma</h6>
                                            <input type="text" className="form-control"  name="merma" onChange={this.cambioValor} value={registro.merma} placeholder="Merma"  />
                                            <br/>
                                        </div> 

                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Frac. Arancelaria</h6>
                                            <input type="text" className="form-control"  name="frac_arancelaria" onChange={this.cambioValor} value={registro.frac_arancelaria} placeholder="Frac. arancelaria"  />
                                            <br/>
                                        </div> 
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Lote</h6>
                                            <input type="text" className="form-control"  name="lote" onChange={this.cambioValor} value={registro.lote} placeholder="Lote"  />
                                            <br/>
                                        </div> 
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Fecha de suministro</h6>
                                            <input type="date" className="form-control"  name="fecha_suministro" onChange={this.cambioValor} value={registro.fecha_suministro} placeholder="dd/mm/aa"  />
                                            <br/>
                                        </div> 
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Fecha de caducidad</h6>
                                            <input  type="date" className="form-control"  name="fecha_caducidad" onChange={this.cambioValor} value={registro.fecha_caducidad} placeholder="dd/mm/aa"  />
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
export default Almacencartones2Alta;