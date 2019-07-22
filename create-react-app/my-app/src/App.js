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


import React, { Component } from 'react'
const TableHeader = () => {
    return (
        <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead> 
    )
}
const TableBody = () => {
    return <tbody />
    
    
}
class TableRequisite extends Component {
    render() {
        const characters = [
            {
                name: 'Charlie',
                job: 'Janitor',
              },
              {
                name: 'Mac',
                job: 'Bouncer',
              },
              {
                name: 'Dee',
                job: 'Aspring actress',
              },
              {
                name: 'Dennis',
                job: 'Bartender',
              },  
        ]
      return (
          <div className="container">
              <Table characterData = {characters} />
            </div>
      )
    }
  }
export default TableRequisite