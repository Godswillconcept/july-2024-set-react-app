import React, { Component } from 'react'
import Product from './Product';

class Store extends Component {
    render() {
        return (
            <>
                <h3>Welcome to Shofast Store</h3>
                <div style={{
                    overflow: 'auto'
                }}>
                    <Product stocks={120} />
                    <Product stocks={20} />
                    <Product stocks={5} />
                </div>
            </>
        )
    }
}
export default Store