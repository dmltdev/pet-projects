import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <AnimatePresence>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AnimatePresence>
    </HelmetProvider>
  );
}

export default App;
