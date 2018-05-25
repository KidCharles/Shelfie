import React, { Component } from 'react';
import Product from '../Product/Product.js';
import axios from 'axios';



export default class Dashboard extends Component {

    deleteItem(id) {
        axios.delete(`/api/products/${id}`).then(res => {
            this.setState({
                products: res.data
            })
        })
    }

    render() {
        let mappedInventory = this.props.inventory.map((e, i) => {
            return (
                <div key={i}>
                    <Product
                        name={e.name}
                        price={e.price}
                        image={e.image}
                        deleteItem={this.deleteItem}
                    />
                </div>
            )
        })

        return (
            <div>
                <p>Dashboard</p>
                {mappedInventory}
            </div>
        )
    }
}