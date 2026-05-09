//import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import RegistrationForm from '../Auth/RegistrationForm'
import HygieneSafetySection from "../components/HygieneSafetySection"
import QualityPoliciesSection from "../components/QualityPoliciesSection"
import CertificationsSection from "../components/CertificationsSection"
import BotswanaFoodLawsSection from "../components/BotswanaFoodLawsSection"
import SustainabilitySection from "../components/SustainabilitySection"
import LoginForm from '../Auth/LoginForm'
import ForgotPassword from '../Auth/ForgotPassword'
import AbottoirSection from '../components/AbattoirSection'
import MeatProcessingSection from '../components/MeatProcessingSection'
import ContactForm from '../Forms/ContactForm'
import DistributionSection from '../components/DistributionSection'
import About from '../Pages/About'
import Customers from '../Pages/Customers'
import Standards from '../Pages/Standards'
import AdminLogin from '../Admins/AdminLogin'
//import Dashboard from '../Dashboard/Dashboard'
import LocalCustomersSection from '../components/LocalCustomersSection'
import SADCCustomersSection from '../components/SADCCustomersSection'
import EuropeExportsSection from '../components/EuropeExportsSection'
import CustomerDashboard from '../Dashboard/CustomerDashboard'
const Screen = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About/>}/>
      <Route path='standards' element={<Standards/>}/>
      <Route path ='/abottoir' element={<AbottoirSection/>} />
      <Route path='/meat-processing' element={<MeatProcessingSection/>}/>
<Route path='/customers' element={<Customers/>}/>
<Route path='/contact' element={<ContactForm/>}/>
      <Route path='/distribution'  element={<DistributionSection/>}/>
        <Route path="/register" element={<RegistrationForm />} />
       <Route path="/admins-only" element={<AdminLogin/>} />
        <Route path='/customer-login' element={<LoginForm/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/dashboard' element={<CustomerDashboard/>}/>
        <Route path='/local-customers' element={<LocalCustomersSection/>}/>
        <Route path='/sadc-customers' element={<SADCCustomersSection/>}/>
        <Route path='/europe-customers' element={<EuropeExportsSection/>}/>
         <Route path='/hygiene-safety' element={<HygieneSafetySection/>}/>
          <Route path='/bw-laws' element={<BotswanaFoodLawsSection/>}/>
           <Route path='/quality-assurance' element={<QualityPoliciesSection/>}/>
            <Route path='/sustainability' element={<SustainabilitySection/>}/>
             <Route path='/certified' element={<CertificationsSection/>}/>
    </Routes>
  )
}

export default Screen
