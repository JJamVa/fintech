import './App.css';
import InputComponents from './components/InputComponent';
import ListComponents from './components/ListComponents';
import StyledComponents from './components/StyledComponents';
import Welcome from './components/Welcome'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import AxiosComponent from './components/AxiosComponent';
import NewsPage from './pages/NewsPage';


function App() {
  return (
    // <div className="App">
    //   <Welcome userName="JJamVa" userAge={27} userSchool="숭실대학교"></Welcome>
    //   <InputComponents></InputComponents>
    //   <ListComponents></ListComponents>
    //   <StyledComponents></StyledComponents>
    //   {/* property */}
    //   {/* class를 지양 function을 지향 */}
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}></Route>
        <Route path="/input" element={<InputComponents/>}></Route>
        <Route path="/list" element={<ListComponents/>}></Route>
        <Route path="/axios" element={<AxiosComponent/>}></Route>
        <Route path="/news" element={<NewsPage/>}></Route>
      </Routes>
    </BrowserRouter>
    //BrowserRouter의 역할은 path마다 지정해주는 것
  );
}

export default App;
// export를 통하여 특정한 함수를 내보낸다.