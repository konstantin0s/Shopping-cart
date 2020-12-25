
import './App.css';
import data from './data.json';
import React, { Component } from 'react';
import Products from './components/Products';
import Filter from './Filter';

export default class App extends Component {
constructor() {
  super();
  this.state = {
    products: data.products,
    size: '',
    sort: ''
  }
}

sortProducts = (event) => {
console.log(event.target.value);
const sort = event.target.value;
this.setState(state => ({
  sort: sort,
  products: this.state.products.slice()
  .sort((a, b) => (
    sort === 'lowest'
    ? a.price > b.price ? 1 : -1
   : sort === 'highest'
    ? a.price < b.price ? 1 : -1
    : a._id  < b._id ? 1 : -1
  )
  
  )
}))
}

filterProducts = (event) => {
  if (event.target.value === ""){
    this.setState({size: event.target.value, products: data.products})
  } else {
  this.setState({size: event.target.value,
    products: data.products.filter(product => 
      product.availableSizes.indexOf(event.target.value) >= 0)
  });
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
             <Filter size={this.state.size}
             sort={this.state.sort}
              count={this.state.products.length}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}
              ></Filter>
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

