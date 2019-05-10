import './App.css';
import React, { Component } from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import api from './components/api'
import types from './components/type'

class App extends Component {
  state = {
    items: [],
    filter: [],
  }

  componentDidMount = () => {
    console.log("api",api)
    this.setState({ items: api})
  }

  handleInput = ( e,  itemType ) => {
    const checked = e.target.checked
    const newEl = api.filter(el => el.type === itemType)
    const remove = this.state.filter.filter(el => el.type !== itemType)

    if (checked) {
      const filter = [...this.state.filter, newEl]
      this.setState({ filter , items: filter })
      console.log("filter", filter)
    } else {
      alert("del")
    }
 
    console.log(itemType,  checked)
    console.log("newEl",newEl)
  }

  render() {
    return (
      <div className="App">

        <Sidebar
          types={types}
          handleInput={this.handleInput}
        />
        <Main 
          items={this.state.items}
        />
      </div>
    );
  } 
}

export default App