import React, { Component } from "react";
import {
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead,
  StructuredListBody,
  StructuredListInput,
  Icon
} from "carbon-components-react";
import { iconCheckmarkSolid } from "carbon-icons";
import Header from "../pattern-components/Header";
import "../pattern-components/patterns.scss";

class SimpleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: 0,
      groceryList: ["Milk", "Eggs", "Potatoes", "Kale"],
      newItem: ''
    };
    this.handleItemSubmit = this.handleItemSubmit.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);

  }

  onRowClick = id => {
    this.setState({ selectedRow: id });
  };

    handleItemSubmit(event) {
      event.preventDefault();
      let newList = this.state.groceryList;
      newList.push(this.state.newItem);

      this.setState({groceryList: newList, newItem: ''})
    }

  handleItemChange(event) {
    // let newList = this.state.data;
    // newList.push(event.target.value);
    // console.log("this is the new item:", event.target.value);
    this.setState({newItem: event.target.value});

  }




  renderRow = (row, id) => {
    return (
      <StructuredListRow key={id} onClick={() => this.onRowClick(id)}>
        <div>
          <StructuredListInput
            id={`row-${id}`}
            value="row-0"
            title="row-0"
            name="row-0"
            //defaultChecked={this.state.selectedRow === id}
            checked={this.state.selectedRow === id}
          />
          <StructuredListCell>
            <Icon
              className="bx--structured-list-svg"
              icon={iconCheckmarkSolid}
            />
          </StructuredListCell>
        </div>

        <StructuredListCell className="simple-list-row">
          {row}
        </StructuredListCell>
      </StructuredListRow>
    );
  };

  render() {
    const data = this.state.groceryList;
    return (
      <div className="bx--grid pattern-container">
        <Header
          title="Pantry List"
          subtitle="This pattern will display an array of model objects in a simple list column list."
        />
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <StructuredListWrapper selection border>
              <StructuredListHead>
                <StructuredListRow head>
                  <StructuredListCell head />
                  <StructuredListCell head>
                    Pantry Item
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListHead>

              <StructuredListBody>
                {data.map((row, i) => {
                  return this.renderRow(row, i);
                })}
              </StructuredListBody>
            </StructuredListWrapper>
            <form onSubmit={this.handleItemSubmit}>
              <label>
                Grocery Item:
                <input type="text" value={this.state.newItem} onChange={this.handleItemChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleList;
