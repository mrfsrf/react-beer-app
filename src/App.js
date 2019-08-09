import React from 'react';
import logo from './logo.svg';
import './App.css';
// https://github.com/DavidAPears/PunkAPI-Brewdog-API-with-React-
// https://github.com/samjbmason/punkapi-lib
import BeerContainer from './containers/BeerContainer.js';


// punkapi.random()
// punkapi.beer(1)
// punkapi.beers({
//   name: 'punk',
//   abv_gt: 2
// })
// ...


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <h1>Inoframcije o pivi</h1>
//         <br>
//         </br>
//         <p>{punkapi.beers(options)}</p>
//         {/* <p
//         {beer_1}
//         >
//         </p> */}

//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
    <BeerContainer/>
    );
  }
}


export default App;
