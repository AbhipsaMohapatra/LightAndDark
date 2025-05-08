import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Box ,Button} from '@mui/material'
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import BedtimeIcon from '@mui/icons-material/Bedtime';
// import { useNavigate } from 'react-router-dom'
import Page2 from './Components/Page2'
import Page1 from './Components/Page1'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        
      </Routes>
    </Router>
  )
}

export default App
