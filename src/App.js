
import './App.css';
import React, { Component } from 'react';
import Products from './components/Products';
import Filter from './Filter';
import Cart from './components/Cart';
import store from './store';
import {Provider} from "react-redux";

export default class App extends Component {
constructor() {
  super();
  this.state = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) ?
    JSON.parse(localStorage.getItem("cartItems")) : []
  }
}

addToCart = (product) => {
  const cartItems = this.state.cartItems.slice();
  let alreadyInCart = false;
  cartItems.forEach(item => {
    if (item._id === product._id) {
      item.count++;
      alreadyInCart = true;
    }
  })
  if (!alreadyInCart) {
    cartItems.push({...product, count: 1});
  }
  this.setState({
    cartItems: cartItems
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

removeFromCart = (product) => {
  const cartItems = this.state.cartItems.slice();
  this.setState({
    cartItems: cartItems.filter(item => item._id !== product._id)
  })
  localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(item => item._id !== product._id)));

}

createOrder= (order) => {
  alert('need to save order' + order.name);
}

// sortProducts = (event) => {
// console.log(event.target.value);
// const sort = event.target.value;
// this.setState(state => ({
//   sort: sort,
//   products: this.state.products.slice()
//   .sort((a, b) => (
//     sort === 'lowest'
//     ? a.price > b.price ? 1 : -1
//    : sort === 'highest'
//     ? a.price < b.price ? 1 : -1
//     : a._id  < b._id ? 1 : -1
//   )
  
//   )
// }))
// }

// filterProducts = (event) => {
//   if (event.target.value === ""){
//     this.setState({size: event.target.value, products: data.products})
//   } else {
//   this.setState({size: event.target.value,
//     products: data.products.filter(product => 
//       product.availableSizes.indexOf(event.target.value) >= 0)
//   });
//   }
// }

  render() {

      return (
        <Provider store={store}>
        <div className="grid-container">
         <header>
           <a href="/">Wishing list</a>
         </header>
         <main>

         <div className="content">
           <div className="main">
             <Filter 
            
              ></Filter>
            <Products 
            addToCart={this.addToCart}
            ></Products>
           </div>
            <div className="sidebar">
            <Cart createOrder={this.createOrder} cartItems={this.state.cartItems} 
            removeFromCart={this.removeFromCart}/>
            </div>
         </div>
    </main>
         <footer>All rights reserved.</footer>
    
        </div>
        </Provider>
      );

  }
}

