import { useEffect, useState } from "react"

export function ListaPartidas() {
    const [data, setData] = useState([])

    useEffect(() => {
      load()
    }, [])
  
  
    
      async function load() {
        let data = await fetch("http://localhost:8080/partida", {
          method: "GET"
        }).then(response => {
  
          return response.json()
  
        }).then(data => {
          setData(data)
        })
        .catch(response => {
          alert("Erro ao carregar partidas!")
          alert(response.status)
        })
      }
      return (
        <div className="card">
        <table>
          <tbody>
            <tr>
              <td>Time Mandante</td>
              <td>Time Visitante</td>
              <td>Placar Mandante</td>
              <td>Placar Visitante</td>
              <td>Campeonato</td>
            </tr>
            {data.map((partida, index) => {
              return <tr key={index}>
                <td>{partida.nomeMandante}</td>
                <td>{partida.nomeVisitante}</td>
                <td>{partida.placarMandante}</td>
                <td>{partida.placarVisitante}</td>
                <td>{partida.nomeCampeonato}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
      )
}