import React from 'react';
import {Link } from 
"react-router-dom";
import apicliente from "../../servicios/apicliente";

let localListarRegistros  = "/ciatransportes/listar";
let apiEditarRegistro     = "admin/ciatransportes/update/";
let apiShowRegistro       = "admin/ciatransportes/show/";
let apiCrearRgistro       = "admin/ciatransportes/crear"
let localEditarRegistros  = "/ciatransportes/editar/";
let localInicio           = "/";
let localRegistrar        = "/ciatransportes/alta";


class CiatransportesAlta extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            idRegistro:this.props.match.params.id,
            leyendaTitulo: "", 
            datosCargados: false,

            registro:[],
			
           
                
         }
        
         
        
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
        const{contacto,correo,domicilio,nombre,telefono,scac,caat,propietario,taxid}= this.state.registro;

        
          
        

       if(this.state.idRegistro > 0)
       {
        const resultOk = await apicliente.apifetch(apiEditarRegistro+this.props.match.params.id,"POST",JSON.stringify(  {
                  
                
            contacto : contacto,
            correo : correo,
            domicilio : domicilio,
            nombre : nombre,
            telefono : telefono,
            propietario:propietario,
            scac:scac,
            caat:caat,
            taxid:taxid
            
                         }),true);
		  
		        
    }else{
        const resultOk = await apicliente.apifetch(apiCrearRgistro,"POST",JSON.stringify(  {
                  
                
            contacto : contacto,
            correo : correo,
            domicilio : domicilio,
            nombre : nombre,
            telefono : telefono,
            propietario:propietario,
            scac:scac,
            caat:caat,
            taxid:taxid
            
                         }),true);
		
        
    
	
	 let variable = JSON.parse(resultOk);
		 if(variable.error===true|| variable===1){
           alert("error al intentar guardar la información");
			}
        }
    //const navigateTo = () => this.history.push(localListarRegistros);//eg.history.push('/login');
    this.props.history.push(localListarRegistros);
    
    }

     async componentDidMount(){

      
        
	   
	   
        if(this.state.idRegistro > 0)
        {
        const resultOk = await apicliente.apifetch(apiShowRegistro+this.props.match.params.id,"POST",{},true);
        
		if(resultOk===1){
            alert("error al cargar registro"); 
        }
		
        this.setState({leyendaTitulo:"Editando Compañia de transportes ", datosCargados:true,registro:JSON.parse(resultOk) })
        }
        else
        {
            this.setState({leyendaTitulo:"Agregando Compañia de transportes ", datosCargados:true})

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
			<h2> Añadir compañias de transporte </h2>
                                
                                <div className="row register-form">
                                    <div style={{paddingLeft:"3%"}} className="col-md-12">
                                 
   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>SCAC</h6>
                                            <input type="text" className="form-control"  name="scac" onChange={this.cambioValor} value={registro.scac} placeholder="SCAC"  />
                                            <br/>
                                        </div>  

  <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>CAAT</h6>
                                            <input type="text" className="form-control"  name="caat" onChange={this.cambioValor} value={registro.caat} placeholder="CAAT"  />
                                            <br/>
                                        </div>  

									  
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Contacto</h6>
                                            <input type="text" className="form-control"  name="contacto" onChange={this.cambioValor} value={registro.contacto} placeholder="Contacto"  />
                                            <br/>
                                        </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Correo</h6>
                                            <input type="text" className="form-control"  name="correo" onChange={this.cambioValor} value={registro.correo} placeholder="Correo"  />
                                            <br/>
                                        </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Domicilio Completo</h6>
                                            <input type="text" className="form-control"  name="domicilio" onChange={this.cambioValor} value={registro.domicilio} placeholder="Domicilio Completo"  />
                                            <br/>
                                        </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Nombre</h6>
                                            <input type="text" className="form-control"  name="nombre" onChange={this.cambioValor} value={registro.nombre} placeholder="Nombre"  />
                                            <br/>
                                        </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Telefono</h6>
                                            <input type="text" className="form-control"  name="telefono" onChange={this.cambioValor} value={registro.telefono} placeholder="Telefono"  />
                                            <br/>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Propietario</h6>
                                            <input type="text" className="form-control"  name="propietario" onChange={this.cambioValor} value={registro.propietario} placeholder="propietario"  />
                                            <br/>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Tax id</h6>
                                            <input type="text" className="form-control"  name="taxid" onChange={this.cambioValor} value={registro.taxid} placeholder="tax id/ RFC"  />
                                            <br/>
                                        </div>

                                       
                                        
                                       
									   
									   <div className="row-botones"> <Link type="button" to={localListarRegistros} className="btn btn-primary" style={{width: "100px",marginRight: "5px",marginLeft:"5px",height: "40px"}}> Atras  </Link> <Link type="button"  onClick={this.EnviarDatos} className="btn btn-primary"  style={{width: "100px",marginRight: "5px",marginLeft:"5px",height: "40px"}}> Guardar  </Link> </div>
 
                                    </div>
                           
                                </div>
                           
                                </div>
                            </div>
                       

            
          );
         
    }
   
}
} 
export default CiatransportesAlta;