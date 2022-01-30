import React from 'react';

export default function FunkcijaCilja({ upravljackePromenljive, vrednosti, onChange }) {
  const naziviPromenljivih = Object.keys(upravljackePromenljive);
  return (
    <div className='container mt-3'>
      <h1 className='text-center'>Izracunajte funkciju cilja</h1>
      <div className='mt-4'>
        <table className='table'>
          <thead>
            <tr>
              <th>

              </th>
              {
                naziviPromenljivih.map(naziv => {
                  return (
                    <th key={naziv}>{naziv}</th>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Min</th>
              {naziviPromenljivih.map(naziv => {
                return (
                  <td key={naziv}>{vrednosti[naziv].min}</td>
                )
              })}
            </tr>
            <tr>
              <th>Max</th>
              {naziviPromenljivih.map(naziv => {
                return (
                  <td key={naziv}>{vrednosti[naziv].max}</td>
                )
              })}
            </tr>
            <tr>
              <th>Dobit</th>
              {naziviPromenljivih.map(naziv => {
                return (
                  <td key={naziv}>{vrednosti[naziv].dobit}</td>
                )
              })}
            </tr>
            <tr>
              <th>Kolicina</th>
              {naziviPromenljivih.map(naziv => {
                return (
                  <td key={naziv}>
                    <input onChange={onChange(naziv)} type="number" className='form-control' value={upravljackePromenljive[naziv]} />
                  </td>
                )
              })}
            </tr>
          </tbody>
        </table>
        <h2 className='text-center mt-2'>Funkcija cilja</h2>
        <div className='mt-4 display-4 text-center'>
          {
            naziviPromenljivih.reduce((acc, naziv) => {
              return acc + upravljackePromenljive[naziv] * vrednosti[naziv].dobit
            }, 0)
          }EUR
        </div>
      </div>
    </div>
  );
}
