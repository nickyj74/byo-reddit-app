import React, { useState, useEffect } from 'react';
import Article from './components/Article';
import './styles.css';

//import ErrorBoundary from './components/ErrorBoundary';


function App (){
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState("popular");
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch ("https://www.reddit.com/r/"+ subreddit +".json")
        .then(res => {
          if (!res.ok) {
            throw Error("Error! Could not retrieve data!");
          }
          return res.json();
        })
        .then(data => {    
          setArticles(data.data.children);
          setError(null);
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        })
    })
  }, [subreddit]);

  return (
    <div className="App">
      { error && <div> { error }</div>}
      <header className="App-header">
        <input type="text" className="input" value={subreddit} onChange={e => setSubreddit(e.target.value)} />
      </header>
      <div className="articles">
        {
          (articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''
        }
      </div>
    </div>
  );
}


export default App;