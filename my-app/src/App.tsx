import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/Mainpage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  );
};

export default App;
