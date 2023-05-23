import logo from './logo.svg';
import './App.css';
import { Welcome } from './components/Welcome';
import StateComponent from './components/StateComponent';

// const Welcome = ({username,userage}) => {
//   return (<p>안녕하세요. {username}님. {userage}살 이시군요.</p>);//props에 데이터를 전달하고 username을 이용한다.
// }
const Welcome2 = (props) => {
  return (<p>안녕하세요. {props.username}님. {props.userage}살 이시군요.</p>);//props에 데이터를 전달하고 username을 이용한다.
}

function App() {
  return (
    <div className="App">
      <Welcome username="박준홍" userage={30}></Welcome>
      <Welcome2 username="최성원" userage={20}></Welcome2>
      <Welcome username="봉승우"></Welcome>
      <StateComponent></StateComponent>
      {/* {Work01 : 사용자의 나이를 props를 통해 전달하여 출력
      ex) 안녕하세요 '고길동'님 나이는 '30'세 입니다.} */}
    </div>
  );
}

export default App;
