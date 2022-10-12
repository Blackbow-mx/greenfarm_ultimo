import React from 'react';
import{Link} from "react-router-dom";
import apicliente from "./servicios/apicliente";
import App from './App';
import TokenJwt from './servicios/TokenJwt';
import { Alert } from 'bootstrap';
import GreenFarmL from "./GreenFarmL.jpg"

let localListarRegistro="/ciudades/listar";
let apiLogin = "admin/auth/login";


class Inicio extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { form:{
        username:"",
        password:""
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

   

     login2 = async (e) =>{
        e.preventDefault();
        const{password,username}= this.state.form;
        var raw = {
            username: username,
            password: password
          }

          const resultOk = await apicliente.apifetch(apiLogin,"POST",JSON.stringify(raw),false);
           let resultado= JSON.parse(resultOk)
           console.log(resultado);
          if(resultado === 1 || resultado.user===undefined ){
            alert("error de autenticación ")
           
          }else{ 
              TokenJwt.guardarjwtoken(resultado.token);
              window.location.href="/"
        
          }

           
}




    render() { 
        const{password,username}= this.state;
        
        
        return (  
        
           
            <div className="container">
                
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-12 col-xl-10">
                        <div className="card shadow-lg o-hidden border-0 my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-flex">
                                        <div className='LogoCliente' ><img style={{marginLeft:"auto",marginRigth:"auto"}} src={GreenFarmL } />  </div>
                                    </div>
                                    
                                    <div className="col-lg-6 d-xxl-flex justify-content-xxl-center">
                                        
                                        <div className="d-md-flex d-xxl-flex flex-column align-items-md-center align-items-xxl-center p-5">
                                            <h4 className="text-dark mb-4"> Bienvenido  </h4>
                                            <form className="user" ><input className="form-control" type="text" name="username" onChange={this.cambioValor} value={username}  placeholder="Correo electronico"/>
                                            <input className="form-control" type="password" name="password" onChange={this.cambioValor} value={password} placeholder="Contraseña"/>
                                            <button className="btn btn-primary d-block btn-user w-100" type="button" onClick={this.login2}  > Iniciar sesión </button>
                                                <div className="mb-3"></div>
                                                <div className="mb-3">
                                                    <div className="custom-control custom-checkbox small"></div>
                                                    
                                                </div>
                                                
                                                <hr>
                                                </hr>
                                            
                                            
                                       
                                    
                                 </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
         <script src="../assets/bootstrap/js/bootstrap.min.js"></script>
         <script src="../assets/js/bs-init.js"></script>
         <script src="../assets/js/theme.js"></script>
    
         </div>
       
                   );

}
}

export default Inicio;