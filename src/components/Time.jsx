import React from 'react';
import SectionPage from './SectionPage.jsx';

class Time extends React.Component{
  render () {
    return (
      <SectionPage pagename = "Time"
                   url = "http://www.campfire.news/api/v1/time/time/time"
      />
    )
  }
}
export default Time ;
