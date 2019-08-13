// import React, { Component } from 'react'
// class App extends Component {
//     render() {
//         return(
//             <div className ="App">
//                 <h1>Hello React!</h1>
//             </div>
//         )
//     }
// }
// export default App

// import React, { Component } from 'react'
// import Table from './Table'
// class App extends Component {
//     render() {
//         return(
//             <div className ="conteiner">
//                 <Table />
//             </div>
//         )
//     }
// }
// export default App

// import React, { Component } from 'react'
// const TableHeader = () => {
//     return (
//         <thead>
//         <tr>
//           <th>Name</th>
//           <th>Job</th>
//         </tr>
//       </thead>
//     )
// }
// const TableBody = () => {
//     return (
//         <tbody>
//       <tr>
//         <td>Charlie</td>
//         <td>Janitor</td>
//       </tr>
//       <tr>
//         <td>Mac</td>
//         <td>Bouncer</td>
//       </tr>
//       <tr>
//         <td>Dee</td>
//         <td>Aspiring actress</td>
//       </tr>
//       <tr>
//         <td>Dennis</td>
//         <td>Bartender</td>
//       </tr>
//     </tbody>
//     )
// }
// class TableElem extends Component {
//     render() {
//       return (
//         <table>
//           <TableHeader />
//           <TableBody />
//         </table>
//       )
//     }
//   }
// export default TableElem

// import React, { Component } from 'react'
// const TableHeader = () => {
//     return (
//         <thead>
//         <tr>
//           <th>Name</th>
//           <th>Job</th>
//         </tr>
//       </thead>
//     )
// }
// const TableBody = () => {
//     return <tbody />
// }
// class App extends Component {
//     render() {
//         const characters = [
//             {
//                 name: 'Charlie',
//                 job: 'Janitor',
//               },
//               {
//                 name: 'Mac',
//                 job: 'Bouncer',
//               },
//               {
//                 name: 'Dee',
//                 job: 'Aspring actress',
//               },
//               {
//                 name: 'Dennis',
//                 job: 'Bartender',
//               },
//         ]
//       return (
//             <table>
//               <TableHeader />
//               <TableBody characterData={characters} />
//               </table>
//       )
//     }
//   }
// export default App

// import React, { Component } from 'react'
// const TableHeader = () => {
//     return (
//         <thead>
//         <tr>
//           <th>Name</th>
//           <th>Job</th>
//         </tr>
//       </thead>
//     )
// }
// const TableBody = props => {
// const rows = props.characterData.map((row, index) => {
//   return (
//     <tr key={index}>
//       <td>{row.name}</td>
//       <td>{row.job}</td>
//       </tr>
//   )
// })
// return <tbody>{rows}</tbody>
// }
// class TableRequisites extends Component {
//     render() {
//         const characters = [
//             {
//                 name: 'Charlie',
//                 job: 'Janitor',
//               },
//               {
//                 name: 'Mac',
//                 job: 'Bouncer',
//               },
//               {
//                 name: 'Dee',
//                 job: 'Aspring actress',
//               },
//               {
//                 name: 'Dennis',
//                 job: 'Bartender',
//               },
//         ]
//       return (
//         <div className ="container">
//             <table>
//               <TableHeader />
//               <TableBody characterData={characters} />
//               </table>
//         </div>
//       )
//     }
//   }
// export default TableRequisites

// import React, { Component } from "react";
// import Table from "./Table";
// import Form from "./Form";
// class TableState extends Component {
//   state = {
//     characters: [
//       {
//         name: "Charlie",
//         job: "Janitor"
//       },
//       {
//         name: "Mac",
//         job: "Bouncer"
//       },
//       {
//         name: "Dee",
//         job: "Aspring actress"
//       },
//       {
//         name: "Dennis",
//         job: "Bartender"
//       }
//     ]
//   };

// import React, { Component } from 'react'
// import Api from './Api'
// class App extends Component {
//     render() {
//         return(
//             <div className ="conteiner">
//                 <Api />
//             </div>
//         )
//     }
// }
// export default App

import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import Api from "./Api";
import Comment from "./Comment";
import Clock from "./Time";
import Posts from "./Posts";
import ToggleButton from "./ToggleButton";
import LoginControl from "./LoginControl";
import Banner from "./Banner";
import List from "./List";
import NameForm from "./NameForm";
import MultipleInputs from "./MultipleInputs";
import Calculator from "./Calculator";
import WelcomeDialog from "./FancyBorder";
import SplitPane from "./SplitPane";
import SingUpDialog from "./SingUpDialog";
import FilterableProductTable from "./ThinkingInReact";
import FilterableProduct from "./FilterableProduct";

const PRODUCTS = [
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

class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor"
      },
      {
        name: "Mac",
        job: "Bouncer"
      },
      {
        name: "Dee",
        job: "Aspring actress"
      },
      {
        name: "Dennis",
        job: "Bartender"
      }
    ]
  };
  removeCharacter = index => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };
  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <h1>React Tutorial</h1>
        <p>Add a character with a name and a job to the table.</p>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
        <hr />
        <Api />
        <hr />
        <Comment />
        <hr />
        <Clock />
        <hr />
        <Posts />
        <hr />
        <ToggleButton />
        <hr />
        <LoginControl />
        <hr />
        <Banner />
        <List />
        <hr />
        <NameForm />
        <hr />
        <MultipleInputs />
        <hr />
        <Calculator />
        <hr />
        <WelcomeDialog />
        <SplitPane />
        <SingUpDialog />
        <hr />
        <FilterableProductTable products={PRODUCTS} />
        <hr />
        <FilterableProduct />
      </div>
    );
  }
}

export default App;
