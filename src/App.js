import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import Avatsr from './components/Avatsr';

function App() {

  const user = {
    name: 'Christopher Robin',
    imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2011%2F07%2F13%2Fchristopherrobin-d13c9c20543fc6d051429ce97d7ac5cb47ac75f5.jpg&tbnid=nS1rvO2HUn5IaM&vet=12ahUKEwjA7In08oP-AhUuk4QIHQBtAxMQMygDegUIARDqAQ..i&imgrefurl=https%3A%2F%2Fwww.npr.org%2F2011%2F07%2F13%2F137816699%2Fwill-christopher-robin-ever-grow-up&docid=0KPOynmmJAlCxM&w=765&h=573&q=christopher%20robin&ved=2ahUKEwjA7In08oP-AhUuk4QIHQBtAxMQMygDegUIARDqAQ',
    imageSize: 90,
  }; 
  return (
    <>
    <MyButton title={"Add to cart"}/>
    <MyButton title={"Find out more"}/>

    <Avatsr user={user}/>
    </>
    
  );
}

export default App;
