import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getTodos } from './apis/todo';

function App() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const response = await getTodos();

      setTitle(response.data.title);
    }

    fetch();
  }, [])

  return (
    <div className="App">
      {title && (<h1>{title}</h1>)}
    </div>
  );
}

export default App;
