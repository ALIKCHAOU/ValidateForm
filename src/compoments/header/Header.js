import React, { Component } from 'react';
import "./Header.css";
import Ordinateur from './Ordinateur';
import Navebar from './Navebar';
import Tel from './Tel';
import Stockage from './Stockage';
import ImpressionCopieurs from './ImpressionCopieurs';
import TVSonPhotos from './TVSonPhotos';
import Electromenager from './Electromenager';
import AccessoriesReseau from './AccessoriesReseau';
import Bureautique from './Bureautique';

class Header extends Component {




  render() {


    return (

      <div >

        <Navebar />
        <div className="container">
          <div class='tel'>
            <button className='btn-container'>Téléphonie</button>
            <Tel />
          </div>

          <div class='ord'>
            <button className='btn-container' >Ordinateur</button>
            <Ordinateur />
          </div>



          <div class='Stockage'>
            <button className='btn-container'>Stockage</button>
            <Stockage />
          </div>
          <div class='ImpressionCopieurs'>
            <button className='btn-container'>Impression & Copieurs</button>
            <ImpressionCopieurs />
          </div>
          <div class='TVSonPhotos'>
            <button className='btn-container'>TV Son Photo</button>
            <TVSonPhotos />
          </div>
          <div class='Electromenager'>
            <button className='btn-container'>Electromenager</button>
            <Electromenager />
          </div>
          <div class='AccessoriesReseau'>
            <button className='btn-container'>Accessories	Réseau </button>
            <AccessoriesReseau />
          </div>
          <div class='Bureautique'>
            <button className='btn-container'>Bureautique</button>
            <Bureautique />
          </div>



        </div>

      </div>



    );
  }
}

export default Header;