import React from 'react';
import {Link } from 
"react-router-dom";
import apicliente from "../../servicios/apicliente";

let localListarRegistros  = "/tags/listar";
let apiEditarRegistro     = "admin/tags/update/";
let apiShowRegistro       = "admin/tags/show/";
let apiCrearRgistro       = "admin/tags/crear"
let localEditarRegistros  = "/tags/editar/";
let localInicio           = "/";
let localRegistrar        = "/tags/alta";


class TagsAlta extends React.Component {
    
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
       
        const{categorias,desc_corta,id_producto,nombre,sku,tags,tags_originales,estatus_prods_rel}= this.state.registro;

        let raw = 
            {
                  
                
categorias : categorias,
desc_corta : desc_corta,
id_producto : id_producto,
nombre : nombre,
sku : sku,
tags : tags,
tags_originales : tags_originales,


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
	   
	   
        if(this.state.idRegistro > 0)
        {
        const resultOk = await apicliente.apifetch(apiShowRegistro+this.props.match.params.id,"POST",{},true);
        
		if(resultOk===1){
            alert("error al cargar registro"); 
        }
		
        this.setState({leyendaTitulo:"Editando Tags", datosCargados:true,registro:JSON.parse(resultOk) })
        }
        else
        {
            this.setState({leyendaTitulo:"Agregando Tags", datosCargados:true})

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
			<h2>{this.state.leyendaTitulo}</h2>
                                
                                <div className="row register-form">
                                    <div style={{paddingLeft:"3%"}} className="col-md-12">
									  
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Categorias</h6>
                                            <input type="text" className="form-control"  name="categorias" onChange={this.cambioValor} value={registro.categorias} placeholder="Categorias"  />
                                            <br/>
                                        </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Descripcion Corta</h6>
                                            <input type="text" className="form-control"  name="desc_corta" onChange={this.cambioValor} value={registro.desc_corta} placeholder="Descripcion Corta"  />
                                            <br/>
                                        </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>ID Tienda</h6>
                                            <input type="text" className="form-control"  name="id_producto" onChange={this.cambioValor} value={registro.id_producto} placeholder="ID Tienda"  />
                                            <br/>
                                        </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>NOMBRE</h6>
                                            <input type="text" className="form-control"  name="nombre" onChange={this.cambioValor} value={registro.nombre} placeholder="NOMBRE"  />
                                            <br/>
                                        </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>SKU</h6>
                                            <input type="text" className="form-control"  name="sku" onChange={this.cambioValor} value={registro.sku} placeholder="SKU"  />
                                            <br/>
                                        </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Tags BBW</h6>
                                            <input type="text" className="form-control"  name="tags" onChange={this.cambioValor} value={registro.tags} placeholder="Tags BBW"  />
                                            <br/>
                                        </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Tags Originales</h6>
                                            <input type="text" className="form-control"  name="tags_originales" onChange={this.cambioValor} value={registro.tags_originales} placeholder="Tags Originales"  />
                                            <br/>
                                        </div>
                                        
                                       
									   
									   <div className="row-botones"> <Link type="button" to={localListarRegistros} className="btn btn-primary"  style={{margin:"4px"}}> Atras  </Link> <Link type="button"  onClick={this.EnviarDatos} className="btn btn-primary"  style={{margin:"4px"}}> Guardar  </Link> </div>
 
                                    </div>
                           
                                </div>
                           
                                </div>
                            </div>
                       

            
          );
         
    }
   
}
} 
export default TagsAlta;