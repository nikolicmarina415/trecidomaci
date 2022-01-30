import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FunkcijaCilja from './components/FunkcijaCilja';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Tabela from './components/Tabela';
import { masine, sirovine, vrednosti } from './pocetneVrednosti';

function App() {
  const [upravljackePromenljive, setUpravljackePromenljive] = useState({
    smoki: 0,
    cips: 2,
    perece: 4
  });
  const onChange = naziv => e => {
    const value = Number(e.target.value);
    if (isNaN(value)) {
      return;
    }
    if (value > vrednosti[naziv].max || value < vrednosti[naziv].min) {
      return;
    }
    setUpravljackePromenljive(prev => {
      return {
        ...prev,
        [naziv]: value
      }
    })
  }
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
        <Route path='/' element={<FunkcijaCilja
          vrednosti={vrednosti}
          onChange={onChange}
          upravljackePromenljive={upravljackePromenljive} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
