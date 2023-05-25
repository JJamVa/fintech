import logo from './logo.svg';
import './App.css';
import { Welcome } from './components/Welcome';
import StateComponent from './components/StateComponent';
import InputComponents from './components/InputComponents';
import ListComponents from './components/ListComponents';
import StyledComponents from './components/StyledComponents';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AxiosComponents from './components/AxiosComponents';
import NewsPage from './pages/NewsPage';
import AuthPage from './pages/AuthPage';
import AuthResultPage from './pages/AuthResultPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Welcome/>}></Route>
        <Route path="/state" element={<StateComponent/>}></Route>
        <Route path="/input" element={<InputComponents/>}></Route>
        <Route path="/axios" element={<AxiosComponents/>}></Route> */}
        <Route path="/" element={<AuthPage/>}></Route>
        <Route path="/news" element={<NewsPage/>}></Route>
        <Route path="/AuthResult" element={<AuthResultPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
