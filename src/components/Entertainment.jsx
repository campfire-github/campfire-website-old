import React from 'react';
import SectionPage from './SectionPage.jsx';

class Entertainment extends React.Component{
  render () {
    return (
      <SectionPage pagename = "Entertainment"
                   url = "http://www.campfire.news/api/v1/entertainment-weekly/mtv-news/entertainment-weekly"
                      page1 = "http://www.campfire.news/entertainment"
      />
    )
  }
}
export default Entertainment ;
