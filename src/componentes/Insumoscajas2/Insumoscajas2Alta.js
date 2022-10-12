import React from 'react';
import {Link } from 
"react-router-dom";
import apicliente from "../../servicios/apicliente";

let localListarRegistros  = "/insumoscajas2/listar";
let apiEditarRegistro     = "admin/insumoscajas2/update/";
let apiShowRegistro       = "admin/insumoscajas2/show/";
let apiCrearRgistro       = "admin/insumoscajas2/crear"
let localEditarRegistros  = "/insumoscajas2/editar/";
let localInicio           = "/";
let localRegistrar        = "/insumoscajas2/alta";


class Insumoscajas2Alta extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            idRegistro:this.props.match.params.id,
            leyendaTitulo: "", 
            datosCargados: false,

            registro:[],
			
idcartonOptions:[],
idcartonCargado:false,
idinsumoOptions:[],
idinsumoCargado:false,
           
                
         }
        
         
        
    }
	
	
getOptions_idcarton = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({idcartonCargado:true, idcartonOptions: JSON.parse(res)});
					   // console.log(this................state);
					}
getOptions_idinsumo = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({idinsumoCargado:true, idinsumoOptions: JSON.parse(res)});
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
        const{cantidad,idcarton,idinsumo}= this.state.registro;

        
            
        

       if(this.state.idRegistro > 0)
       {
        const resultOk = await apicliente.apifetch(apiEditarRegistro+this.props.match.params.id,"POST",JSON.stringify({
                  
                
            cantidad : cantidad,
            idcarton : idcarton,
            idinsumo : idinsumo,
            
                         }),true);
		  
		        
    }else{
        const resultOk = await apicliente.apifetch(apiCrearRgistro,"POST",JSON.stringify({
                  
                
            cantidad : cantidad,
            idcarton : idcarton,
            idinsumo : idinsumo,
            
                         }),true);
		
        
   
	
	 let variable = JSON.parse(resultOk);
		 if(variable.error===true|| variable===1){
           alert("error al intentar guardar la información");
			}
        }
    //const navigateTo = () => this.history.push(localListarRegistros);//eg.history.push('/login');
    this.props.history.push( localListarRegistros);
    
    }

     async componentDidMount(){

      
       
	   
 this.getOptions_idcarton("admin/cartones/search");
 this.getOptions_idinsumo("admin/insumos/search");
	   
        if(this.state.idRegistro > 0)
        {
        const resultOk = await apicliente.apifetch(apiShowRegistro+this.props.match.params.id,"POST",{},true);
        
		if(resultOk===1){
            alert("error al cargar registro"); 
        }
		
        this.setState({leyendaTitulo:"Editando Insumos por caja ", datosCargados:true,registro:JSON.parse(resultOk) })
        }
        else
        {
            this.setState({leyendaTitulo:"Agregando Insumos por caja ", datosCargados:true})

        }
    }
 
    
    render() { 
        const{datosCargados, registro}= this.state
        
        if(!datosCargados  || !this.state.idcartonCargado || !this.state.idinsumoCargado)
		{
            return (<div>Cargando...</div>)
        
        }else{
        
       
        return ( 
         			<div className="pd-ltr-20 xs-pd-20-10">
			<div className="pd-20 bg-white border-radius-4 box-shadow mb-30">
			<h2>{this.state.leyendaTitulo} </h2>
                                
                                <div className="row register-form">
                                    <div style={{paddingLeft:"3%"}} className="col-md-12">
									  
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Cantidad por caja </h6>
                                            <input type="text" className="form-control"  name="cantidad" onChange={this.cambioValor} value={registro.cantidad} placeholder="Cantidad"  />
                                            <br/>

                                        </div>   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Carton</h6>
                                        <select className="form-control" placeholder="Carton" name="idcarton" onChange={this.cambioValor} value={registro.idcarton} >
										<option value="-1">Seleccione</option>
                                        {this.state.idcartonOptions.resultados.registros.map(
                                (row)=>(
                                  <option value={row.id}>{row.descripcion}</option>

                                ))}    
                                       
                                        </select>
                                     </div>   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Insumo</h6>
                                        <select className="form-control" placeholder="Insumo" name="idinsumo" onChange={this.cambioValor} value={registro.idinsumo} >
										<option value="-1">Seleccione</option>
                                        {this.state.idinsumoOptions.resultados.registros.map(
                                (row)=>(
                                  <option value={row.id}>{row.nombre}</option>

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
export default Insumoscajas2Alta;