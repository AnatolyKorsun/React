import React, { Component } from "react";

class ProductCategoryRow extends Component {
  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}

class ProductRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends Component {
  render() {
    const row = [];
    let lastCategory = null;
    this.props.products.forEach(product => {
      if (product.category !== lastCategory) {
        row.push(<ProductCategoryRow category={product.category} />);
      }
      row.push(<ProductRow product={product} />);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Prise</th>
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </table>
    );
  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStackChange = this.handleInStackChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStackChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search"
          value={this.props.searchText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input type="checkbox"
          checked = {this.props.inStockOnly}
          onChange = {this.handleInStackChange}
           /> only show product in stock
        </p>
      </form>
    );
  }
}

class FilterableProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      inStockOnly: false
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStackChange = this.handleInStackChange.bind(this);
  }
  handleFilterTextChange(searchText) {
    this.setState({
      searchText: searchText
    });
  }

  handleInStackChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    });
  }

  render(){
    console.log(this.state);
    return (
      <div className="container">
        <SearchBar
          searchText={this.state.searchText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStackChange}
        />
        <ProductTable
          products={products}
          searchText={this.state.searchText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

const products = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

export default FilterableProduct;
