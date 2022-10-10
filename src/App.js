// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
// import {Component} from 'react';
import Cardlist from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';

const App = () =>{
  const [searchField, setSearchField] = useState(''); // [value we want to store, setter function]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters((users)))
  },[]) //<-- passing an empty array, only calling the function on mount. And only need to call it once
  // the call back is the code or effect that we want to happen inside our functional component
  // the second array contain different dependencies, most likely state values or prop values(arguments passsed as props)

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=> {
      return monster.name.toLowerCase().includes(searchField)
    });
    setFilteredMonsters(newFilteredMonsters)

  },[monsters, searchField])
  

  const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLowerCase();
      setSearchField(searchFieldString)
  }


  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
          onChangeHandler={onSearchChange}
          placeholder = 'search monsters'
          className = 'search-box'
        />
        <Cardlist monsters={filteredMonsters}/>
    </div>
  );
}

//Class Component down below
// class App extends Component {

//   constructor(){
//     super();
    
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }
      //life cycle method 
//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) => this.setState(()=>{
//         return {monsters: users}
//       }
//       ))
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(()=>{
//       return { searchField }
//     })
//   }
//   render(){

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
    // const filteredMonsters = monsters.filter((monster)=> {
    //   return monster.name.toLowerCase().includes(searchField)
    // });
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//           <SearchBox 
//             onChangeHandler={onSearchChange}
//             placeholder = 'search monsters'
//             className = 'search-box'
//           />
//           <Cardlist monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// } 

export default App;
