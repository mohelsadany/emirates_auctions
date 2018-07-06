import React, { Component } from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import "./navbar.sass";
import { FormattedMessage } from "react-intl";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enLang: window.language === "en"
    };
  }

  render() {
    return (
      <Navbar collapseOnSelect fixedTop>
        <Navbar.Header className="container-fluid">
          <Navbar.Toggle />
          <button
            className="btn btn-default sidebar__collapse-btn hidden-md hidden-lg"
            onClick={() => this.props.openSideBar()}
          >
            {!this.props.sideBarOpened ? (
              <FormattedMessage id="open" defaultMessage="Open" />
            ) : (
              <FormattedMessage id="close" defaultMessage="Close" />
            )}
          </button>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem
              eventKey={0}
              href="#"
              onClick={() => {
                this.setState(prevState => ({ enLang: !prevState.enLang }));
                window.language = this.state.enLang ? "ar" : "en";
                this.props.getAllData();
              }}
            >
              {this.state.enLang ? "العربية" : "English"}
            </NavItem>
            <NavItem eventKey={1} href="#">
              <FormattedMessage id="home" defaultMessage="Home" />
            </NavItem>
            <NavItem eventKey={2} href="#">
              <FormattedMessage id="about" defaultMessage="About" />
            </NavItem>
            <NavItem eventKey={3} href="#">
              <FormattedMessage id="faq" defaultMessage="FAQ" />
            </NavItem>
            <NavItem eventKey={4} href="#">
              <FormattedMessage id="contactus" defaultMessage="Contact Us" />
            </NavItem>
            <NavItem eventKey={5} href="#" className="navbar-nav__icon">
              <i className="fa fa-flag" />
            </NavItem>
            <NavItem eventKey={6} href="#" className="navbar-nav__icon">
              <i className="fa fa-bell" />
            </NavItem>
            <NavItem eventKey={7} href="#" className="navbar-nav__icon">
              <i className="fa fa-briefcase" />
            </NavItem>
            <NavItem
              eventKey={8}
              href="#"
              className="navbar-nav__icon navbar-nav__account"
            >
              <p>Abdelfattah</p>
              <img
                src="https://cdn.emiratesauction.com/media/9jeqvldvobggms4ko3qmdfpdqq0s12o81i3wid3o67xji1to3/t_,w_0,h_0/images.jpg"
                alt=""
                className="img-circle"
              />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;
