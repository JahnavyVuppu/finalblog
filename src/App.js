import logo from './logo.svg';
import './App.css';
import Mailer from "./component/mailer";
import Home from './component/home';

function App() {
  return (
    <div className="App">
     <Home />
     <Mailer />  
    </div>
  );
}

export default App;
