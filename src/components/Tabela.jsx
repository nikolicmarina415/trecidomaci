import React from 'react';

export default function Tabela({ podaci, upravljackePromenljive, addGreska }) {
  const nizNazivaPromenljivih = Object.keys(upravljackePromenljive)
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Jedinicna vrednost</th>
          {
            nizNazivaPromenljivih.map(element => {
              return (
                <th key={element}>{element}</th>
              )
            })
          }
          <th>Ukupno</th>
          <th>Raspolozivo</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(podaci).map(resurs => {
            const ukupno = nizNazivaPromenljivih.reduce((acc, key) => { return acc + upravljackePromenljive[key] * podaci[resurs].jedinicneVrednosti[key] }, 0)
            addGreska(resurs, ukupno, podaci[resurs].kapacitet);
            return (
              <tr key={resurs}>
                <td>{resurs}</td>
                {
                  nizNazivaPromenljivih.map(promenljiva => {
                    return (
                      <td key={promenljiva}>{podaci[resurs].jedinicneVrednosti[promenljiva]}</td>
                    )
                  })
                }
                <td className={ukupno > podaci[resurs].kapacitet ? 'text-danger' : ''}>{ukupno}</td>
                <td>{podaci[resurs].kapacitet}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}
