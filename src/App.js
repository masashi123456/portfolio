import './App.css';
import {NavBar} from './cpn/NavBar';
import {Banner} from './cpn/Banner';
import {MySkill} from './cpn/MySkill'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './cpn/Contact';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (

      <div className="App">
        <Router>
          <NavBar/>
          <Banner/>
          <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <MySkill/>
        </Router>
      </div>
  
    
  );
}

export default App;
