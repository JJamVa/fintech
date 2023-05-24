import logo from './logo.svg';
import './App.css';
import { Welcome } from './components/Welcome';
import StateComponent from './components/StateComponent';
import InputComponents from './components/InputComponents';
import ListComponents from './components/ListComponents';
import StyledComponents from './components/StyledComponents';
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}></Route>
        <Route path="/state" element={<StateComponent/>}></Route>
        <Route path="/input" element={<InputComponents/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
