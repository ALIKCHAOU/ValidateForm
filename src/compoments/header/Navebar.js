import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navebar.css';
//import { BrowserRouter as Router, Link } from "react-router-dom";
//import Home from '../Home/Home';
//import Footer from '../footer/Footer';
import Drawerbutton from './DrawerTaggelButton'




library.add(faStroopwafel)
library.add(faEnvelope)
library.add(faUserCircle)
library.add(faSearch)
library.add(faShoppingCart)


const Navebar = () => {
    return (
        <div className="Header">
         <div className='displaybuton'><Drawerbutton /></div>

        <div className="toolbarlogo"> <a href='#'>Logo</a></div>
           
              <div className="Searchbar" >
                <input type="text" name="controller" placeholder="Rechercher"></input>

                 <label style={{color:"#ffbf00"}}><FontAwesomeIcon icon="search" /></label>


            </div>
            <div className='nave-item'>
            <div className='nave-item-li'><label className="Contact"> <FontAwesomeIcon icon="envelope" />  Contact</label></div>
            <div className='nave-item-li'><label className="Moncompte"> <FontAwesomeIcon icon="user-circle" />Mon compte</label></div>
            <div className='nave-item-li'> <label className="Panier"> <FontAwesomeIcon icon="shopping-cart" />Panier(0)</label></div>
            </div>








        </div>

    )
}
export default Navebar;