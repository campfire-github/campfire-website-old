import React from 'react';
import SectionPage from './SectionPage.jsx';

class World extends React.Component{
  render () {
    return (
      <SectionPage pagename = "World"
                   url = "http://www.campfire.news/api/v1/google-news/the-telegraph/abc-news-au"
      />
    )
  }
}
export default World ;
