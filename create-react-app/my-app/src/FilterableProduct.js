import React, { Component } from "react";

class ProductCategoryRow extends Component {
  render() {
    return (
      <tr>
        <td>Name</td>
        <td>Price</td>
      </tr>
    );
  }
}

class ProductRow extends Component {
  render() {
    return (
      <tr>
        <td>Position</td>
        <td>Price</td>
      </tr>
    );
  }
}

class ProductTable extends Component {
  render() {
    return (
      <div>
        <ProductCategoryRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
      </div>
    );
  }
}

class SearchBar extends Component{
  render(){
    return(<div>
      <input 
      type="text" />
      <input type="checkbox" />
      </div>
    )
  }
}

class FilterableProduct extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}

export default FilterableProduct;
