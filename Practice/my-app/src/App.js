import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'


function App() {
  return (
    <div className="App">
      <Welcome userName="JJamVa" userAge={27} userSchool="숭실대학교"></Welcome>
      <Welcome userName="JJam" userAge={26} userSchool="숭실대학교"></Welcome>
      <Welcome userName="Va" userAge={25} userSchool="숭실대학교"></Welcome>
      {/* property */}
      {/* class를 지양 function을 지향 */}
    </div>
  );
}

export default App;