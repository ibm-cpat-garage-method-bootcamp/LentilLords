import React, { Component } from "react";
import SimpleList from "../pattern-components/SimpleList";
import BasicPage from "../pattern-components/BasicPage";
import PantryList from "./PantryList";
import axios from 'axios';
import "../pattern-components/patterns.scss";

class UIShellBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryList: ['Milk', 'Eggs', 'Potatoes', 'Kale'],
      newItem: ''
    };
    this.handleItemSubmit = this.handleItemSubmit.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
  }
  components = {
    "Simple List": SimpleList,
    "Basic Page": BasicPage
  };
  defaultComponent = "Basic Page";

  componentDidMount(){
    axios.get('http://localhost:3001/groceryList').then(res => {
      console.log("This is makign the api call", res.data)
      this.setState({groceryList: res.data})
    })
  }

  handleItemSubmit(event) {
    event.preventDefault();
    let newList = this.state.groceryList;
    newList.push(this.state.newItem);
    this.setState({ groceryList: newList});

    axios.post('http://localhost:3001/storing', {newItem: this.state.newItem})
      .then(_ => {
        console.log('oi')
        this.setState({newItem: ''})
      })
  }

  handleItemChange(event) {
    this.setState({ newItem: event.target.value });
  }

  render() {
    let curScreen = this.defaultComponent;
    const PatternName = this.components[curScreen];
    return (
      <div className="pattern-container">
        <PantryList 
        groceryList={this.state.groceryList}
        newItem={this.state.newItem}
        handleItemSubmit={this.handleItemSubmit}
        handleItemChange={this.handleItemChange}/>
      </div>
    );
  }
}
export default UIShellBody;
