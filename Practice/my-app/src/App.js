import './App.css';
import InputComponents from './components/InputComponent';
import Welcome from './components/Welcome'


function App() {
  return (
    <div className="App">
      <Welcome userName="JJamVa" userAge={27} userSchool="숭실대학교"></Welcome>
      <InputComponents></InputComponents>
      {/* property */}
      {/* class를 지양 function을 지향 */}
    </div>
  );
}

export default App;
// export를 통하여 특정한 함수를 내보낸다.