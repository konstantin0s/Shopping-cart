
import './App.css';
import data from './data.json';
import React, { Component } from 'react';
import Products from './components/Products';

export default class App extends Component {
constructor() {
  super();
  this.state = {
    products: data.products,
    size: '',
    sort: ''
  }
}

  render() {

      return (
        <div className="grid-container">
         <header>
           <a href="/">Wishing list</a>
         </header>
         <main>

         <div className="content">
           <div className="main">
            <Products products={this.state.products}></Products>
           </div>
            <div className="sidebar">
            Cart Items
            </div>
         </div>
    </main>
         <footer>All rights reserved.</footer>
    
        </div>
      );

  }
}

