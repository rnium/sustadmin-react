import React from 'react'
import TopBanner from './TopBanner';
import Navbar from './Navbar'

export const HeaderComponent = () => {
  return (
    <div>
      <TopBanner />
      <Navbar />
    </div>
  )
}

export default HeaderComponent;