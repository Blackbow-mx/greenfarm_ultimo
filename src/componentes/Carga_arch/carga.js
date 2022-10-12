import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import apicliente from "../../servicios/apicliente";

const Archivo = () => {
    const [archivos, setArchivos] = useState(null);
    const[registro,setRegistro]= useState([]);
    
    const subirArchivos = e =>{
        setArchivos(e);
        

    }
      
     const insertarArchivos = async () =>{

       
         
         for(let index=0; index < archivos.lenght; index++){
         f.append("archivo", archivos[index]);
         }
         const f= (archivos);
         alert (JSON.stringify(archivos[0]));
        const resultOk= await fetch("http://localhost/pruebas/leer.php",{
            method: 'POST',
              body: f
          
          })
            .then((response) => response.json())
            .then((json) => alert(JSON.stringify(json)));
            alert (JSON.parse(resultOk));
     }
       



    return(
        <div className="archivo">
            <br/> <br/>
            <input value={registro}  type="file" name="archivo" multiple onChange={(e)=> subirArchivos(e.target.files)}  ></input>
            <br/>
            <button  className="btn btn-primary" onClick={()=> insertarArchivos()}> Insertar archivo </button>


        </div>

    )
    
}; export default Archivo;