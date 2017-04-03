import React from 'react';
import SectionPage from './SectionPage.jsx';

class HackerNews extends React.Component{
  render () {
    return (
      <SectionPage pagename = "Hacker-News"
                   url = "http://www.campfire.news/api/v1/hacker-news/hacker-news"
      />
    )
  }
}
export default HackerNews ;
