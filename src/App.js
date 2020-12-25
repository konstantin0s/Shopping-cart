
import './App.css';
import data from './data.json';
import React, { Component } from 'react'

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
         <main>Product List</main>

         <div classsName="content">
         <div classsName="main-content">
         Products
           </div>
           <div classsName="sidebar">
           Cart Items
           </div>
         </div>
    
         <footer>All rights reserved.</footer>
    
        </div>
      );

  }
}

