import './App.css';
import Header from './components/Header';  
import Main from './components/Main';  

import { Routes, Route } from 'react-router-dom'
import About from './pages/About'


function App() {
  return(
    <>
    <Header/>
      <Routes>
        <Route path="/about" element={<About />}/>
      </Routes>

    <Main/>
    
    
    </>

  )
}

export default App;
