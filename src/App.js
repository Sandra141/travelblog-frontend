import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  useEffect (() => {
    fetch("http://localhost:5000")
    .then(articles => articles.json())
    .then(articles => setData(articles))
    .catch(e => console.log(e))
  }, []);
    //filter(e => e.location === selectedLocation)
  return (
    <div className="App">
      {data.map(article => {
        console.log(article);
        return(
          <>
          <h1>{article.title}</h1>
          <p>{article.content}</p>
          </>
        );
      })}
    </div>
  );
}

export default App;
