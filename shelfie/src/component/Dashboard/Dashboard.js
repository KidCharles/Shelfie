import React, { Component } from 'react';
import Product from '../Product/Product.js'



export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inventory:[] 
        }
    }
    render() {
        console.log(this.state)
        let mappedInventory = this.state.inventory.map((e, i) => {
            return (
                <div key={i}>
                    <Product />
                </div>
            )
        })
        return (
            <div>
                <p>Dashboard</p>
                <Product />
                {mappedInventory}
            </div>
        )
    }
}