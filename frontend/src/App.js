import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Mail from './components/mail';


function App() {
  return (
    <Router>
      <Mail/>
    </Router>
  );
}

export default App;
