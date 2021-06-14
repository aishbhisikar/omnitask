import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import MainFrame from './components/MainFrame';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <Sidebar />
        <MainFrame/>
    
      </Router>
    </>
  );
}

export default App;
