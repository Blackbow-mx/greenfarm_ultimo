import React from 'react';
import {Link } from 
"react-router-dom";
import apicliente from "../../servicios/apicliente";

let localListarRegistros  = "/paramsportransporte/listar";
let apiEditarRegistro     = "admin/paramsportransporte/update/";
let apiShowRegistro       = "admin/paramsportransporte/show/";
let apiCrearRgistro       = "admin/paramsportransporte/crear"
let localEditarRegistros  = "/paramsportransporte/editar/";
let localInicio           = "/";
let localRegistrar        = "/paramsportransporte/alta";


class ParamsportransporteAlta extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            idRegistro:this.props.match.params.id,
            leyendaTitulo: "", 
            datosCargados: false,

            registro:[],
			
idparametroOptions:[],
idparametroCargado:false,
idtransporteOptions:[],
idtransporteCargado:false,
           
                
         }
        
         
        
    }
	
	
getOptions_idparametro = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({idparametroCargado:true, idparametroOptions: JSON.parse(res)});
					   // console.log(this................state);
					}
getOptions_idtransporte = async (url,referencia) =>{
						 
						const res = await apicliente.apifetch(url,"POST","{}",true);
						this.setState({idtransporteCargado:true, idtransporteOptions: JSON.parse(res)});
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
        const{idparametro,idtransporte}= this.state.registro;

       
        

       if(this.state.idRegistro > 0)
       {
        const resultOk = await apicliente.apifetch(apiEditarRegistro+this.props.match.params.id,"POST",JSON.stringify(
            {
                  
                
idparametro : idparametro,
idtransporte : idtransporte,

             }),true);
		  
		        
    }else{
        const resultOk = await apicliente.apifetch(apiCrearRgistro,"POST",JSON.stringify( 
            {
                  
                
idparametro : idparametro,
idtransporte : idtransporte,

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

      
       // this.getOptions("admin/colores/search");
	   
 this.getOptions_idparametro("admin/parameters/search");
 this.getOptions_idtransporte("admin/envios/search");
	   
        if(this.state.idRegistro > 0)
        {
        const resultOk = await apicliente.apifetch(apiShowRegistro+this.props.match.params.id,"POST",{},true);
        
		if(resultOk===1){
            alert("error al cargar registro"); 
        }
		
        this.setState({leyendaTitulo:"Editando parámetros por envio ", datosCargados:true,registro:JSON.parse(resultOk) })
        }
        else
        {
            this.setState({leyendaTitulo:"Agregando parámetros por envio", datosCargados:true})

        }
    }
 
    
    render() { 
        const{datosCargados, registro}= this.state
        
        if(!datosCargados  || !this.state.idparametroCargado || !this.state.idtransporteCargado)
		{
            return (<div>Cargando...</div>)
        
        }else{
        
       
        return ( 
         			<div className="pd-ltr-20 xs-pd-20-10">
			<div className="pd-20 bg-white border-radius-4 box-shadow mb-30">
			<h2> {this.state.leyendaTitulo} </h2>
                                
                                <div className="row register-form">
                                    <div style={{paddingLeft:"3%"}} className="col-md-12">
									     <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Parametro</h6>
                                        <select className="form-control" placeholder="Parametro" name="idparametro" onChange={this.cambioValor} value={registro.idparametro} >
										<option value="-1">Seleccione</option>
                                        {this.state.idparametroOptions.resultados.registros.map(
                                (row)=>(
                                  <option value={row.id}>{row.clave}</option>
                                  

                                ))}    
                                       
                                        </select>
                                     </div>   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Viaje/Transporte</h6>
                                        <select className="form-control" placeholder="Transporte" name="idtransporte" onChange={this.cambioValor} value={registro.idtransporte} >
										<option value="-1">Seleccione</option>
                                        {this.state.idtransporteOptions.resultados.registros.map(
                                (row)=>(
                                  <option value={row.id}>{row.no_viaje}</option>

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
export default ParamsportransporteAlta;