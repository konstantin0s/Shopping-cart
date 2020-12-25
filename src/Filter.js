import React, { Component } from 'react';

export default class Filter extends Component {
    render() {

        return (
            <div className="filter">
                <div className="filter-result">
                    {this.props.count} Products
                </div>
                <div className="filter-sort">
                    orDER
                    <select>
                        <option value="">Latest</option>
                        <option value="">Lowest</option>
                        <option value="">Higest</option>     
                    </select>
                </div>
                <div className="filter-size">
                    Filter
                    <select>
                        <option value="">All</option>
                        <option value="">XS</option>
                        <option value="">S</option>
                        <option value="">M</option>
                        <option value="">L</option>
                        <option value="">XL</option>
                    
                    </select>
                </div>
            </div>
        )
    }
}
