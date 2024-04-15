import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const CommunityPage = () => {
    const [communityforms, setCommunityforms] = useState([]);


    useEffect( () =>{
      fetch("http://localhost:5000/all-communityforms").then(res => res.json())
      .then(data => {
        setCommunityforms(data);
        setFilteredCommunityForms(data);
      });
    }, [])


  return (
    
    <div className='px-4 lg:px-20 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
     
         <div className='md:w-1/4  '>
          
            <h2 className='text-lg text-green-700 font-bold  md:w-4/5 leading-snug'>URBAN ROOTS<br></br>
            <p><span className='text-base text-green-500 font-bold'>4.5K followers</span></p></h2>
            
            <p className='mb-10 text-base text-gray-500 '>Empowering newcomers to agriculture with the knowledge and skills they need to 
          cultivate thriving gardens and sustainable farming practices.<br></br><br></br>
          Brasilia , Brazil</p> 

{/* followers */}
          <p className='text-base text-black-700 font-bold my-5 md:w-4/5 leading-snug'>Following<br></br></p>

          <p className='mb-10 text-base text-gray-500 '>GreenThumb 
           <Link to ="/communitymain"><button class="h-8 text-emerald-500  border-solid   hover:text-black active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
 Visit</button></Link><br></br><br></br>
                                                      Artists' Haven  
           <Link to ="/communitymain"><button class="h-8 text-emerald-500  border-solid   hover:text-black active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
 Visit</button></Link><br></br><br></br>
                                                      Petal Pals 
            <Link to ="/communitymain"><button class="h-8 text-emerald-500  border-solid   hover:text-black active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
 Visit</button></Link><br></br><br></br>
                        
                                                      SBCC 
            <Link to ="/communitymain"><button class="h-8 text-emerald-500  border-solid  hover:text-black active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
 Visit</button></Link><br></br><br></br>

            <button class="h-8 bg-emerald-600 text-white border-solid  hover:bg-emerald-500 hover:text-black active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            See all</button>                                     
           </p> 


{/* articles */}

          <p className='text-base text-black-700 font-bold my-5 md:w-4/5 leading-snug'>Our Thoughts<br></br></p>

          <p className='mb-10 text-base text-gray-500 '>Revolutionizing Agriculture<br></br><br></br>
                                                        How AI is Transforming Agriculture<br></br><br></br>
                                                        Planting Seeds of Success <br></br><br></br>
                                                        Nurturing Agricultural Excellence<br></br><br></br>
                                                        Sustainable Harvest<br></br>  </p> 

                                                        
{/* events */}
<p className='text-base text-black-700 font-bold my-5 md:w-4/5 leading-snug'>Our Events<br></br></p>

<p className='mb-10 text-base text-gray-500 '>Harvest Festival and Community Potluck<br></br><br></br>
                                              Workshop on Sustainable Farming Practices<br></br></p>

        <Link to ="/events"><button class="h-8 bg-emerald-600 text-white border-solid  hover:bg-emerald-500 hover:text-black active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
           Visit all events</button> </Link>     
        </div>
  
     <div className='md:w-3/4 '> 

     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>

<br></br>
        <h1 className='text-4xl text-green-900 font-bold w-3/4 rounded md:w-10/12'>UrbanRoots</h1>
        <p className='text-gray-500'>We are a community of young students who have a passion to learn more about urban agriculture.</p>
        
        {/* article one */}
        <p className='text-base text-black-700 font-semibold my-5 md:w-4/5 leading-snug'>URBANROOTS MANIFESTO:<br></br></p>
        <p className='mb-10 text-base font-serif text-black-500 '>We believe that change comes from within.
         And to change the narrative, we must seize the opportunities and environments where communities can demand 
         equity. That means giving people true hope through tools and resources that work.</p>
        
        {/* article two */}
        <div className='hover:font-semibold hover:text-green-700 '>
         <h2 className='text-3xl text-black-700 font-bold my-5 md:w-4/5 leading-snug'>Revolutionizing Agriculture<br></br></h2>
         <p className='text-base text-black-500 italic hover:font-semibold'>In recent years, vertical farming has emerged as a promising solution to address the
          challenges of traditional agriculture, particularly in urban settings where space is limited. 
          By stacking crops vertically in controlled indoor environments, this innovative technique maximizes 
          productivity while minimizing water usage and land footprint . . .</p>  
         <p className='mb-10 text-sm text-gray-500 '> September 12, 2022</p>  </div>

          {/* article three */} 
          <div className='hover:font-semibold hover:text-green-700 '>
          <h2 className='text-3xl text-black-700 font-bold my-5 md:w-4/5 leading-snug'>How AI is Transforming Agriculture<br></br></h2>
         <p className='text-base text-black-500 italic hover:font-semibold'>Artificial Intelligence (AI) is revolutionizing every aspect of our lives,
          and agriculture is no exception. From predictive analytics to autonomous farming equipment, AI technologies are empowering farmers 
          to make data-driven decisions and optimize every stage of the farming process . . .</p>  
         <p className='mb-10 text-sm text-gray-500 '> September 25, 2022</p> </div>     

         {/* article four */}  
         <div className='hover:font-semibold hover:text-green-700 '>
         <h2 className='text-3xl text-black-700  font-bold my-5 md:w-4/5 leading-snug'>Planting Seeds of Success<br></br></h2>
         <p className='text-base text-black-500 italic '>Selecting the right location is the most important part. After that the first step in starting your 
         garden is choosing the perfect spot. Look for an area in your yard or balcony that receives ample sunlight and has good drainage Consider factors such as 
         proximity to water sources and protection from strong winds. If space is limited . . .</p>  
         <p className='mb-10 text-sm text-gray-500 '> October 05, 2022</p>  </div>   


     </div>


</div>


    
      
      

  )
}
;;

export default CommunityPage