import './App.css';
import Navbar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemListContainer />
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
