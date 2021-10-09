import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import Logo from '../images/logo.svg';

class Navbar extends Component {
  state = {
    isOpen: false
  };

  handelToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={Logo} alt="Blender Transformation logo" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handelToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Presentation</Link>
            </li>
            <li>
              <Link to="/order">Make an order</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link to="/payment">Payment Information</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
