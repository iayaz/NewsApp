import React, { useEffect, useState } from 'react'
import './news.css'

const News = () => {

    const [mynews, setMyNews] = useState([]);
    const fetchData = async ()=>{
        const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=714ef9b8a6ef47d19b4bda6f4f0d100f")
        const data = await res.json()
       setMyNews(data.articles)
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <>
        {
            mynews.map((ele)=>{
                return(
                    <>
                    <div className='mainDiv'>
                        <div class="card" style={{width: "18rem"}}>
                        <img src={ele.urlToImage} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{ele.author}</h5>
                            <p class="card-text">{ele.title}</p>
                            <a href={ele.url} target='_blank' class="btn btn-primary">Read more</a>
                        </div>
                        </div>
                    </div>

                    </>
                )
            })
        }
    </>
  )
}

export default News