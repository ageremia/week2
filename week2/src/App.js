import './App.css';
import { useState } from 'react';
import Form from './components/form';

function App() {


  const [formHidden, setFormHidden] = useState(true);

  const toggleForm = () => {
    setFormHidden(!formHidden);
  }


  return (
    <div>
      <button onClick={toggleForm}>Assignment</button>
      {!formHidden && (<Form setFormHidden={setFormHidden}></Form>)}

    </div>
  );
}

export default App;
