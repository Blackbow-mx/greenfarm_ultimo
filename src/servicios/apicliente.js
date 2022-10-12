import TokenJwt from "./TokenJwt";
import React from "react";



const apicliente = {
  
  
  
 api:"https://green-api.gendapro.com/",
 

 
 apifetch: async (endpoint,metodo,payload,conjwt) => {

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    if(conjwt){
        let tk=TokenJwt.obtenerjwtoken();
        
        
    myHeaders.append("Authorization", "Bearer "+tk);
    
    } 
    let requestOptions = {
        method: metodo,
        body:payload,
        headers: myHeaders,
        redirect: 'follow',
        

      };
  try{  
 const response = await fetch("https://green-api.gendapro.com/"+endpoint, requestOptions);
 
 
  if (!response.ok){
  
  //throw new Error("WARN", response.status);
  }
    const data = await response.text();
    return data;
}catch(e){
  let resultado = {"error":1};
 
  return resultado.error;

}

      
      
    

}


    
   

}


export default apicliente;
