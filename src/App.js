import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from "./form";
import Teammates from "./teammate";

function App() {
  const [teammate, setTeamate] = useState([
    {name:"Allen", email:"immxalan@gmail.com", role:"React",},{name:"Jason", email:"jnghe@gmail.com", role:"Backend",},{name:"Andy", email:"anguyen@gmail.com", role:"Data",},{name:"Kien", email:"kbui@gmail.com", role:"Administration",},
  ]);
const addNewTeammate = element => {
  const newTeammate = {
    name: element.name,
    email: element.email,
    role: element.role
  };
  setTeamate([...teammate, newTeammate]);
}  
    return (
    <div className="App">
      <header className="App-header">
       <p></p>
       <Form addNewTeammate={addNewTeammate}/>
       <Teammates teammate={teammate}/>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
