import React from 'react';
import SectionPage from './SectionPage.jsx';

class Mtv extends React.Component{
  render () {
    return (
      <SectionPage pagename = "MTV"
                   url = "http://www.campfire.news/api/v1/mtv-news/mtv-news/mtv-news"
                   page1 = "http://www.campfire.news/mtv"
      />
    )
  }
}
export default Mtv ;
