import React from "react";
import Logo_sat from "../src/sat_logo2.png";
import logo_shcp from "../src/logoshcp.png";
class Archivo  extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }

   saveTextAsFile = ()=>
        {
            var textToWrite = document.getElementById('textArea').innerHTML;
            var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
            var fileNameToSaveAs = "ecc.plist";
        
            var downloadLink = document.createElement("a");
            downloadLink.download = fileNameToSaveAs;
            downloadLink.innerHTML = "Download File";
            if (window.webkitURL != null)
            {
                // Chrome allows the link to be clicked
                // without actually adding it to the DOM.
                downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
            }
            else
            {
                // Firefox requires the link to be added to the DOM
                // before it can be clicked.
                downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
                //downloadLink.onclick = destroyClickedElement;
                downloadLink.style.display = "none";
                document.body.appendChild(downloadLink);
            }
        
            downloadLink.click();
        }
      
        
    render() { 
     

        return (
          <>
   
        <div id="textArea">
            <meta httpEquiv="content-type" content="text/html; charset=windows-1252" />
            <title />
            <meta name="generator" content="LibreOffice 7.2.1.2 (Windows)" />
            <meta name="author" content="Gerencia de empaque" />
            <meta name="created" content="2021-03-27T16:21:23" />
            <meta name="changedby" content="Gerencia de empaque" />
            <meta name="changed" content="2021-12-10T00:52:55" />
            <meta name="AppVersion" content="16.0300" />
            <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t\tbody,div,table,thead,tbody,tfoot,tr,th,td,p { font-family:\"Calibri\"; font-size:x-small }\n\t\ta.comment-indicator:hover + comment { background:#ffd; position:absolute; display:block; border:1px solid black; padding:0.5em;  } \n\t\ta.comment-indicator { background:red; display:inline-block; border:1px solid black; width:0.5em; height:0.5em;  } \n\t\tcomment { display:none;  } \n\t" }} />
            <table  cellSpacing={0} border={1} align="left">
              <colgroup width={79} span={8} />
              <tbody><tr>
                  <td valign="bottom" height={20} align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td valign="bottom" height={20} align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td valign="bottom" height={20} align="left"><font color="#000000"><br /></font></td>
                  <td colSpan={6} valign="bottom" align="center"><font face="Arial" color="#000000">Aviso de importación o exportación temporal y </font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td valign="bottom" height={20} align="left"><font color="#000000"><br /></font></td>
                  <td colSpan={6} valign="bottom" align="center"><font face="Arial" color="#000000">retorno de envases</font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td valign="bottom" height={20} align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="left"><b><font color="#000000">IMPORTACION</font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="middle" align="center"><b><font color="#000000">(     )</font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="left"><b><font color="#000000">EXPORTACION</font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="middle" align="center"><b><font color="#000000">(     )</font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="center"><b><font color="#000000">RETORNO</font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="middle" align="center"><b><font color="#000000">( X )</font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="center"><b><font color="#000000">No. Folio:</font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} sdval={19020645} sdnum="2058;" valign="bottom" align="left"><b><font color="#000000">19020645</font></b></td>
                </tr>
                <tr>
                  <td valign="middle" height={7} align="center"><b><font color="#000000"><br /></font></b></td>
                  <td valign="middle" align="center"><b><font color="#000000"><br /></font></b></td>
                  <td valign="middle" align="center"><b><font color="#000000"><br /></font></b></td>
                  <td valign="middle" align="center"><b><font color="#000000"><br /></font></b></td>
                  <td valign="middle" align="center"><b><font color="#000000"><br /></font></b></td>
                  <td valign="middle" align="center"><b><font color="#000000"><br /></font></b></td>
                  <td valign="middle" align="center"><b><font color="#000000"><br /></font></b></td>
                  <td valign="bottom" align="left"><b><font color="#000000"><br /></font></b></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="left"><b><font color="#000000">FECHA DE INGRESO, SALIDA O DE RETORNO</font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><b><font color="#000000"><br /></font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><b><font color="#000000"><br /></font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="middle" align="center"><b><font color="#000000"><br /></font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="left"><b><font color="#000000">FECHA DE VENCIMIENTO</font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><b><font color="#000000"><br /></font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><b><font color="#000000"><br /></font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><b><font color="#000000"><br /></font></b></td>
                </tr>
                <tr>
                  <td style={{"border-left":"1px solid #000000"}} valign="middle" height={20} align="left"><font color="#000000">(DD/MM/AA):</font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} colSpan={2} rowSpan={2} sdval={44539} sdnum="2058;0;DD/MM/AAAA" valign="middle" align="center"><b><font color="#000000">09/12/2021</font></b></td>
                  <td style={{"border-left":"1px solid #000000"}} valign="middle" align="left"><font color="#000000">(DD/MM/AA):</font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} colSpan={2} rowSpan={2} sdval={44679} sdnum="2058;0;DD/MM/AAAA" valign="middle" align="center"><b><font color="#000000">28/04/2022</font></b></td>
                </tr>
                <tr>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td valign="middle" height={7} align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="left"><b><font color="#000000">1. DATOS DEL PROPIETARIO:</font></b></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000","border-right":"1px solid #000000"}} colSpan={4} valign="middle" height={20} align="center"><font color="#000000">Nombre Completo (apellido paterno/apellido materno/nombre[s]): </font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="left"><font size={1} color="#000000">Denominacion o razon social:</font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="bottom" height={20} align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="middle" align="left"><font color="#000000">GREG EMI</font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="middle" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="middle" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="middle" align="left"><font color="#000000">RAINFIELD RANCHES LP</font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-left":"1px solid #000000"}} valign="middle" height={20} align="center"><font color="#000000">Domicilio: </font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-right":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-left":"1px solid #000000"}} valign="middle" align="left"><font color="#000000">Numero de identificacion fiscal o Tax ID Number:</font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="left"><font color="#000000">2555 Chambers Street, Vernon, CA 90058, USA</font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} colSpan={3} valign="middle" align="center"><font color="#000000">ID-47-217238200</font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="center"><font color="#000000">Telefono:</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="left"><font color="#000000">(323) 825 2828</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="left"><font color="#000000">Correo Electronico:    bella@greenonionfarm.com</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td valign="middle" height={7} align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="left"><b><font color="#000000">2. DATOS DE LA PERSONA QUE IMPORTA, EXPORTA O RETORNA LOS ENVASES:</font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000","border-right":"1px solid #000000"}} colSpan={4} valign="middle" height={20} align="center"><font color="#000000">Nombre Completo (apellido paterno/apellido materno/nombre[s]): </font></td>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="left"><font size={1} color="#000000">Denominacion o razon social:</font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000","border-right":"1px solid #000000"}} colSpan={4} valign="middle" height={20} align="left"><font color="#000000">LOPEZ PALOMARES JOSE ANGEL</font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000","border-right":"1px solid #000000"}} colSpan={4} valign="middle" align="center"><font color="#000000">INNOVACIONES AGRICOLAS GREEN FARM S. de R.L. de C.V.</font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="center"><font color="#000000">Domicilio: </font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="left"><font color="#000000">Carretera de Colonia Madero a</font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="left"><font color="#000000">Numero de identificacion fiscal o Tax ID Number:</font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000","border-right":"1px solid #000000"}} colSpan={4} valign="middle" height={39} align="center"><font color="#000000">Colonia Agricola Benito Juarez,  Lote 34 Colonia Madero, CP 21723, Mexicali, Baja California, MEX</font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} colSpan={3} valign="middle" align="center"><font color="#000000">IAG160808RE5</font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="center"><font color="#000000">Telefono:</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="left"><font color="#000000">(686) 113 9590</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="left"><font color="#000000">Correo Electronico:    josel@greenonionfarm.com</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td valign="middle" height={7} align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="left"><b><font color="#000000">3. DATOS DEL TRANSPORTISTA Y/O DE QUIEN REALIZA EL TRAMITE:</font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000","border-right":"1px solid #000000"}} colSpan={4} valign="middle" height={20} align="center"><font size={1} color="#000000">Nombre Completo (apellido paterno/apellido materno/nombre[s]):</font></td>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="left"><font size={1} color="#000000">Denominacion o razon social:</font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000","border-right":"1px solid #000000"}} colSpan={4} valign="middle" height={20} align="center"><font color="#000000">JAVIER ROBLES ZAVALA</font></td>
                  <td style={{"border-left":"1px solid #000000","border-right":"1px solid #000000"}} colSpan={4} valign="middle" align="center"><font color="#000000">Transportes JR</font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="center"><font color="#000000">Domicilio: </font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} colSpan={3} valign="middle" align="center"><font color="#000000">Calle 4ta. # 629, CD Guadalupe Victoria</font></td>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="left"><font color="#000000">Numero de identificacion fiscal o Tax ID Number:</font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-left":"1px solid #000000","border-right":"1px solid #000000"}} colSpan={4} valign="middle" height={20} align="center"><font color="#000000">KM 43, Mexicali, Baja California</font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000","border-right":"1px solid #000000"}} colSpan={4} rowSpan={2} valign="middle" align="center"><font size={3} color="#000000">ROZJ600820-1K3</font></td>
                </tr>
                <tr>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000","border-right":"1px solid #000000"}} colSpan={4} valign="middle" height={20} align="center"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="center"><font color="#000000">Telefono:</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="left"><font color="#000000">658 516 2851</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="left"><font color="#000000">Correo Electronico: </font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="right"><u><font color="#0563C1"><a href="mailto:jrtransportes55@hotmail.com">jrtransportes55@hotmail.com</a></font></u></td>
                </tr>
                <tr>
                  <td valign="middle" height={7} align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="left"><b><font color="#000000">4. DATOS DE LOS ENVASES:</font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="left"><font color="#000000">Cantidad de envases:</font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} rowSpan={2} sdval={196} sdnum="2058;" valign="middle" align="center"><b><font size={4} color="#000000">196</font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="left"><font color="#000000">Descripcion:</font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="left"><font color="#000000">Valor unitario:</font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000","border-right":"1px solid #000000"}} colSpan={3} valign="middle" align="center"><b><font size={1} color="#000000">Small Cardboard Box/Caja Carton Chica</font></b></td>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000","border-right":"1px solid #000000"}} colSpan={2} sdval="1.165" sdnum="2058;0;_-&quot;$&quot;* #,##0.000_-;-&quot;$&quot;* #,##0.000_-;_-&quot;$&quot;* &quot;-&quot;??_-;_-@_-" valign="middle" align="center"><b><font color="#000000"> $1.165 </font></b></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="center"><font color="#000000">FIRMA:</font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="left"><font color="#000000">Jose Angel Lopez Palomares</font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-left":"1px solid #000000"}} valign="middle" height={20} align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td valign="middle" height={7} align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="left"><b><font color="#000000">5. VALIDACION DEL AVISO DE IMPORTACION, EXPORTACION O RETORNO:</font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="left"><font color="#000000">FECHA:</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} sdval={44539} sdnum="2058;0;DD/MM/AAAA" valign="bottom" align="right"><b><font color="#000000">09/12/2021</font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="middle" align="right"><font color="#000000">Aduana/Seccion Aduanera:</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="center"><font color="#000000">Clave:</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="center"><font color="#000000">(DD/MM/AA):</font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} valign="middle" align="right"><font color="#000000">Mexicali, Baja California</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000","border-right":"1px solid #000000"}} sdval={1} sdnum="2058;" valign="middle" align="left"><font color="#000000">1</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000","border-right":"1px solid #000000"}} sdval={9} sdnum="2058;" valign="middle" align="left"><font color="#000000">9</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000","border-right":"1px solid #000000"}} sdval={0} sdnum="2058;" valign="bottom" align="left"><font color="#000000">0</font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="center"><font color="#000000">Nombre:</font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="left"><font color="#000000">No. De gafete del empleado:</font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="bottom" height={20} align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-left":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-left":"1px solid #000000"}} valign="middle" height={20} align="center"><font color="#000000">FIRMA:</font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-left":"1px solid #000000","border-right":"1px solid #000000"}} colSpan={3} valign="bottom" align="center"><font color="#000000">Sello</font></td>
                </tr>
                <tr>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="bottom" height={20} align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000","border-right":"1px solid #000000"}} colSpan={3} valign="bottom" align="center"><font color="#000000">Aduana/Seccion Aduanera</font></td>
                </tr>
                <tr>
                  <td valign="bottom" height={7} align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="left"><b><font color="#000000">6.RECTIFICACION:</font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="left"><font color="#000000">No. De folio:</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="bottom" height={20} align="left"><font size={1} color="#000000">Datos y observaciones relacionadoas con la rectificacion:</font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td valign="bottom" height={7} align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="left"><b><font color="#000000">7. ADUANA O SECCION ADUANERA QUE INTERVIENE EN LA RECTIFICACION:</font></b></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="left"><font color="#000000">FECHA:</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="middle" align="right"><font color="#000000">Aduana/Seccion Aduanera:</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="center"><font color="#000000">Clave:</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="center"><font color="#000000">(DD/MM/AA):</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} valign="middle" align="right"><font color="#000000">Mexicali, Baja California</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000","border-right":"1px solid #000000"}} sdval={1} sdnum="2058;" valign="middle" align="left"><font color="#000000">1</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000","border-right":"1px solid #000000"}} sdval={9} sdnum="2058;" valign="middle" align="left"><font color="#000000">9</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000","border-right":"1px solid #000000"}} sdval={0} sdnum="2058;" valign="bottom" align="left"><font color="#000000">0</font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="center"><font color="#000000">Nombre:</font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="left"><font color="#000000">No. De gafete del empleado:</font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="middle" align="center"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="bottom" height={20} align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-bottom":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-left":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                  <td style={{"border-top":"1px solid #000000","border-left":"1px solid #000000"}} valign="middle" height={20} align="center"><font color="#000000">FIRMA:</font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-top":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-left":"1px solid #000000","border-right":"1px solid #000000"}} colSpan={3} valign="bottom" align="center"><font color="#000000">Sello</font></td>
                </tr>
                <tr>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000"}} valign="bottom" height={20} align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-right":"1px solid #000000"}} valign="bottom" align="left"><font color="#000000"><br /></font></td>
                  <td style={{"border-bottom":"1px solid #000000","border-left":"1px solid #000000","border-right":"1px solid #000000"}} colSpan={3} valign="bottom" align="center"><font color="#000000">Aduana/Seccion Aduanera</font></td>
                </tr>
              </tbody></table>
            {/* ************************************************************************** 
           <img src={logo_shcp} width={200} height={101} />
            <img src={Logo_sat} width={200} height={100} />
            */}
          </div>
          <button type="button" value="save" id="save"onClick={(event)=>this.saveTextAsFile(event)}> Save</button>
          </>
            );
    }
}
 
export default Archivo ;
