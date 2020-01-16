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
      groceryList: [
        {
            name: 'Milk',
            quantity: 2,
            selected: false
        },
        {
            name: 'Eggs',
            quantity: 0,
            selected: false
        },
        {
            name: 'Potatoes',
            quantity: 0,
            selected: false
        },
        {
            name: 'Kale',
            quantity: 9000,
            selected: false
        }
    ]
    };
    
}

onRowClick = id => {
    this.setState({ selectedRow: id });
};

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
          {row.name}
        </StructuredListCell>
      </StructuredListRow>
    );
};


render() {
    // const {groceryList} = this.props;
    const {groceryList} = this.state;
    
    return (
        <div className="bx--grid pattern-container">
        <Header
          title="Shopping List"
          subtitle="This pattern will display an array of model objects in a simple list column list."
          />
        <div className="bx--row">
          <div className="bx--col-xs-12">

            <StructuredListWrapper selection border>
              <StructuredListHead>
                <StructuredListRow head>
                  <StructuredListCell head />
                  <StructuredListCell head>
                    Shopping Item
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListHead>

              <StructuredListBody>
                {
                    groceryList.map((row, i) => ( 
                        !row.quantity ? this.renderRow(row, i) : null
                    ))
                }
              </StructuredListBody>
            </StructuredListWrapper>
          </div>
        </div>
      </div>
    );
  }

}

export default SimpleList;