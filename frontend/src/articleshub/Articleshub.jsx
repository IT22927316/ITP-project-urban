import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { FaSearch } from "react-icons/fa";

const Articleshub = () => {
    const [articles, setArticles] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
      fetch("http://localhost:5000/all-articles")
        .then(res => res.json())
        .then(data => setArticles(data));
    }, []);

    const filteredArticles = articles.filter(article => 
      article.articleTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.authorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className='mt-28 px-4 lg:px-24'>
        <div className='flex justify-between items-start mb-8'>
          <h2 className='text-5xl font-bold'>
              Available Articles
          </h2>
          <div className='flex flex-col items-end'>
            {/* Search bar with rounded shape and icon */}
            <div className="relative w-96"> {/* Adjusted width */}
              <input
                type="text"
                placeholder="Search articles"
                onChange={(e) => setSearchQuery(e.target.value)}
                className='h-10 pl-10 pr-10 rounded-full shadow-sm w-full border border-gray-300' // Adjusted styles for rounded shape
              />
              {/* Search icon */}
              <div className="absolute top-0 left-0 mt-2.5 ml-4 text-gray-500">
                <FaSearch className="" size="20px"/> {/* Adjusted for correct sizing */}
              </div>
            </div>
            <div className='flex mt-4'>
              <Link to="/studentprojects">
                <Button className='items-center rounded-full w-40 h-10 bg-green-700'>Student Projects</Button>
              </Link>
              <Link to="/qnasection">
                <Button className='ml-4 items-center rounded-full w-40 h-10 bg-green-700'>Q & A Section</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 '>
          {filteredArticles.map(article => (
            <Card key={article._id}>
              <img src={article.imageUrl} alt="" className='h-96'/>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {article.articleTitle}
              </h5>
              <div className="font-normal text-gray-700 dark:text-gray-400">
                <p>Article Author: {article.authorName}</p>
                <p>Article Category: {article.category}</p>
              </div>
              <button className='bg-green-700 font-semibold text-white py-2 rounded hover:bg-black transition-all duration-300'>
                <Link to={`/article/${article._id}`}>
                  Browse Now
                </Link>
              </button>
            </Card>
          ))}
        </div>
      </div>
    )
}

export default Articleshub;
