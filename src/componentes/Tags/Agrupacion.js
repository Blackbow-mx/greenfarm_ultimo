import{Link} from "react-router-dom";
import apicliente from "../../servicios/apicliente";

import { MDBDataTableV5 } from 'mdbreact';
import React from "react"
class Agrupaciones extends React.Component {
    constructor(props) {
        super(props);
    }
    
    state = {  
        datosCargados: false,
        columns:[],
        registros:[],
        productos:[],
        idtagsOptions:[],
         idtagsCargado:false,
        form:{
				
           ntags:"",
           ubicacion:"",
        
                           
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
     enviarProductos = async (e) => {



        //console.log(JSON.stringify(e.target));
       // console.log("boton: " + e.target.id);
    
      
          const resultOk = await apicliente.apifetch( "admin/tags/set-prods-e/"+this.props.match.params.id,"POST",JSON.stringify({productos: this.state.productos}),true);
          
          this.props.history.push("/tags/listar");
    
    }
    
    cargarRegistro= async ()=>{
        const{ntags,ubicacion} = this.state.form;
  

        const resultOk = await apicliente.apifetch("admin/tags/get-prods-e/"+this.props.match.params.id,"POST",JSON.stringify({ntags:ubicacion}),true);
     
       
        let resultados= JSON.parse(resultOk);
 
        if(resultOk===1|| resultOk.error===true ){
            alert("Error del servidor contacta al provedor de servicio");
           }else if (resultados.resultados==null) {
            alert("Error no hay coincidencias");
           }
           else{
           
            this.setState({datosCargados:true,registros:resultados});

           }
           
    
    
              
           
    
               
                
            
          // console.log(resultOk);
        
        }
       
        componentDidMount(){
    
	 
	    
            
                  
                  
               }

    render() { 
      
       
        if(!this.state.datosCargados){
            return (
                <div>
                    
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingBottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%",marginTop:"7%"}}>Ubicacion</h6>
            <select onChange={this.cambioValor}  className="form-control" type="text" name="ubicacion" value={this.state.form.ubicacion}>
            <option selected="true" >seleccione la ubicacion </option>
           
                                             <option value="1">1</option>
                                             <option value="2">2</option>
                                             <option value="3">3</option>
                                             <option value="4">4</option>
                                             <option value="5">5</option>
                                             
                                            
                                            
                                            
                        
                                            </select> 
                                        <br/>
                                     </div> 
                    <button className=" btn btn-primary " type='button' onClick={this.cargarRegistro} style={{width: "100px",marginRight: "5px",marginLeft:"5px",height: "40px"}} >
			Buscar 
			</button>
            <Link className=" btn btn-primary " type='button' to={"/tags/listar"}  style={{width: "100px",marginRight: "5px",marginLeft:"5px",height: "40px"}} >
			Atras 
			</Link>
            <button style={{marginLeft:"75%", marginTop:"5%", marginBottom:"5%"}} onClick={this.enviarProductos}> Enviar datos </button>
            
                </div>
            )
        
        }else{
            
        return ( 
            <>
          <div>
		  <h3>
                  Relaciones
              </h3>
              <h2>Registrando el producto  {this.state.registros.desc}</h2>
			<div className="pd-ltr-20 xs-pd-20-10">
			<div className="min-height-200px">
			
				    
                <div className="page-header">
					<div className="row_listar_buscar_agregar">
                        

	  <div className="row row-cols-4 d-lg-flex align-items-lg-center" style={{marginleft: "0px",marginRight: "0px",width: "100%",minHeight: "100px",maxHeight: "700px"}}>

      
 
      <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{paddingBottom: "12px",height: "auto"}}>
            <h6 style={{marginbottom: "0px",width: "100%",marginTop:"7%"}}>Ubicacion</h6>
            <select onChange={this.cambioValor}  className="form-control" type="text" name="ubicacion" value={this.state.form.ubicacion}>
            <option selected="true" >seleccione la ubicacion </option>
           
                                             <option value="1">1</option>
                                             <option value="2">2</option>
                                             <option value="3">3</option>
                                             <option value="4">4</option>
                                             <option value="5">5</option>
                                             
                                            
                                            
                                            
                        
                                            </select> 
                                        <br/>
                                     </div> 
                    <button className=" btn btn-primary " type='button' onClick={this.cargarRegistro} style={{width: "100px",marginRight: "5px",marginLeft:"5px",height: "40px"}} >
			Buscar 
			</button>
            <Link className=" btn btn-primary " type='button' to={"/tags/listar"}  style={{width: "100px",marginRight: "5px",marginLeft:"5px",height: "40px"}} >
			Atras 
			</Link>
           
      
       
		



	  </div>


				
						
					</div>
				</div>  
				
					</div>
				


			 <div style={{marginRigth:"auto",marginLeft:"auto", width: "95%",paddingTop: "2%", paddingLeft:"2%",paddingRight: "2%",paddingLeft:"2%"}} className="pd-20 bg-white border-radius-4 box-shadow mb-30">
	
            
               
                {
                this.state.registros.resultados.map(
                 
                    (row)=>(
                    <tr key={row.id}>
                     <td><input type="checkbox" value={row.id_producto} className="id_producto" onChange={(e) => {
                         if( e.target.checked) {
                           // const checkboxes = Object.assign({},this.state.productos, {});
                            this.state.productos.push(e.target.value);
                           // this.setState({productos:checkboxes});
                            console.log(this.state.productos);
                           // for (let key in checkboxes) {
                             // checkboxes[key] = false;
                          //  }

                         }else{
                            var index = this.state.productos.indexOf(e.target.value);
                            if (index > -1) {
                                this.state.productos.splice(index, 1);
                                
                             }
                         }
                         }}/></td>
                    <td>{row.id_producto}</td>
                    <td>{row.nombre}</td>
                    <td>{row.tags}</td>
                  
                   
                    
                    <td>
                        
                    </td>
                   
                </tr>
               
            



                    )
                   
                )
                
                
                   
               } 
              
                            
                                  

                            
				</div>
				
                <button style={{marginLeft:"75%", marginTop:"5%", marginBottom:"5%"}} onClick={this.enviarProductos}> Enviar datos </button>
				
				</div>
				</div>             
                      

             
         </>       
               );
 
                        }
                }   }
                          
export default Agrupaciones;