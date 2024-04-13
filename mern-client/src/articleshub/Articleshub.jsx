import React, { useEffect, useState } from 'react';
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
              Learn Gather Share
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

        <div className='grid gap-8 my-12 '>
          {filteredArticles.map(article => (
            <div key={article._id} className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex overflow-hidden">
              
                <img src={article.imageUrl} alt="" className='w-1/2 h-auto object-cover w-48 h-48'/>
                <div className="p-4">
                  <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                    {article.articleTitle} 
                  </h5><br/>
                  <p className="text-sm text-black font-semibold">
                    Article Author : {article.authorName} | Article Category : {article.category} 
                  </p><br/>
                  <p className="text-sm text-black font-semibold">
                    Article Summary : <br/>{article.articleDescription}
                  </p><br/>
                  <div className="flex justify-end">
                  <Link to={`/article/${article._id}`}>
                    <button className='rounded-full w-40 h-10 bg-teal-500 text-white font-medium'>Read</button>
                  </Link>
                  </div>
                </div>
            </div>
          ))}
        </div>

      </div>
    )
}

export default Articleshub;
