import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const CommunityPage = () => {
    const [communityforms, setCommunityforms] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-communityforms")
            .then(res => res.json())
            .then(data => {
                setCommunityforms(data);
                setFilteredCommunityForms(data);
            });
    }, [])

    return (
        <div className='px-4 lg:px-20 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/4'>
                <h2 className='text-lg text-green-700 font-bold md:w-4/5 leading-snug'>URBAN ROOTS<br></br>
                    <span className='text-base text-green-500 font-bold'>4.5K followers</span></h2>
                <p className='mb-10 text-base text-gray-500'>Empowering newcomers to agriculture with the knowledge and skills they need to
                    cultivate thriving gardens and sustainable farming practices.<br></br><br></br>
                    Brasilia, Brazil</p>

                <p className='text-base text-black-700 font-bold my-5 md:w-4/5 leading-snug'>Following<br></br></p>

                <p className='mb-10 text-base text-gray-500'>
                    GreenThumb
                    <Link to="/communitymain">
                        <button className="h-8 text-emerald-500 border-solid hover:text-black active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                            Visit
                        </button>
                    </Link><br></br><br></br>
                    Artists' Haven
                    <Link to="/communitymain">
                        <button className="h-8 text-emerald-500 border-solid hover:text-black active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                            Visit
                        </button>
                    </Link><br></br><br></br>
                    Petal Pals
                    <Link to="/communitymain">
                        <button className="h-8 text-emerald-500 border-solid hover:text-black active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                            Visit
                        </button>
                    </Link><br></br><br></br>
                    SBCC
                    <Link to="/communitymain">
                        <button className="h-8 text-emerald-500 border-solid hover:text-black active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                            Visit
                        </button>
                    </Link><br></br><br></br>

                    <button className="h-8 bg-emerald-600 text-white border-solid hover:bg-emerald-500 hover:text-black active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        See all
                    </button>
                </p>

                <p className='text-base text-black-700 font-bold my-5 md:w-4/5 leading-snug'>Our Thoughts<br></br></p>

                <p className='mb-10 text-base text-gray-500'>
                    Revolutionizing Agriculture<br></br><br></br>
                    How AI is Transforming Agriculture<br></br><br></br>
                    Planting Seeds of Success<br></br><br></br>
                    Nurturing Agricultural Excellence<br></br><br></br>
                    Sustainable Harvest<br></br>
                </p>

                <p className='text-base text-black-700 font-bold my-5 md:w-4/5 leading-snug'>Our Events<br></br></p>

                <p className='mb-10 text-base text-gray-500'>
                    Harvest Festival and Community Potluck<br></br><br></br>
                    Workshop on Sustainable Farming Practices<br></br><br></br>
                    Crafting Connections-DIY Workshop Series<br></br><br></br>
                    Blossoming Beauty: Floral Fiesta Get to gather<br></br><br></br>
                    "Clean & Green"Community Clean-Up Day<br></br><br></br>
                </p>

                <Link to="/events">
                    <button className="h-8 bg-emerald-600 text-white border-solid hover:bg-emerald-500 hover:text-black active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        Visit all events
                    </button>
                </Link>
            </div>

            <div className='md:w-3/4'>

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

                <p className='text-base text-black-700 font-semibold my-5 md:w-4/5 leading-snug'>URBANROOTS MANIFESTO:<br></br></p>
                <p className='mb-10 text-base font-serif text-black-500 '>We believe that change comes from within.
                    And to change the narrative, we must seize the opportunities and environments where communities can demand
                    equity. That means giving people true hope through tools and resources that work.</p>

                {/* article 01 */}
                <div className="max-w-sm w-full lg:max-w-full lg:flex  shadow-lg transition-all duration-700 hover:scale-110">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('src/assets/banner-communities/img1.jpg')"}} title="Revolution">
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <div className="text-gray-900 font-bold text-xl mb-2">Revolutionizing Agriculture</div>
                            <p className="text-gray-700 text-base">In recent years, vertical farming has emerged as a promising solution to address the
                        challenges of traditional agriculture, particularly in urban settings where space is limited.
                        By stacking crops vertically in controlled indoor environments. . .</p>
                        </div>
                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full mr-4" src="/src/assets/banner-communities/p4.jpg" alt="Avatar of Jonathan Reinink"/>
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">Rebecca Stevenson</p>
                                <p className="text-gray-600">August 12, 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
               
               <br></br>
               {/* article 02 */}
                <div className="max-w-sm w-full lg:max-w-full lg:flex  transition-all duration-700 hover:scale-110">
                <div className="border-r border-b border-l border-gray-400 lg:border-l-400 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className='hover:font-semibold hover:text-black-700 '>
                    <h2 className='text-3xl text-black-700 font-bold my-5 md:w-4/5 leading-snug'>How AI is Transforming Agriculture<br></br></h2>
                    <p className='text-base text-black-500 italic hover:font-semibold'>Artificial Intelligence (AI) is revolutionizing every aspect of our lives,
                        and agriculture is no exception. From predictive analytics to autonomous farming equipment, AI technologies are empowering farmers
                        to make data-driven decisions and optimize every stage of the farming process . . .</p>
                        
                    <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full mr-4" src="/src/assets/banner-communities/p6.jpg" alt="Avatar of Jonathan Reinink"/>
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">Kim Park Jin</p>
                                <p className="text-gray-600">March 05, 2023</p>
                            </div>
                        </div>               
                        
                     </div>
                     </div>
                </div>

                <br></br>
              {/* article 03 */}
                <div className="max-w-sm w-full lg:max-w-full lg:flex  shadow-lg transition-all duration-700 hover:scale-110">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('src/assets/banner-communities/img3.jpg')"}} title="Woman holding a mug">
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <div className="text-gray-900 font-bold text-xl mb-2">Robotics And Agriculture</div>
                            <p className="text-gray-700 text-base">In the ever-evolving landscape of agriculture, one innovation stands out like a towering stalk in a field of crops: robotics. 
                            Gone are the days of relying solely on human labor and traditional methods; 
                            instead, farmers are increasingly turning to. . .</p>
                        </div>
                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full mr-4" src="/src/assets/banner-communities/p1.jpg" alt="Avatar of Jonathan Reinink"/>
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                                <p className="text-gray-600">October 15, 2022</p>
                            </div>
                        </div>
                    </div>
                </div>


              <br></br>
            {/* article 04 */}
            <div className="max-w-sm w-full lg:max-w-full lg:flex  transition-all duration-700 hover:scale-110">
            <div className="border-r border-b border-l border-gray-400 lg:border-l-400 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className='hover:font-semibold hover:text-black-700 '>
                    <h2 className='text-3xl text-black-700 font-bold my-5 md:w-4/5 leading-snug'>Planting Seeds of Success<br></br></h2>
                    <p className='text-base text-black-500 italic '>Selecting the right location is the most important part. After that the first step in starting your
                        garden is choosing the perfect spot. Look for an area in your yard or balcony that receives ample sunlight and has good drainage Consider factors such as
                        proximity to water sources and protection from strong winds. If space is limited . . .</p>
                    <br></br>
                    <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full mr-4" src="/src/assets/banner-communities/p5.jpg" alt="Avatar of Jonathan Reinink"/>
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">Emily Timberlake</p>
                                <p className="text-gray-600">September 13, 2022</p>
                            </div>
                        </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
};

export default CommunityPage;
