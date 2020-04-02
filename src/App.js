import React, { useState, useEffect } from 'react';
import './App.css';
import StarGraph from './components/star-graph/StarGraph';
import LoadingSpinner from './components/loading-spinner/LoadingSpinnet';

const API = 'http://localhost:8080/kotlin/stars';

function App() {
  let [stars, setStars] = useState([]);
  let [loading, setLoading] = useState(true);
  let [hasErrors, setHasErrors] = useState(false);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
          let stars = data.map(x => {
            const date = new Date(Date.parse(x.datetime));
            return {
              ...x,
              datetime: date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()
            }
          });
          setLoading(false);
          setStars(stars);
        }
      ).catch(() => {
        setLoading(false);
        setHasErrors(true);
      });
  },
  []
  );

  return (
    <div className="App">
      { hasErrors ? <div>Ошибка при получении данных</div> : loading ? <LoadingSpinner/> : <StarGraph data={stars}/> }
    </div>
  );
}

export default App;
