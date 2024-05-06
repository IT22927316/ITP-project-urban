import React, { useEffect, useState } from 'react';
import ArticleCards from '../components/ArticleCards';
import styles from './FavouriteArticles.module.css'; // Import the CSS module

const FavouriteArticles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-articles")
            .then(res => res.json())
            .then(data => setArticles(data.slice(0,8)))
    }, []);

    return (
        <div className={styles.favouriteArticlesContainer}> 
            <ArticleCards articles={articles} headline="Top Articles This Week"/> 
        </div>
    )
}

export default FavouriteArticles;
