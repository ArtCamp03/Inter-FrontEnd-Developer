import Item from "./components/Item";
import Card from "./components/Card";


const App = () => {
  return (
    <>
      <h1>Minh Aplicaçao React</h1>
      <ul>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </ul>
      <Card/>
    </>
  )
}

export default App;

// ou
//export default function App(){
//  return (
//    <h1>Ola Mundo</h1>
//  )
//}