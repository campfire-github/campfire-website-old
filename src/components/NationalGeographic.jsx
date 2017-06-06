import React from 'react';
import SectionPage from './SectionPage.jsx';

class NationalGeographic extends React.Component{
  render () {
    return (
      <SectionPage pagename = "National-Geographic"
                   url = "http://www.campfire.news/api/v1/national-geographic/national-geographic/national-geographic"
                      page1 = "http://www.campfire.news/national-geographic"
      />
    )
  }
}
export default NationalGeographic ;
