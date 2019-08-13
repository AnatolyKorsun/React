import React, { Component } from "react";
import Table from "./Table";

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
    const row = []
    let lastCategory = null

    console.log(this.props.products[0].name);
    this.props.products.forEach(product => {
      if (product.category !== lastCategory){
        row.push(
          <ProductCategoryRow category ={product.category} />
        )
      }
      row.push(<ProductRow product = {product} />)
      lastCategory = product.category
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

class SearchBar extends Component{
  render(){

    return(<div>
      <input 
      type="text" />
      <input type="checkbox" />
      {' '}
      only show product in stock
      </div>
    )
  }
}

class FilterableProduct extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(products[1].category);
    return (
      <div className="container">
        <SearchBar />
        <ProductTable products = { products } />
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
