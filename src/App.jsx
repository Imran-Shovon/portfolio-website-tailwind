import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MyWorkPage from './pages/MyWorkPage';

function App() {
  return (
    <Router>
      <div className="max-w-[1170px] mx-auto px-4 md:px-0 md:pt-15">
        <Navbar />
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-work" element={<MyWorkPage />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
