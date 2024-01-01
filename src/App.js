import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos?client_id=w2-RnrtNRE678wtOGLEf3RlteTTRbOyDZl-zwT5LHV8&query=${value}&orientation=squarish`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setResults(data.results);
      })
  }
  return (
    <>
      <div className="App">
        <div className="myDiv">
          <label>Search</label><br></br>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} /><br></br>
          <button onClick={() => fetchImages()}>Send</button>
        </div>
        <div className="gallery">
          {
            
            results.map((item) => {
              return <div className='demo'>
                <img className="item" key={item.id} src={item.urls.regular} />
                <p>Photographer: {item.user.username}</p>
                <p>userName: {item.user.username}</p>
                <p>user profile: {item.user.links.html}</p>
              </div>
              
            })  
          }
        </div>
      </div>
    </>
  );
}

export default App;
