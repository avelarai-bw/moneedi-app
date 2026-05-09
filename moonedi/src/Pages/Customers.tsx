//import React from 'react'
import CustomersHero from '../components/CustomersHero'
import LocalCustomersSection from '../components/LocalCustomersSection'
import SADCCustomersSection from '../components/SADCCustomersSection'
import EuropeExportsSection from '../components/EuropeExportsSection'
const Customers = () => {
  return (
    <div>
      <CustomersHero/>
      <LocalCustomersSection/>
      <SADCCustomersSection/>
      <EuropeExportsSection/>
    </div>
  )
}

export default Customers
