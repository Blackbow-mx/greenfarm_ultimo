import React from 'react';
import {Link } from 
"react-router-dom";
import apicliente from "../../servicios/apicliente";

let localListarRegistros  = "/cartones/listar";
let apiEditarRegistro     = "admin/cartones/update/";
let apiShowRegistro       = "admin/cartones/show/";
let apiCrearRgistro       = "admin/cartones/crear"
let localEditarRegistros  = "/cartones/editar/";
let localInicio           = "/";
let localRegistrar        = "/cartones/alta";


class CartonesAlta extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            idRegistro:this.props.match.params.id,
            leyendaTitulo: "", 
            datosCargados: false,

            registro:[],
            idproveedorOptions:[],
            idproveedorCargado:false,
			
           
                
         }
        
         
        
    }
	
	

    getOptions = async (url,referencia) =>{
     
        console.log("pidiendo colores");
        const res = await apicliente.apifetch(url,"POST","{}",true);
       // console.log(res);
         this.setState({idColorCargado:true, idColorOptions: JSON.parse(res)});
       // console.log(this................state);
    }

    getOptions_idproveedor = async (url,referencia) =>{
						 
        const res = await apicliente.apifetch(url,"POST","{}",true);
        this.setState({idproveedorCargado:true, idproveedorOptions: JSON.parse(res)});
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
        const{cant_x_pallet,descripcion,id_proveedor,descripcion_oficial,producto}= this.state.registro;

        
        

       if(this.state.idRegistro > 0)
       {
        const resultOk = await apicliente.apifetch(apiEditarRegistro+this.props.match.params.id,"POST",JSON.stringify({cant_x_pallet : cant_x_pallet,
            descripcion : descripcion,
            descripcion_oficial:descripcion_oficial,
            producto:producto,
            id_proveedor:id_proveedor}),true);
        let variable = JSON.parse(resultOk);
        if(variable.error===true|| variable===1){
            alert("error al registrar");
        }
		        
    }else{
        const resultOk = await apicliente.apifetch(apiCrearRgistro,"POST",JSON.stringify({cant_x_pallet : cant_x_pallet,
            descripcion : descripcion,
            descripcion_oficial:descripcion_oficial,
            producto:producto,
            id_proveedor:id_proveedor}),true);
		
        
    
	
	 let variable = JSON.parse(resultOk);
		 if(variable.error===true|| variable===1){
           alert("error al intentar guardar la información");
			}
        }
    //const navigateTo = () => this.history.push(localListarRegistros);//eg.history.push('/login');
    this.props.history.push( localListarRegistros);
        
    }

     async componentDidMount(){

        this.getOptions_idproveedor("admin/proveedores/search");
       // this.getOptions("admin/colores/search");
	   
	   
        if(this.state.idRegistro > 0)
        {
        const resultOk = await apicliente.apifetch(apiShowRegistro+this.props.match.params.id,"POST",{},true);
        
		if(resultOk===1){
            alert("error al cargar registro"); 
        }
		
        this.setState({leyendaTitulo:"Editando Configuracion por pallet", datosCargados:true,registro:JSON.parse(resultOk) })
        }
        else
        {
            this.setState({leyendaTitulo:"Agregando Configuracion por pallet", datosCargados:true})

        }
    }
 
    
    render() { 
        const{datosCargados, registro,idproveedorCargado}= this.state
        
        if(!datosCargados|| !idproveedorCargado )
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
            <h6 style={{marginbottom: "0px",width: "100%"}}>Producto</h6>
                                            <input type="text" className="form-control"  name="producto" onChange={this.cambioValor} value={registro.producto} placeholder="Producto"  />
                                            <br/>
                                        </div>
                                        </div>
                                        </div>
                                
                                <div className="row register-form">
                                    <div style={{paddingLeft:"3%"}} className="col-md-12">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Descripción</h6>
                                            <input type="text" className="form-control"  name="descripcion" onChange={this.cambioValor} value={registro.descripcion} placeholder="Descripción"  />
                                            <br/>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Descripción Oficial</h6>
                                            <input type="text" className="form-control"  name="descripcion_oficial" onChange={this.cambioValor} value={registro.descripcion_oficial} placeholder="Descripción oficial"  />
                                            <br/>
                                        </div>
									  
<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Cant. por Pallet</h6>
                                            <input type="text" className="form-control"  name="cant_x_pallet" onChange={this.cambioValor} value={registro.cant_x_pallet} placeholder="Cant. por Pallet"  />
                                            <br/>
                                        </div>

                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingbottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%"}}>Proveedores </h6>
                                        <select className="form-control" placeholder="Proveedores" name="id_proveedor" onChange={this.cambioValor} value={registro.id_proveedor} >
										<option value="-1">Seleccione</option>
                                        {this.state.idproveedorOptions.resultados.registros.map(
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
export default CartonesAlta;