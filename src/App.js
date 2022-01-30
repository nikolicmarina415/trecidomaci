import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Tabela from './components/Tabela';
import { masine, sirovine, vrednosti } from './pocetneVrednosti';

function App() {
  const [upravljackePromenljive, setUpravljackePromenljive] = useState({
    smoki: 0,
    cips: 0,
    perece: 0
  });
  const [greske, setGreske] = useState({});
  const [resenje, setResenje] = useState(0);
  const addGreska = (resurs, ukupno, kapacitet) => {
    setGreske(prev => {
      return {
        ...prev,
        [resurs]: {
          ukupno,
          kapacitet
        }
      }
    })
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/masine' element={(
          <Layout title='Ogranicenja za masine'>
            <Tabela addGreska={addGreska} upravljackePromenljive={upravljackePromenljive} podaci={masine} />
          </Layout>
        )} />
        <Route path='/sirovine' element={(
          <Layout title='Ogranicenja za sirovine'>
            <Tabela addGreska={addGreska} upravljackePromenljive={upravljackePromenljive} podaci={sirovine} />
          </Layout>
        )} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
