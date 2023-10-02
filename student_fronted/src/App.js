
import Userlogin  from './screen/login_screen/login_screen';
import Dashboard from './screen/home_screen/home_screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Userlogin/>} />
        <Route path="/home" element={<Dashboard/>} />
      </Routes>
      
      

     
     
      
    </BrowserRouter>
  
   
  );
}

export default App;
