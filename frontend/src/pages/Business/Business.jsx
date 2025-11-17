import React from 'react'
import './Business.css';
import SmileFaces from '../../components/SubComponents/SmileFaces';
import AllIndustries from '../../components/SubComponents/AllIndustries';
import ContactSection from '../../components/ContactSection/ContactSection';

const Business = ({url}) => {
  return (
    <div>
        <SmileFaces />
        <AllIndustries url={url} />
        <div className='box-client'>
          <h1 className='heading-client section-title'>Our Clients</h1>
          <img src="images/client.png" alt="clients" style={{width:"100%"}} />
        </div>
        <ContactSection />
    </div>
  )
}

export default Business