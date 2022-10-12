import React from 'react';
import {Link } from 
"react-router-dom";
import apicliente from "../../servicios/apicliente";

let localListarRegistros  = "/distribuidores/listar";
let apiEditarRegistro     = "admin/distribuidores/update/";
let apiShowRegistro       = "admin/distribuidores/show/";
let apiCrearRgistro       = "admin/distribuidores/crear"
let localEditarRegistros  = "/distribuidores/editar/";
let localInicio           = "/";
let localRegistrar        = "/distribuidores/alta";
//este que es distribuidores se utilizara cpara guardar los ranchos 

class DistribuidoresAlta extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            idRegistro:this.props.match.params.id,
            leyendaTitulo: "", 
            datosCargados: false,

            registro:[],
			
           
                
         }
        
         
        
    }
	
	


    cambioValor = (e)=> {
        const state=this.state.registro;
        state[e.target.name]=e.target.value;
        this.setState({registro:state});
        console.log(this.state.registro);

    }

    EnviarDatos= async (e) =>{
       

      

        e.preventDefault();
        const{domicilio,codigo,nombre}= this.state.registro;

      
        

       if(this.state.idRegistro > 0)
       {
        const resultOk = await apicliente.apifetch(apiEditarRegistro+this.props.match.params.id,"POST",JSON.stringify({
                  
                
            domicilio : domicilio,
            codigo : codigo,
            nombre : nombre,
            
                         }),true);
		  
		        
    }else{
        const resultOk = await apicliente.apifetch(apiCrearRgistro,"POST",JSON.stringify({
                  
                
            domicilio : domicilio,
            codigo : codigo,
            nombre : nombre,
            
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

      
        
	   
        if(this.state.idRegistro > 0)
        {
        const resultOk = await apicliente.apifetch(apiShowRegistro+this.props.match.params.id,"POST",{},true);
        
		if(resultOk===1){
            alert("error al cargar registro"); 
        }
		
        this.setState({leyendaTitulo:"Editando Ranchos", datosCargados:true,registro:JSON.parse(resultOk) })
        }
        else
        {
            this.setState({leyendaTitulo:"Agregando Ranchos", datosCargados:true})

        }
    }
 
    
    render() { 
        const{datosCargados, registro}= this.state
        
        if(!datosCargados )
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
            <h6 style={{marginbottom: "0px",width: "100%"}}>Domicilio Completo</h6>
                                            <input type="text" className="form-control"  name="domicilio" onChange={this.cambioValor} value={registro.domicilio} placeholder="Domicilio Completo"  />
                                            <br/>
                                        </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Codigo</h6>
                                            <input type="text" className="form-control"  name="codigo" onChange={this.cambioValor} value={registro.codigo} placeholder="codigo"  />
                                            <br/>
                                        </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Nombre</h6>
                                            <input type="text" className="form-control"  name="nombre" onChange={this.cambioValor} value={registro.nombre} placeholder="Nombre"  />
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
export default DistribuidoresAlta;