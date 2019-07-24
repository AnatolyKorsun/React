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

import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
class TableState extends Component {
  state = {
    characters: [
      // {
      //   name: "Charlie",
      //   job: "Janitor"
      // },
      // {
      //   name: "Mac",
      //   job: "Bouncer"
      // },
      // {
      //   name: "Dee",
      //   job: "Aspring actress"
      // },
      // {
      //   name: "Dennis",
      //   job: "Bartender"
      // }
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
  hadleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default TableState;
