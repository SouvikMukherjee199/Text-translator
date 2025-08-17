import { Route, Routes } from 'react-router-dom';
import HomeHOC from './components/HOC/Home.HOC/Home.HOC';
import AboutHOC from './components/HOC/About.HOC/About.HOC';
import ServicesHOC from './components/HOC/Services.HOC/Services.HOC';
import ContactHOC from './components/HOC/Contact.HOC/Contact.HOC';


const App = () => {
return(
    <div>
    <Routes>
      <Route path="/" element={<HomeHOC/>} />
      <Route path="/About" element={<AboutHOC/>}/>
      <Route path="/Services" element={<ServicesHOC/>}/>
      <Route path="/Contact" element={<ContactHOC/>}/>
    </Routes>
  </div>

)}

export default App;
