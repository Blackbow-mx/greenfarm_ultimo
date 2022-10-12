import React from 'react'
import PDF, { Text, AddPage, Line, Table, Html   } from "jspdf-react"

function AvisoImportacionyRetorno() {


  const properties = { header: 'Acme' }
    const head = [["ID", "Name", "Country"]]
    const body = [
        [1, "Shaw", "Tanzania"],
        [2, "Nelson", "Kazakhstan"],
        [3, "Garcia", "Madagascar"],
    ]
    const body_tipo = [
        ["Importacion ()","Exportacion ()","Retorno ()","Numero de folio:___________ "],
    ]
    const head_fecha = [["Fecha de ingreso,salida o retorno", "Fecha de vencimiento"]]
    const body_fecha = [
        [ "DD /MM /AA", "DD /MM /AA"],
        
    ]

    const head_propietario = [["Datos del propietario "]]
    const body_propietario = [
        [ "Nombre completo", "Denominacion o razon social"],
        [ "Domicilio", "Numero de identificacion fiscal o Tax Id Number"],
        [ "Telefono", "Correo electronico"],
        
    ]
    const head_persona = [["Datos de la persona que importa exporta o retorna los envases "]]
    const body_persona = [
        [ "Nombre completo", "Denominacion o razon social"],
        [ "Domicilio", "Numero de identificacion fiscal o Tax Id Number"],
        [ "Telefono", "Correo electronico"],
    ]

    const head_transportista = [["Datos del transportista y/o quien realiza el tramite"]]
    const body_transportista = [
        [ "Nombre completo", "Denominacion o razon social"],
        [ "Domicilio", "Numero de identificacion fiscal o Tax Id Number"],
        [ "Telefono", "Correo electronico"],
    ]

    const head_envases = [["Datos de los envases "]]
    const body_envases = [
        [ "Cantidad de envases ", "Descripcion","Valor unitario"],
        [ "Firma", "___________________"],
        
    ]

    const head_aduana = [["Validacion de aviso de importacion exportacion o retorno "]]
    const body_aduana = [
        [ "Fecha ", "Aduana/Seccion aduanera","Clave "],
        [ "", "","1    9     0"],
        [ "Nombre ", "No.gafete de empleado","sello de aduana|"],
        [ "", "",""],
        [ "Firma", ""],
        
    ]


    const head_aduana2 = [["Validacion de aviso de importacion exportacion o retorno "]]
    const body_aduana2 = [
        [ "Fecha ", "Aduana/Seccion aduanera","Clave "],
        [ "", "","1    9     0"],
        [ "Nombre ", "No.gafete de empleado","sello de aduana|"],
        [ "", "",""],
        [ "Firma", ""],
        
    ]

    const head_certificacion = [["Certificacion: "]]
    const body_certificacion  = [
        [ "Datos y observaciones relacionadas con la certificacion  ", "Numero de folio"],
        [ "", "",""],
        
        
    ]
     

  return (
    <div className="App">
    
      <React.Fragment>
        <PDF
          properties={properties}
          preview={true}
        >
         <Text x={10} y={10} size={10}>Logo SAT </Text>
          <Text x={30} y={25} size={10}>Avíso de importación o exportación temporal y retorno de envases </Text>
          <Text x={170} y={10} size={10}>Logo SAT </Text>
          <Line x1={32} y1={27} x2={150} y2={27}/>
          <Table  body={body_tipo}/>
          <Table style={{fontSize:"2px"}} head={head_fecha} body={ body_fecha}/>
          <Table  head={head_propietario} body={ body_propietario}/>
          <Table  head={head_persona} body={ body_persona}/>
          <Table  head={head_transportista} body={ body_transportista}/>
          <Table  head={head_envases} body={ body_envases}/>
          <Table  head={head_aduana} body={ body_aduana}/>
          <Table  head={head_certificacion} body={ body_certificacion}/>
          <Table head={head_aduana2} body={ body_aduana2}/>
         

          
         
         
          
          
          
        </PDF>
        
      </React.Fragment>
    </div>
  );
}

export default AvisoImportacionyRetorno;