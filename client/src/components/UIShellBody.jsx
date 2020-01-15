import React, { Component } from "react";
import SimpleList from "../pattern-components/SimpleList";
import BasicPage from "../pattern-components/BasicPage";
import PantryList from "./PantryList";
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

  handleItemSubmit(event) {
    event.preventDefault();
    let newList = this.state.groceryList;
    newList.push(this.state.newItem);
    this.setState({ groceryList: newList, newItem: '' });
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
