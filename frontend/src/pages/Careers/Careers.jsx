import React from 'react'
import ContactSection from '../../components/ContactSection/ContactSection'
import Career from '../../components/Career/Career'

const Careers = ({url}) => {
  return (
    <div>
        <Career url={url} />
        <ContactSection />
    </div>
  )
}

export default Careers