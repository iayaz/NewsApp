import React, { useEffect, useState } from 'react';
import './news.css';

const News = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=714ef9b8a6ef47d19b4bda6f4f0d100f");
    const data = await res.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card-container">
      {mynews.map((ele) => (
        <div className="card" key={ele.title} style={{ width: "18rem" }}>
          <img src={ele.urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{ele.author}</h5>
            <p className="card-text">{ele.title}</p>
            <a href={ele.url} target='_blank' className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
