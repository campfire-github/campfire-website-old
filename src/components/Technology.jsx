import React from 'react';
import SectionPage from './SectionPage.jsx';

class Technology extends React.Component{
  render () {
    return (
      <SectionPage pagename = "Technology"
                   url = "http://www.campfire.news/api/v1/techcrunch/recode"
      />
    )
  }
}
export default Technology ;
