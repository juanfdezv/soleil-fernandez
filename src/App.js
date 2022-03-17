import './App.css';
import Navbar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemListContainer greeting="Hola! Este es un greeting pasado a través de una prop en ItemListContainer"/>
      </header>
    </div>
  );
}

export default App;
