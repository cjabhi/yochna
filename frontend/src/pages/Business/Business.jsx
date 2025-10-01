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
        <ContactSection />
    </div>
  )
}

export default Business