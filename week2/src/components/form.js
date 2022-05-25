import { useState, useEffect } from 'react';

const Form = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);

    const submit = () => {

        props.setFormHidden(true);
    }


    const cancel = () => {
      setFirstName("");
      setLastName("");
      setEmail("");
    }
  

    useEffect(() => {
        let err = [];
        if (firstName !== "" && firstName.length < 3) {
          err.push("First name requires 3 characters");
        }
        if (lastName !== "" && lastName.length < 3) {
          err.push("Last name requires 3 characters");
        }
        if (email !== "" && !email.includes("@")) {
          err.push("Email invalid");
        }
        setErrors([...err]);
    }, [firstName, lastName, email]);
    
    
    useEffect(() => {
        return () => {
            cancel();
        };
    }, []);

    return (
      <form onSubmit={(event) => event.preventDefault()}>
        <label>First Name</label>
        <input name="first" value={firstName} onChange={(event) => setFirstName(event.target.value)}></input>
        <br></br>
        <label>Last Name</label>
        <input name="last" value={lastName} onChange={(event) => setLastName(event.target.value)}></input>
        <br></br>
        <label>Email</label>
        <input name="email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
        <br></br>
        {errors.map((error) => 
          <div style={{color: "red"}}>{error}</div>
        )}
        <br></br>
        <button onClick={cancel}>Cancel</button>
        <button onClick={submit} disabled={errors.length > 0 || lastName === "" || firstName === "" || email === ""}>Submit</button>
      </form>
    )

}

export default Form;