
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import {useState, useEffect} from 'react';


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
            <div className="spinner"></div>
        </div>
      ):
      (
      <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
      </div>
      )}
    </div>
  );
}

export default App;
