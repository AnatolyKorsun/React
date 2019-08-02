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
        <Api />
        <Comment />
        <Clock />
        <Posts />
        <ToggleButton />
        <LoginControl />
        <Banner />
      </div>
    );
  }
}

export default App;
