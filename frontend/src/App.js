import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Header from './components/mail';

function App() {
  return (
    <Router>
      <Header/>
    </Router>
  );
}

export default App;