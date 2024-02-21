import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Profil from './components/Profile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Home />} />
          <Route path='/about' element={<Home />} />
          <Route path='/profil' element={<Profil />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

