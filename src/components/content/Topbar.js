import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faCross, faOutdent } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";


const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  const borrarjwt = () => {
    localStorage.setItem("token","");
    window.location.reload();
    window.location.href="/";
    return

}

  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md"
    >
      <Button color="info" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>

      <NavLink style={{color:"red"}} className="cerrarsesion-top" tag={Link}  onClick={borrarjwt}  >
               cerrar sesión 
            </NavLink>
      {/*<NavbarToggler onClick={toggleTopbar} />*/}

      {/*<Collapse isOpen={topbarIsOpen} navbar>
       <Nav className="ml-auto" navbar>
        <NavLink tag={Link} to={"/inicio"}  >
               cerrar sesión 
            </NavLink>
         
        </Nav>
  </Collapse>*/}
    </Navbar>
  );
};

export default Topbar;
