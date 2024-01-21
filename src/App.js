
import './App.css';
import Google from "./componentes/Google.js"
import Input from "./componentes/Input.js"
import Button from "./componentes/Button.js"
import Header from './componentes/Header.js'
import Safe from './componentes/Safe.js'
import Footer from './componentes/Footer.js'



function App() {
  return (
    <div>
    <div>
      <Header></Header>
    </div>
    <div className='Center'>
    <div><Google></Google></div>
    <div className='input'><Input></Input></div>
    <div className='botao'>
    <Button text='Pesquisa Google'></Button>
    <div className='espaço'></div>
    <Button text='Estou com sorte'></Button>
    </div>
    <Safe></Safe>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default App;
