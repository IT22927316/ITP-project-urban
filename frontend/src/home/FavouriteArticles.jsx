import React, { useEffect, useState } from 'react'
import ArticleCards from '../components/ArticleCards';

const FavouriteArticles = () => {
    const [articles, setArticles] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/all-articles").then(res => res.json()).then(data => setArticles(data.slice(0,8)))
    }, [])

  return (
    <div>
        <ArticleCards articles={articles} headline="Top Articles This Week"/> 
    </div>
  )
}

export default FavouriteArticles