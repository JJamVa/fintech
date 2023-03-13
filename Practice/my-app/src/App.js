import logo from './logo.svg';
import './App.css';


const Welcome = (props) => {
  console.log(props);
  return <p>안녕하세요. {props.userName}님 나이가 {props.userAge}이며, {props.userSchool}을 다니시군요.</p>;
}

function App() {
  return (
    <div className="App">
      <Welcome userName="JJamVa" userAge={27} userSchool="숭실대학교"></Welcome>
      {/* property */}
    </div>
  );
}

export default App;