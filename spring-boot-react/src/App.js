import logo from './logo.svg';
import './App.css';
import axios from axios;
import React, {useState, useEffect} from "react";

function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    axios.post("/api/users").then((res)=>{
      if(res.data){
        setUser(res.data);
      }else{
        alert("failed")
      }
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{user.id}</h1>
        <h1>{user.username}</h1>
      </header>
    </div>
  );
}

export default App;
