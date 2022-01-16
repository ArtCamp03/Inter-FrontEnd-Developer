import './App.css';
import Counter from '../Counter/Counter';
import SmartCounter from '../SmartCounter/SmartCounter';
import IfoodCounter from '../IfoodCounter/IfoodCounter';

//<Counter></Counter>

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <SmartCounter></SmartCounter>
      <IfoodCounter></IfoodCounter>
    </>
  );
}

export default App;
