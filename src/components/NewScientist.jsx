import React from 'react';
import SectionPage from './SectionPage.jsx';

class NewScientist extends React.Component{
  render () {
    return (
      <SectionPage pagename = "New-Scientist"
                   url = "http://www.campfire.news/api/v1/new-scientist/new-scientist/new-scientist"
                      page1 = "http://www.campfire.news/new-scientist"
      />
    )
  }
}
export default NewScientist ;
