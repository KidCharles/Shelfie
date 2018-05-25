import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inventory: [],
            photo: '',
            name: '',
            price: '',
        }

    }
    
    addProduct() {
        let body = {
            photo: this.state.photo,
            name: this.state.name,
            price: this.state.price,
        }
        !body.name
            ?
            alert('please fill out form')
            :
            axios.post('/api/product', body).then((res) => {
                this.setState({
                    inventory: res.data,
                    name: '',
                    price: '',
                    photo: '',
                })
                //   this.props.componentDidMount(),
                //i cant figure out how to fire this.. but if you refresh!! it adds ..
            })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div></div>
                <p>photo URL:</p>
                <input type='url' value={this.state.photo} onChange={((e) => this.setState({ photo: e.target.value }))} />
                <p>Product Name:</p>
                <input type='text' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <p>Price:</p>
                <input type='text' value={this.state.price} onChange={(e) => this.setState({ price: e.target.value })} />

                <div>
                    <button onClick={() => this.setState({ photo: '', name: '', price: '' })}>Cancel</button>
                    <button onClick={() => this.addProduct()}>Add to Inventory</button>
                </div>

            </div>
        )
    }
}