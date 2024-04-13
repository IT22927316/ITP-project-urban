import React from 'react'
import Banner from '../components/Banner'
import FavouriteArticles from './FavouriteArticles'
import FavEvent from './FavEvent'
import CommunityBanner from './CommunityBanner'
import InventoryBanner from './InventoryBanner'
import JobBanner from './JobBanner'
import WeatherBanner from './WeatherBanner'
import DeliveryBanner from './DeliveryBanner'
import AboutUs from './AboutUs'
import Review from './Review'
import StuProjectSub from './StuProjectSub'
import ContactUsPage from './ContactUsPage'

const Home = () => {
  return (
    <div>
      <AboutUs/>
      <Banner/>
      <FavouriteArticles/>
      <StuProjectSub/>
      <FavEvent/>
      <CommunityBanner/>
      <InventoryBanner/>
      <JobBanner/>
      <WeatherBanner/>
      <DeliveryBanner/>
      <Review/>
      <ContactUsPage/>
    </div>
  )
}

export default Home