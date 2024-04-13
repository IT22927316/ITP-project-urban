import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import { FaPlay } from 'react-icons/fa6'


const ArticleCards = ({headline, articles}) => {
    //console.log(articles)


  return (
    <div className='my-16 px-4 lg:px-24'>
        <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>

        {/* cards */}
        <div className='mt-12'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        {
            articles.map(article => <SwiperSlide key={article._id}>
                <Link to={`/article/${article._id}`}>
                    <div className='relative'>
                        <img src={article.imageUrl} alt="" className='h-80 w-60'/>
                        <div className='absolute top-3 right-3 bg-green-500 hover:bg-black p-2 rounded'>
                            <FaPlay className='w-4 h-4 text-white'/>
                        </div>
                    </div>
                    <div>
                        <h3>{article.articleTitle}</h3>
                        <p>{article.authorName}</p>
                    </div>
                </Link>
            </SwiperSlide>)
        }
        
      </Swiper>
        </div>

    </div>
  )
}

export default ArticleCards