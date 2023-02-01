import './App.css';
import Header from './components/Header';  
import Footer from './components/Footer';  

import { Routes, Route } from 'react-router-dom'
import Link from './pages/Link'


function App() {
  return(
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/link" element={<Link />}/>
      </Routes>

    <Footer/>
    
    
    </>

  )
}

export default App;
