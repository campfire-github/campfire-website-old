import React from 'react';


class GoogleAds extends React.Component{

  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
/*
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- eachpage -->
<ins class="adsbygoogle"
   style="display:inline-block;width:728px;height:90px"
   data-ad-client="ca-pub-8666378670828451"
   data-ad-slot="6921515324"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

*/
render () {
    return (
      <div className='ad col-md-12'>
        <ins className='adsbygoogle'
          style={{ display: 'inline-block', width:'728px', height:'90px' }}
          data-ad-client='ca-pub-8666378670828451'
          data-ad-slot='6921515324'
          data-ad-format='auto' />
      </div>
    )
  }


}
export default GoogleAds ;
