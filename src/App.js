
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Login';
import Singup from './Component/Singup';


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={[<Login/>]}/>
    <Route path='/SingupPage' element={[<Singup/>]}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
