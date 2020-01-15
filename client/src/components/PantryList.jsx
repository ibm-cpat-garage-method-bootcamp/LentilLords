import React, { Component } from 'react';
import {
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead,
  StructuredListBody,
  StructuredListInput,
  Icon
} from 'carbon-components-react';
import { iconCheckmarkSolid } from 'carbon-icons';
import Header from '../pattern-components/Header';
import '../pattern-components/patterns.scss';

class SimpleList extends Component {

  onRowClick = id => {
    // this.setState({ selectedRow: id });
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
            // checked={this.state.selectedRow === id}
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
    const data = this.props.groceryList;
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
                  <StructuredListCell head>Pantry Item</StructuredListCell>
                </StructuredListRow>
              </StructuredListHead>

              <StructuredListBody>
                {data.map((row, i) => {
                  return this.renderRow(row, i);
                })}
              </StructuredListBody>
            </StructuredListWrapper>
            <form onSubmit={this.props.handleItemSubmit}>
              <div class="bx--form-item">
                <label className="bx--label">
                  <div class="bx--form-item">
                    <input
                      type="text"
                      value={this.props.newItem}
                      onChange={this.props.handleItemChange}
                      className="bx--text-input"
                      placeholder="Add Gorcery Item Here..."
                    />
                  </div>
                </label>
              </div>
              <div class="bx--form-item">
                <input
                  type="submit"
                  value="Submit"
                  className="bx--btn bx--btn--primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleList;
