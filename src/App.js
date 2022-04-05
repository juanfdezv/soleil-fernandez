import './App.css';
import Navbar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ComponenteVacio from './components/ComponenteVacio.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar/>

          <Routes>
            <Route path="/" element={ <ItemListContainer/> }/>
            <Route path="/cart" element={ <ComponenteVacio/> }/>
            <Route path="/category/:categoryId" element={ <ItemListContainer/> }/>
            <Route path="/detail/:itemId" element={ <ItemDetailContainer/> }/>
            <Route path="*" element={ <Navigate to="/"/> }/>
          </Routes>
        </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
