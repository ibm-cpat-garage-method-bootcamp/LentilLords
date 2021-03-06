import React, { Component } from 'react';
import SimpleList from '../pattern-components/SimpleList';
import BasicPage from '../pattern-components/BasicPage';
import PantryList from './PantryList';
import ShoppingList from './ShoppingList';
import axios from 'axios';
import '../pattern-components/patterns.scss';

class UIShellBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryList: [],
      newItem: '',
      dummyData: [
        {
          name: 'Toasted Eggs',
          quantity: 1,
          selected: false,
          aisle: 1
        },
        {
          name: 'Fried Milk',
          quantity: 0,
          selected: false,
          aisle: 4
        },
        {
          name: 'Candied Steak',
          quantity: 0,
          selected: false,
          aisle: 7
        }
      ],
      selected: []
    };
    this.handleItemSubmit = this.handleItemSubmit.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.onRowClick = this.onRowClick.bind(this);
  }
  components = {
    'Simple List': SimpleList,
    'Basic Page': BasicPage
  };
  defaultComponent = 'Basic Page';

  componentDidMount() {
    axios.get('http://localhost:3001/groceryList').then(res => {
      console.log('This is makign the api call', res.data);

      this.setState({ groceryList: res.data });
    });
  }

  handleItemSubmit(event) {
    event.preventDefault(); // Prevent submit button from working by default

    const newList = this.state.groceryList;
    let zeroOrOne = Math.round(Math.random()); // Quantity becomes 0 or 1, randomly...

    let aisleValue = Math.floor(Math.random() * 20) + 1; // Quantity becomes between 0 and 100

    const newItem = {
      name: this.state.newItem,
      quantity: zeroOrOne,
      selected: null,
      aisle: aisleValue
    };

    if (this.state.newItem !== '') {
      newList.push(newItem);

      this.setState({ groceryList: newList });

      axios
        .post('http://localhost:3001/storing', { newItem: newItem })
        .then(_ => {
          this.setState({ newItem: '' });
        });
    }
  }

  handleItemChange(event) {
    this.setState({ newItem: event.target.value });
  }

  handleDeleteItem(id, name) {
    console.log('im getting in the delete function');
    let tempState = this.state.groceryList;
    tempState.splice(id, 1);
    this.setState({ groceryList: tempState });
    console.log(name);
    axios.post('http://localhost:3001/delete', { data: name });
  }

  onRowClick = id => {
    this.setState({ selectedRow: id });
    console.log(id);
  };

  render() {
    let curScreen = this.defaultComponent;
    const PatternName = this.components[curScreen];
    return (
      <div className="pattern-container">
        <PantryList
          groceryList={this.state.groceryList}
          dummyData={this.state.dummyData}
          newItem={this.state.newItem}
          handleItemSubmit={this.handleItemSubmit}
          handleItemChange={this.handleItemChange}
          handleDeleteItem={this.handleDeleteItem}
          onRowClick={this.onRowClick}
        />
        <ShoppingList
          groceryList={this.state.groceryList}
          dummyData={this.state.dummyData}
        />
      </div>
    );
  }
}
export default UIShellBody;
