const Welcome = (props) => {
    console.log(props);
    return <p>안녕하세요. {props.userName}님 나이가 {props.userAge}이며, {props.userSchool}을 다니시군요.</p>;
  }

  export default Welcome;