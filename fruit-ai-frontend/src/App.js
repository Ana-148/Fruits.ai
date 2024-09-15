import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import Translator from './components/Translator';
import FAQ from './components/FAQ';
import About from './components/About';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/translator" element={<Translator />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
