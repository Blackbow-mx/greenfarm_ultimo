import React from 'react';
import {Link } from 
"react-router-dom";
import apicliente from "../../servicios/apicliente";

let localListarRegistros  = "/ranchs/listar";
let apiEditarRegistro     = "admin/ranchs/update/";
let apiShowRegistro       = "admin/ranchs/show/";
let apiCrearRgistro       = "admin/ranchs/crear"
let localEditarRegistros  = "/ranchs/editar/";
let localInicio           = "/";
let localRegistrar        = "/ranchs/alta";


class RanchsAlta extends React.Component {
    
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
        const{ciudad,pais,correo,descripcion,domicilio,nombre,telefono, taxid,propietario,estado,cp}= this.state.registro;

      

       if(this.state.idRegistro > 0)
       {
        const resultOk = await apicliente.apifetch(apiEditarRegistro+this.props.match.params.id,"POST",JSON.stringify( {
                  
                
            correo : correo,
            descripcion : descripcion,
            domicilio : domicilio,
            nombre : nombre,
            telefono : telefono,
            propietario:propietario,
            taxid: taxid,
            estado:estado,
            cp:cp,
            ciudad:ciudad,
            pais:pais,
            
                         }),true);
		  
		        
    }else{
        const resultOk = await apicliente.apifetch(apiCrearRgistro,"POST",JSON.stringify( {
                  
                
            correo : correo,
            descripcion : descripcion,
            domicilio : domicilio,
            nombre : nombre,
            telefono : telefono,
            propietario:propietario,
            taxid: taxid,
            estado:estado,
            cp:cp,
            ciudad:ciudad,
            pais:pais,
            
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
		
        this.setState({leyendaTitulo:"Editando Clientes", datosCargados:true,registro:JSON.parse(resultOk) })
        }
        else
        {
            this.setState({leyendaTitulo:"Agregando Clientes", datosCargados:true})

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
			<h2> {this.state.leyendaTitulo} </h2>
                                
                                <div className="row register-form">
                                    <div style={{paddingLeft:"3%"}} className="col-md-12">
									  
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Correo</h6>
                                            <input type="text" className="form-control"  name="correo" onChange={this.cambioValor} value={registro.correo} placeholder="Correo"  />
                                            <br/>
                                        </div>
                                        
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Descripcion</h6>
                                            <input type="text" className="form-control"  name="descripcion" onChange={this.cambioValor} value={registro.descripcion} placeholder="Descripcion"  />
                                            <br/>
                                        </div>

                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Tax id</h6>
                                            <input type="text" className="form-control"  name="taxid" onChange={this.cambioValor} value={registro.taxid} placeholder="Tax id "  />
                                            <br/>
                                        </div>

<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Domicilio Completo</h6>
                                            <input type="text" className="form-control"  name="domicilio" onChange={this.cambioValor} value={registro.domicilio} placeholder="Domicilio Completo"  />
                                            <br/>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Estado</h6>
                                            <input type="text" className="form-control"  name="estado" onChange={this.cambioValor} value={registro.estado} placeholder="Estado"  />
                                            <br/>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Ciudad</h6>
                                            <input type="text" className="form-control"  name="ciudad" onChange={this.cambioValor} value={registro.ciudad} placeholder="Ciudad"  />
                                            <br/>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Pais</h6>
                                            <input type="text" className="form-control"  name="pais" onChange={this.cambioValor} value={registro.pais} placeholder="Pais"  />
                                            <br/>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>cp</h6>
                                            <input type="text" className="form-control"  name="cp" onChange={this.cambioValor} value={registro.cp} placeholder="Codigo postal"  />
                                            <br/>
                                        </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Nombre</h6>
                                            <input type="text" className="form-control"  name="nombre" onChange={this.cambioValor} value={registro.nombre} placeholder="Nombre"  />
                                            <br/>
                                        </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Teléfono</h6>
                                            <input type="text" className="form-control"  name="telefono" onChange={this.cambioValor} value={registro.telefono} placeholder="Teléfono"  />
                                            <br/>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Propietario</h6>
                                            <input type="text" className="form-control"  name="propietario" onChange={this.cambioValor} value={registro.propietario} placeholder="propietario"  />
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
export default RanchsAlta;