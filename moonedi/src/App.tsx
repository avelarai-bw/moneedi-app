//import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Screen from './Screens/Screen'
import AutoModal from './Modal/AutoModal'
import AIChatbot from './Bot/AIChatbot';
function App() {
 

  return (
    <>
    <ToastContainer 
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light" // or "dark" / "colored"
    />
  <AutoModal />
    <NavBar />
    <Screen />
    <AIChatbot/>
      <Footer />
    </>
  )
}

export default App
