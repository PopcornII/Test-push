
import Userlogin  from './screen/login_screen/login_screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './screen/home_screen/home_screen';
import Tv from './screen/userManagement/userManagement';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Userlogin/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/usermanagement" element={<Tv/>}/>
        
      </Routes>
    
      
      
    </BrowserRouter>
  
   
  );
}

export default App;
