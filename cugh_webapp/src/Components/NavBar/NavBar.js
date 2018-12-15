import React from "react";
import { Navbar, NavbarBrand,NavbarToggler, Collapse, NavbarNav, NavItem , NavLink, Fa, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "mdbreact";
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
                <NavItem>
                    <NavLink to="/"> Search</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/">Profile</NavLink>
                </NavItem>

            </NavbarNav>
          </Collapse>
          
                  <NavbarNav right>
                  <NavItem>
                    <Dropdown>
                      <DropdownToggle nav caret>
                        <Fa icon="user" />
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-default" right>
                        <DropdownItem href="#!">username</DropdownItem>
                        <DropdownItem href="#!">Signout</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>
                </NavbarNav>

                </Navbar>
    );
  }
}

export default NavBar;