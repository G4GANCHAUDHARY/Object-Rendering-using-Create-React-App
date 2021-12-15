// import logo from './logo.svg';
import './App.css';

import IMAGE from './Photo.jpg'

const employee={
  name:'Gagan',
  location: 'Mathura',
  bloodgroup: 'B+',
  age: '21',
  profileimage: IMAGE
}

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="Big">
    <div id="left"></div>
    <div id="mid" className="profile">
      <img src={employee.profileimage} className="Image" alt="Gagan" />
      <p id="name">{employee.name}</p>
      <p className="small">Location</p>
      <p className="middle" id="location">{employee.location}</p>
      <p className="small">Blood Group</p>
      <p className="middle" id="group">{employee.bloodgroup}</p>
      <p className="small">Age</p>
      <p className="middle" id="age">{employee.age}</p>
    </div>
    <div id="right"></div>
    </div>
  );
}

export default App;
