import logo from './logo.svg';
import './App.css';

import About from "./components/About";
import Navbar from "./components/Navbar";
import ProjectsPage from "./components/ProjectsPage";
import Skills from "./components/Skills";

function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      <About />
      <ProjectsPage />
      <Skills />
    </main>
  );
}

export default App;
