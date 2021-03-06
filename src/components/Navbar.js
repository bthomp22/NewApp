import React, { useState, useEffect } from 'react';
import { Button } from './Button';

import './Navbar.css';
import { MdLanguage } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import ContactUs from './ContactUs';
import {AboutUs} from './AboutUs';
import axios from 'axios';
import { withRouter, Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToken, addUser } from '../redux/ActionCreators';


const mapStateToProps = (state) => {
  return {
    user: state.user,
    token: state.token,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addUser: () => dispatch(addUser()),
  addToken: () => dispatch(addToken()),
});




function Navbar(props) {
     const history = useHistory();
    function logOut(){
   
   props.dispatch(addToken(''));
    props.history.push('/');
  }
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
    if(props.token.token == ''){
        return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar' >
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <MdLanguage className='navbar-icon' />
              <h2>Merit Bank</h2>
            </Link>

            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='navitem'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/personalbanking' className='nav-links' onClick={closeMobileMenu}
                >
                  Personal Banking
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/businessbanking' className='nav-links' onClick={closeMobileMenu}
                >
                  Business Banking
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
              {/* <li className='nav-item'> 
                <Link to='/contactus' className='nav-links' onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </li> */}
			        <li className='nav-btn'>
                {button ? (
                  <Link to='/login' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Log In</Button>
                  </Link>
                ) : (
                  <Link to='/login' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Log In
                    </Button>
                  </Link>
                )}
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/register' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Sign Up</Button>
                  </Link>
                ) : (
                  <Link to='/register' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Sign Up
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
    } else{
        
        return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar' >
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <MdLanguage className='navbar-icon' />
              <h2>Merit Bank</h2>
            </Link>

            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='navitem'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/personalbanking' className='nav-links' onClick={closeMobileMenu}
                >
                  Personal Banking
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/businessbanking' className='nav-links' onClick={closeMobileMenu}
                >
                  Business Banking
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
             
              <li className='nav-item'>
                <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}
                >
                  Dashboard
                </Link>
              </li>
              {/* <li className='nav-item'> 
                <Link to='/contactus' className='nav-links' onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </li> */}
			       <li className='nav-btn'>
                {button ? (
                  <Link to='/' className='btn-link'>
                    <Button buttonStyle='btn--outline' onClick={logOut}>Log Out</Button>
                  </Link>
                ) : (
                  <Link to='/' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Log Out
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
    };

  
}

export default withRouter(connect(mapStateToProps)(Navbar));
