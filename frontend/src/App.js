import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Mail from './components/Mail';


function App() {
  return (
    <Router>
      <Mail/>
    </Router>
  );
}

export default App;
