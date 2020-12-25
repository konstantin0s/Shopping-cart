import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div>
                {cartItems.length === 0 ? (
                      <div className="cart cart-header">
                      Cart Empty
                      </div>) :
                     ( <div className="cart cart-header">
                      You have {cartItems.length} in the cart {" "}
                      </div>
                )}
                <div className="cart">
                    <ul className="cart-list">
                    {cartItems.map(cart => (
                        <li key={cart._id}>
                            <div>
                                <img src={cart.image} alt={cart.title} />
                            </div>
                            <div>
                            {cart.title}
                            </div>
                            <button onClick={() => this.props.removeFromCart(cart)}>

                            </button>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        )
    }
}
