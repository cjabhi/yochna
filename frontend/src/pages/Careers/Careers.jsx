import React from 'react'
import ContactSection from '../../components/ContactSection/ContactSection'
import Career from '../../components/Career/Career'
import VacancyList from '../../components/Career/VacancyList'

const Careers = ({url}) => {
  return (
    <div>
        <VacancyList url={url} />
        {/* <Career url={url} /> */}
        <ContactSection />
    </div>
  )
}

export default Careers
