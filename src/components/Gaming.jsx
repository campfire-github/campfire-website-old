import React from 'react';
import SectionPage from './SectionPage.jsx';

class Gaming extends React.Component{
  render () {
    return (
      <SectionPage pagename = "Gaming"
                   url = "http://www.campfire.news/api/v1/ign/polygon/polygon"
                      page1 = "http://www.campfire.news/gaming"
      />
    )
  }
}
export default Gaming ;
