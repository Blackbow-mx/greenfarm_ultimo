import React from "react";
import apicliente from "../../servicios/apicliente";
import Carpeta from "../../Carpeta.png";
class Documentos extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  
        idRegistro:this.props.match.params.id,
    }

    descargaArchivo_distri(){
        
        window.open("https://green-api.gendapro.com/admin/exceles/generadistri/"+this.props.match.params.id);
    }
    descargaArchivo_importacion(){
        
        window.open("https://green-api.gendapro.com/admin/exceles/generaaviso/"+this.props.match.params.id);
    }
    descargaArchivo_factura(){
        
        window.open("https://green-api.gendapro.com/admin/exceles/generafactura/"+this.props.match.params.id);
    }
    descargaArchivo_insumos(){
        
        window.open("https://green-api.gendapro.com/admin/exceles/generainsumos/"+this.props.match.params.id);
    }
    importaciones(){
        
        
    }





    render() { 
        return (<>
                     
                      <div className="row" style={{ border: "1px solid #d0d0d0"}}>
     <div  onClick={()=>this.descargaArchivo_factura()} style={{ marginLeft:"25%", height: "100%",width: "100%",marginBottom:"2%"}}>
        <img  type="button" style={{ height: "20%",width: "10%", marginRight:"25%"}} src={Carpeta} />
        <br/>
        <label> Generar archivo de  factura </label>
        </div>
        <div onClick={()=>this.descargaArchivo_distri()} style={{  marginLeft:"25%", height: "100%",width: "100%"}}>
        <img  type="button"  style={{ height: "20%",width: "10%", marginRight:"25%",marginBottom:"2%"}} src={Carpeta} />
        <br/>
        <label> Generar archivo de distribucion de embarque </label>
        </div>

        <div  onClick={()=>this.importaciones()} style={{ marginLeft:"25%", height: "100%",width: "100%"}}>
        <img  type="button" style={{ height: "20%",width: "10%", marginRight:"25%",marginBottom:"2%"}} src={Carpeta} />
        <br/>
        <label> Generar archivos de  retorno </label>
        </div>
    
        <div  onClick={()=>this.descargaArchivo_insumos()} style={{ marginLeft:"25%", height: "100%",width: "100%"}}>
        <img  type="button" style={{ height: "20%",width: "10%", marginRight:"25%",marginBottom:"2%"}} src={Carpeta} />
        <br/>
        <label> Generar archivo de insumos </label>
        </div>
        

    

        
        

        



     
                   
      
        </div>
        
      
        </>
         ) }
}
 
export default Documentos;