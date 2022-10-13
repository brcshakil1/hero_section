import React, { useState } from 'react';
import logo from '../../assets/logo.png'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='app__navbar '>
            <div className="app__navbar-logo_link">
                <div><img src={logo} alt="" /></div>
                <ul className="app__navbar-links">
                  <li className='p__ibm_plex'><a href="#products">Products</a></li>
                  <li className='p__ibm_plex'><a href="#features">Features</a></li>
                  <li className='p__ibm_plex'><a href="#pricing">Pricing</a></li>
                  <li className='p__ibm_plex'><a href="#Support">Support</a></li>
                </ul>
            </div>
            
            <div className="app__navbar-trial">
              <a href="#"><span>Start Free Trial</span></a>
            </div>

            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color='#fff' fontSize={27} className='cursor__pointer' onClick={() => setToggleMenu(true)}/>


                { toggleMenu && (
                  <div className="app__navbar-smallscreen_overlay flex__center">
                    <AiOutlineClose color='#fff' fontSize={27} className='close__overlay cursor__pointer' onClick={() => setToggleMenu(false)}/>
                    <ul className="app__navbar-smallScreen_links">
                      <li className='p__ibm_plex'><a href="#products">Products</a></li>
                      <li className='p__ibm_plex'><a href="#features">Features</a></li>
                      <li className='p__ibm_plex'><a href="#pricing">Pricing</a></li>
                      <li className='p__ibm_plex'><a href="#Support">Support</a></li>
                    </ul>
                  </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;