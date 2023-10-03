import Home from './Home'
import About from './About.js'
import Signup from './Signup.js'
import Login from './Login.js'
import Success from './Success.js'
import Failed from './Failed.js'
import Search from './AiSearch'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrList from './PrList'
function App() {
  return (
      <BrowserRouter>
         
          <Routes>
              <Route index element={<Home />} />
              <Route path='/PrList' element={<PrList />} />
              <Route path='/About' element={<About />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/Success" element={<Success />} />
              <Route path="/Failed" element={<Failed />} />
              <Route path="/Bot" element={<Search />} />
          </Routes>
        
      </BrowserRouter>
  );
}

export default App;
