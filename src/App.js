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
      <div className='headerList'>
        <div className='center'>
          <div className='logoContainer'>
            <a href="#" ><img src="https://cdn.pixabay.com/photo/2017/02/25/23/50/animal-2099057_960_720.png" /></a>
          </div>
          <div className='menuContainer'>
            <div className='upperPart'>
              <input type="text" placeholder='search this site' />
            </div>
            <div className='lowerPart'>
              <h3><a href="#" >About</a></h3>
              <h3><a href="#" >Blog</a></h3>
              <h3><a href="#" >Travel Tips</a></h3>
              <h3><a href="#" >Destinations</a></h3>
              <h3><a href="#" >Others</a></h3>
              <h3><a href="#" >More</a></h3>
              <h3><a href="#" >Bla</a></h3>
            </div>
          </div>
        </div>
      </div>
      <div className='contentContainer'>
        <div className='content'>
          <h1>LATEST BLOG POSTS</h1>
          <div className='cardContainer'>
            {data.map(article => {
              //console.log(article);
              return(
                <div key={article.id} className='card'>
                  <a href="#" >
                    <img src={article.img} />
                    <h2>{article.title}</h2>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
