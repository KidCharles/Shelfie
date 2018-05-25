import React, { Component } from 'react';
import Dashboard from './component/Dashboard/Dashboard.js';
import Form from './component/Form/Form.js';
import Header from './component/Header/Header.js';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inventory: [],
      selected: null,
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    axios.get('/api/inventory').then((res) => {
      this.setState({
        inventory: res.data
      })
    })
  }


  render() {
    // console.log(this.state)
    return (
      <div>
        <p>App</p>
        <Dashboard
          inventory={this.state.inventory}
          get={this.componentDidMount}
        />

        <Form
          get={this.componentDidMount}
          selected={this.state.selected}
        />

        <Header />
      </div>
    );
  }
}

export default App;
