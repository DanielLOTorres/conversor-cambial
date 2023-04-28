import './App.css';
import Conversor from './components/Conversor';
import Card from './components/layout/Card'; 

function App() {
  return (
    <div className='App'> 
      <Card titulo="Conversor Cambial" cor="#FCE014"> 
        <Conversor moedaA="USD" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="USD" />
        <Conversor moedaA="CAD" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="CAD" />
        <Conversor moedaA="EUR" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="EUR" />
      </Card>
    </div>
  );
}

export default App;
