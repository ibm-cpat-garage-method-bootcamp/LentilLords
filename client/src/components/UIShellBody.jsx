import React, { Component } from "react";
import SimpleList from "../pattern-components/SimpleList";
import BasicPage from "../pattern-components/BasicPage";
import PantryList from "./PantryList";
import ShoppingList from "./ShoppingList"
import "../pattern-components/patterns.scss";

class UIShellBody extends Component {
  components = {
    "Simple List": SimpleList,
    "Basic Page": BasicPage
  };
  defaultComponent = "Basic Page";

  render() {
    let curScreen = this.defaultComponent;
    const PatternName = this.components[curScreen];
    return (
      <>
        <div className="pattern-container">
          <PantryList></PantryList>
        </div>
        <div className="pattern-container">
          <ShoppingList />
        </div>
      </>
    );
  }
}
export default UIShellBody;
