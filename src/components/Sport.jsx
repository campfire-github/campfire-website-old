import React from 'react';
import SectionPage from './SectionPage.jsx';

class Sport extends React.Component{
  render () {
    return (
      <SectionPage pagename = "Sport"
                   url = "http://www.campfire.news/api/v1/bbc-sport/espn/espn"
      />
    )
  }
}
export default Sport ;
