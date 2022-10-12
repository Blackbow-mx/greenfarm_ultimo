const TokenJwt = {

 

    guardarjwtoken: (token) => {
       localStorage.setItem("token",token);
       return 
   
   },
   
    obtenerjwtoken : function(){
       return localStorage.getItem("token");
       
   }
   
   
   }
export default TokenJwt