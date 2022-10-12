import React from 'react';
import {Link } from 
"react-router-dom";
import apicliente from "../../servicios/apicliente";

let localListarRegistros  = "/insumosgenerales/listar";
let apiEditarRegistro     = "admin/insumosgenerales/update/";
let apiShowRegistro       = "admin/insumosgenerales/show/";
let apiCrearRgistro       = "admin/insumosgenerales/crear"
let localEditarRegistros  = "/insumosgenerales/editar/";
let localInicio           = "/";
let localRegistrar        = "/insumosgenerales/alta";


class InsumosgeneralesAlta extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            idRegistro:this.props.match.params.id,
            leyendaTitulo: "", 
            datosCargados: false,

            registro:[],
			
tipo_insumoOptions:[],
tipo_insumoCargado:false,
           
                
         }
        
         
        
    }
	
	
getOptions_tipo_insumo = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({tipo_insumoCargado:true, tipo_insumoOptions: JSON.parse(res)});
					   // console.log(this................state);
					}

    getOptions = async (url,referencia) =>{
     
        console.log("pidiendo colores");
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
        const{cantidad,descripcion,tipo_insumo}= this.state.registro;

        let raw = 
            {
                  
                
cantidad : cantidad,
descripcion : descripcion,
tipo_insumo : tipo_insumo,

             }
        

       if(this.state.idRegistro > 0)
	    
       {
        const resultOk = await apicliente.apifetch(apiEditarRegistro+this.props.match.params.id,"POST",JSON.stringify(raw),true);
		   let variable = JSON.parse(resultOk);
		   
		 if(variable.error===true|| variable===1){
           alert("error al intentar guardar la información");
			}
		        
		}else{
			const resultOk = await apicliente.apifetch(apiCrearRgistro,"POST",JSON.stringify(raw),true);
			
			
		
	
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

      
       // this.getOptions("admin/colores/search");
	   
        this.getOptions_tipo_insumo("admin/tiposinsumos/search");
	   
        if(this.state.idRegistro > 0)
        {
        const resultOk = await apicliente.apifetch(apiShowRegistro+this.props.match.params.id,"POST",{},true);
        
		if(resultOk===1){
            alert("error al cargar registro"); 
        }
		
        this.setState({leyendaTitulo:"Editando Insumosgenerales", datosCargados:true,registro:JSON.parse(resultOk) })
        }
        else
        {
            this.setState({leyendaTitulo:"Agregando Insumosgenerales", datosCargados:true})

        }
    }
 
    
    render() { 
        const{datosCargados, registro}= this.state
        
        if(!datosCargados  || !this.state.tipo_insumoCargado)
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
            <h6 style={{marginbottom: "0px",width: "100%"}}>Cantidad</h6>
                                            <input type="text" className="form-control"  name="cantidad" onChange={this.cambioValor} value={registro.cantidad} placeholder="Cantidad"  />
                                            <br/>
                                        </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Descripcion</h6>
                                            <input type="text" className="form-control"  name="descripcion" onChange={this.cambioValor} value={registro.descripcion} placeholder="Descripcion"  />
                                            <br/>
                                        </div>   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Tipo de Insumo</h6>
                                        <select className="form-control" placeholder="Tipo de Insumo" name="tipo_insumo" onChange={this.cambioValor} value={registro.tipo_insumo} >
										<option value="-1">Seleccione</option>
                                        {this.state.tipo_insumoOptions.resultados.registros.map(
                                (row)=>(
                                  <option value={row.id}>{row.descripcion}</option>

                                ))}    
                                       
                                        </select>
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
export default InsumosgeneralesAlta;