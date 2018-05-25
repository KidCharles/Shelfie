import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard.js';
import Form from './component/Form/Form.js';
import Header from './component/Header/Header.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [
        {
          name: 'shoes',
          price: 100,
          image: 'PICTURE'
        },
        {
          name: 'shoes',
          price: 100,
          image: 'PICTURE'
        }
      ]
    }
  }
  render() {
    console.log(this.state)
    let mappedinventory = this.state.inventory.map((e, i) => {
      return (
        <div key={i}>
          <Dashboard
            id = {e.id}
            name={e.name}
            price={e.price}
            image={e.image}
            // deleteItem={this.deleteItem}
          />
        </div>
      )
    })
    return (
      <div>
        <p>App</p>
        <Dashboard
          name
        />
        <Form />
        <Header />

      </div>
    );
  }
}

export default App;
