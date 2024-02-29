import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Recipes from './components/Recipes';
import ResetPassword from './components/ResetPassword';

function App() {
  return ( 
    <BrowserRouter>
      <Nav />
      <div >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Home />} />
          <Route path='/about' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/resetPassword' element={<ResetPassword />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

