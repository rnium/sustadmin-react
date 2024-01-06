import React from 'react'
import TopBanner from './TopBanner';
import Navbar from './Navbar'

export const HeaderComponent = (props) => {
  return (
    <div>
      <TopBanner />
      <Navbar searchBarOpen={props.searchBarOpen} openSearchbar={props.openSearchbar} />
    </div>
  )
}

export default HeaderComponent;