import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Tabela from './components/Tabela';
import { masine, sirovine } from './pocetneVrednosti';

function App() {
  const [upravljackePromenljive, setUpravljackePromenljive] = useState({
    smoki: 0,
    cips: 2,
    perece: 4
  });

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/masine' element={(
          <Layout title='Ogranicenja za masine'>
            <Tabela upravljackePromenljive={upravljackePromenljive} podaci={masine} />
          </Layout>
        )} />
        <Route path='/sirovine' element={(
          <Layout title='Ogranicenja za sirovine'>
            <Tabela upravljackePromenljive={upravljackePromenljive} podaci={sirovine} />
          </Layout>
        )} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
