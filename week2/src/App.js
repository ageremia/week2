import './App.css';
import { useState } from 'react';

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
  }

  return (
    <div>
      <form onSubmit={submit}>
        <label>First Name</label>
        <input name="first" value={firstName} onChange={(event) => setFirstName(event.target.value)}></input>
        <label>Last Name</label>
        <input name="last" value={lastName} onChange={(event) => setLastName(event.target.value)}></input>
        <label>Email</label>
        <input name="email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
        <input type="submit"></input>
      </form>
      
    </div>
  );
}

export default App;
