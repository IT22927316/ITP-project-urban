import React from 'react'
import WeatherImg from "../assets/Weatherimg1.jpeg"
import { Link } from 'react-router-dom';

const WeatherBanner = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={WeatherImg} alt="" className='rounded md:w-10/12'/>
        </div>

        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Check Out Our <span className='text-green-700'>Weather Stats</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Stay ahead of the weather with our intuitive Weather Wise feature, tailored for the dedicated 
            grower. Access real-time forecasts, climate trends, and personalized alerts that help you make informed decisions for your 
            plants. From rainfall predictions to temperature swings, our comprehensive weather data ensures you're prepared to protect and 
            nurture your garden through every season. Whether you're planning the next harvest or safeguarding against frost, Weather Wise is 
            your trusty companion for thriving gardens all year round.</p>

                {/* stats */}
                <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                    <div>
                        <h3 className='text-3xl font-bold'>20+</h3>
                        <p className='text-base'>Area Coverage</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>5+</h3>
                        <p className='text-base'>Daily Updates</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>78%</h3>
                        <p className='text-base'>Success Rate</p>
                    </div>
                </div>

                <Link to="/articleshub" className='mt-8 block'><button className='bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore Our WeatherHub</button></Link>
        </div>
    </div>
  )
}

export default WeatherBanner