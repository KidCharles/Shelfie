import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // products: [],
            imageUrl: '',
            productNameInput: '',
            priceinput: '',
        }
        //bind here
    }
    // componentDidMount() {
    //     axios.get('/api/products').then((res) => {
    //       this.setState({
    //         products: res.data
    //       })
    //     })
    //   }

    // addToInventory() {
    //     let body = {
    //       imageUrl: this.state.imageUrl,
    //       productNameInput: this.state.productNameInput,
    //       priceInput: this.state.priceInput,
    //     }
    //     !body.itemInput
    //       ?
    //       alert('please fill out form')
    //       :
    //     //   axios.post('/api/products', body).then((res) => {
    //     //     this.setState({
    //     //       products: res.data,
    //     //       itemInput: '',
    //     //       priceInput: '',
    //     //       quantityInput: ''
    //     //     })
    //     //   })
    //   }

    render() {
        console.log(this.state)
        return (
            <div>
                <div></div>
                <p>Image URL:</p>
                <input type='text'value={this.state.imageUrl} onChange={((e)=> this.setState({imageUrl:e.target.value}))} /> 
                <p>Product Name:</p>
                <input type='text' value={this.state.productNameInput} onChange={(e) => this.setState({ productNameInput: e.target.value })}/>
                <p>Price:</p>
                <input type='text' value={this.state.priceinput} onChange={(e) => this.setState({ priceinput: e.target.value })}/>

                <div>
                    <button onClick={()=> this.setState({imageUrl:'', productNameInput:'', priceinput:''}) }>Cancel</button>
                    <button onClick={() => this.addToInventory()}>Add to Inventory</button> 
                </div>

            </div>
        )
    }
}