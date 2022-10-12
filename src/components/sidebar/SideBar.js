import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faCar,
  faPlus,
  faPlusCircle,
  faAtom,
  faArrowAltCircleLeft,
  faAd,
  faArrowLeft,
  faArrowRight,
  faRulerHorizontal,
  faList
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import TokenJwt from "../../servicios/TokenJwt";
import GreenFarmL from "../../GreenFarmL.jpg"

const SideBar = ({ isOpen, toggle }) => {

  const [menu,setMenu] = useState([]);

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `Aplicacion`;
    getMenu(setMenu);
  },[]);

  
  const getMenu = async (funcion) =>
  {
    
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    if(1==1){
        let tk=TokenJwt.obtenerjwtoken();
       
        
    myHeaders.append("Authorization", "Bearer "+tk);
    
    } 
   
    let requestOptions = {
        method: "POST",
        body:"",
        headers: myHeaders,
        redirect: 'follow',
        
  
      };   
      try{
    const url = "https://green-api.gendapro.com/admin/menu/show";
    const  tresponse =  await fetch(url,requestOptions); 
    const [tmp] = await tresponse.json();
     // console.log(tmp);
      funcion(tmp);
      return (tmp); 
     
  
  

}catch(e){
  alert("Error del servidor contacta al provedor de servicio");
  
}
  }



 // console.log("menu= "+menu.subModulos);

  if(menu.subModulos === undefined)
    return null;

  return (
  <div  className={classNames("sidebar",{ "is-open": !isOpen } )} >
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <div className='LogoClienteSidebar' ><img style={{marginLeft:"auto",marginRigth:"auto"}} src={GreenFarmL } />  </div>
      
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
      <h5>innovaciones agricolas</h5>
      <h3> Green Farm </h3>
        
       {menu.subModulos.map((item)=> {

          return (<>

          <SubMenu key={item.leyendalink} title={item.leyendalink}  icon={faList}   items={item.acciones} /></>)

        }

        )}
        
      
      </Nav>
     
    </div>
  </div>

)};



export default SideBar;
