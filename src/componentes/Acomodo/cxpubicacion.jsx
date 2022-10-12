if(parseFloat(acomodo_al.cantidad) < parseFloat(cantidad)){
                    
    alert("el numero de cartones es mayor al disponible solo se cuentan con "+ acomodo_al.cantidad +" y esta agregando "+ cantidad);

}else if( parseFloat( acomodo_cant_x_pallet_02.cant_x_pallet) < parseFloat(cantidad)){
    alert ("error la cantidad permitida por este tipo de pallet es " + acomodo_cant_x_pallet_01.cant_x_pallet + "y se esta ingresando " + cantidad);


 }else if(parseFloat(acomodo_cant_x_pallet_02.cant_x_pallet)> parseFloat(acomodo_cant_x_pallet_01.capacidad)){

        acomodo_cant_x_pallet_01.capacidad=  parseFloat(acomodo_cant_x_pallet_01.capacidad)  + parseFloat(cantidad)
        if(parseFloat(acomodo_al.cantidad)== parseFloat(cantidad)){
   

            const result = await apicliente.apifetch("admin/almacencartones2/update/"+lote,"POST",JSON.stringify({
                "cantidad":"0"
            }),true);
            if(this.state.idRegistro > 0)
            {
            
             const resultOk = await apicliente.apifetch(apiEditarRegistro+this.props.match.params.id,"POST",JSON.stringify({
                   
                 
    
                clave : clave,
                
                idenvio : idenvio,
                lote : lote,
                peso:peso,
                cantidad:cantidad,
                observaciones:observaciones,
                ubicacion : ubicacion,
                
                         }),true);
               
                     
         }else{
             
              
             const resultOk = await apicliente.apifetch(apiCrearRgistro,"POST",JSON.stringify({
                    
                  
    
                clave : clave,
                
                idenvio : idenvio,
                lote : lote,
                peso:peso,
                cantidad:cantidad,
                observaciones:observaciones,
                ubicacion : ubicacion,
                
                          }),true);
             
             
         
         
          let variable = JSON.parse(resultOk);
              if(variable.error===true|| variable===1){
                alert("error al intentar guardar la información");
                 }
             
         //const navigateTo = () => this.history.push(localListarRegistros);//eg.history.push('/login');
     //window.location = localListarRegistros;
     this.props.history.push( localListarRegistros); 
         }
     }
    
                     
                     
                     else{
                         
                     
             const result = await apicliente.apifetch("admin/almacencartones2/update/"+lote,"POST",JSON.stringify({"cantidad":(acomodo_al.cantidad-cantidad)}),true);
               
             
    
           if(this.state.idRegistro > 0)
           {
          
            
            const resultOk = await apicliente.apifetch(apiEditarRegistro+this.props.match.params.id,"POST",JSON.stringify({
                  
                
    
                clave : clave,
                
                idenvio : idenvio,
                lote : lote,
                peso:peso,
                cantidad:cantidad,
                observaciones:observaciones,
                ubicacion : ubicacion,
                
                         }),true);
              
                    
        }else{
        
             
            const resultOk = await apicliente.apifetch(apiCrearRgistro,"POST",JSON.stringify({
                   
                 
    
                clave : clave,
                
                idenvio : idenvio,
                lote : lote,
                peso:peso,
                cantidad:cantidad,
                observaciones:observaciones,
                ubicacion : ubicacion,
                
                          }),true);
            
            
        
        
         let variable = JSON.parse(resultOk);
             if(variable.error===true|| variable===1){
               alert("error al intentar guardar la información");
                }
            }
        //const navigateTo = () => this.history.push(localListarRegistros);//eg.history.push('/login');
    //window.location = localListarRegistros;
    this.props.history.push( localListarRegistros); 
        }

   
   
    }else if(parseFloat(acomodo_cant_x_pallet_02.cant_x_pallet)== parseFloat(acomodo_cant_x_pallet_01.capacidad)){
        alert("pallet lleno "+acomodo_cant_x_pallet_02.cant_x_pallet + "es igual a "+ acomodo_cant_x_pallet_01.capacidad)
        if(parseFloat(acomodo_al.cantidad)== parseFloat(cantidad)){
   

            const result = await apicliente.apifetch("admin/almacencartones2/update/"+lote,"POST",JSON.stringify({
                "cantidad":"0"
            }),true);
            if(this.state.idRegistro > 0)
            {
            
             const resultOk = await apicliente.apifetch(apiEditarRegistro+this.props.match.params.id,"POST",JSON.stringify({
                   
                 
    
                clave : clave,
                
                idenvio : idenvio,
                lote : lote,
                peso:peso,
                cantidad:cantidad,
                observaciones:observaciones,
                ubicacion : ubicacion,
                
                         }),true);
               
                     
         }else{
             
              
             const resultOk = await apicliente.apifetch(apiCrearRgistro,"POST",JSON.stringify({
                    
                  
    
                clave : clave,
                
                idenvio : idenvio,
                lote : lote,
                peso:peso,
                cantidad:cantidad,
                observaciones:observaciones,
                ubicacion : ubicacion,
                
                          }),true);
             
             
         
         
          let variable = JSON.parse(resultOk);
              if(variable.error===true|| variable===1){
                alert("error al intentar guardar la información");
                 }
             
         //const navigateTo = () => this.history.push(localListarRegistros);//eg.history.push('/login');
     //window.location = localListarRegistros;
     this.props.history.push( localListarRegistros); 
         }
     }
    
                     
                     
                     else{
                         
                     
             const result = await apicliente.apifetch("admin/almacencartones2/update/"+lote,"POST",JSON.stringify({"cantidad":(acomodo_al.cantidad-cantidad)}),true);
               
             
    
           if(this.state.idRegistro > 0)
           {
          
            
            const resultOk = await apicliente.apifetch(apiEditarRegistro+this.props.match.params.id,"POST",JSON.stringify({
                  
                
    
                clave : clave,
                
                idenvio : idenvio,
                lote : lote,
                peso:peso,
                cantidad:cantidad,
                observaciones:observaciones,
                ubicacion : ubicacion,
                
                         }),true);
              
                    
        }else{
        
             
            const resultOk = await apicliente.apifetch(apiCrearRgistro,"POST",JSON.stringify({
                   
                 
    
                clave : clave,
                
                idenvio : idenvio,
                lote : lote,
                peso:peso,
                cantidad:cantidad,
                observaciones:observaciones,
                ubicacion : ubicacion,
                
                          }),true);
            
            
        
        
         let variable = JSON.parse(resultOk);
             if(variable.error===true|| variable===1){
               alert("error al intentar guardar la información");
                }
            }
        //const navigateTo = () => this.history.push(localListarRegistros);//eg.history.push('/login');
    //window.location = localListarRegistros;
    this.props.history.push( localListarRegistros); 
        }

 }
 

 
 
