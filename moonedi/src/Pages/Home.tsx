//import React from 'react'
import ExecutiveTeam from '../components/ExecutiveTeam'
import OpportunitiesSection from '../components/OpportunitiesSection'
import ProcessTimeline from '../components/ProcessTimeline'
import MetricsSection from '../components/MetricsSection'
import ServicesSection from '../components/ServicesSection'
import MissionPurposeVision from '../components/MissionPurposeVision'
import ServicesBanner from '../components/ServicesBanner'
import PartnersSection from '../components/PartnersSection'
import Hero from '../components/Hero'


const Home = () => {
  return (
    <div>
          <Hero/>
   <ServicesBanner />
 
 <MissionPurposeVision />
  <ServicesSection />
      <MetricsSection />
      <ProcessTimeline />
      <OpportunitiesSection />
      <ExecutiveTeam />
      <PartnersSection/>
    </div>
  )
}

export default Home
