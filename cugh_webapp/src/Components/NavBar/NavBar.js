import React from "react";
import { Navbar, NavbarBrand,NavbarToggler, Collapse, NavbarNav, NavItem , NavLink} from "mdbreact";
import Logo from "../../Assets/CBDP-LOGO.png";
class NavBar extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (

      <Navbar color="blue" dark expand="md">
          <NavbarBrand color="white">
            <img src={Logo}  width={30}/>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleCollapse}
          />
          <Collapse
            id="navbarCollapse3"
            isOpen={this.state.isOpen}
            navbar
          >
            <NavbarNav left>
                <NavItem>
                    <NavLink to="/"> Home</NavLink>
                </NavItem>
            </NavbarNav>
          </Collapse>
          
      </Navbar>
    );
  }
}

export default NavBar;