import React, { Component } from 'react';
import formatCurrency from '../util';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import {connect} from "react-redux";
import {fetchProducts} from "../actions/productActions";
import {addToCart} from "../actions/cartActions";

 class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null
        }
    }

    componentDidMount = () => {
        this.props.fetchProducts();
    }

    openModal = (product) => {
        this.setState({product})
    }

    closeModal = (product) => {
        this.setState({product: null})
    }


    render() {
        const {product } = this.state;
        return (
            <div>
               <Fade bottom cascade>
                   {!this.props.products ? 
                   <div>Loading....</div> :
                   <ul className="products">
                   {this.props.products.map(product => (
                       <li key={product._id}>
                           <div className="product">
                             <a href={"#" + product._id}>
                             <img onClick={() => this.openModal(product)}
                             src={product.image} alt={product.title} />
                             <p>{product.title}</p>
                             </a>
                             <div className="product-price">
                                 <div>{formatCurrency(product.price)}</div>
                                 <button onClick={() => this.props.addToCart(product)}
                                 className="button primary">
                                     Add To Cart
                                 </button>
                             </div>
                           </div>
                       </li>
                   ) )}
                                   </ul>
                }

               </Fade>

{product && (
    <Modal ariaHideApp={false}
    isOpen={true} onRequestClose={this.closeModal}>
        <Zoom>
        <button className="close-modal"
             onClick={this.closeModal}
            >X</button>

            <div className="product-details">
                <img src={product.image} alt={product.title} />
            
                <div className="product-details-desc">
                <p>{product.title}</p>
                <p>{product.description}</p>
                <p>Available sizes:
                    {product.availableSizes.map(size => (
                        <span>{ " "}
                        <button className="button">{size}</button>
                         </span>
                    ))}</p>
                <div>
                    <div>
                        {formatCurrency(product.price)}
                    </div>
                    <button onClick={() => {this.props.addToCart(product); 
                    this.closeModal();}}
                      className="button primary">
                      Add To Cart
                    </button>
                </div>
            </div>
            </div>
        
        </Zoom>
    </Modal>
)}

            </div>
        )
    }
}

export default connect(
    (state) => ({ products: state.products.filteredItems }),
    {
      fetchProducts,
      addToCart
    }
  )(Products);