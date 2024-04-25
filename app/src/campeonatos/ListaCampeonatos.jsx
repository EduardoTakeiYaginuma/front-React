import { useEffect, useState } from "react"

export function ListaCampeonatos() {
    const [data, setData] = useState([])

    useEffect(() => {
      load()
    }, [])
  
  
    
      async function load() {
        let data = await fetch("http://localhost:8080/campeonato", {
          method: "GET"
        }).then(response => {
  
          return response.json()
  
        }).then(data => {
          setData(data)
        })
        .catch(response => {
          alert("Erro ao carregar campeonato!")
          alert(response.status)
        })
      }
      return (
        <div className="card">
        <table>
          <tbody>
            <tr>
            <td>Id</td>
              <td>Nome</td>
              <td>Identificador</td>
            </tr>
            {data.map((campeonato, index) => {
              return <tr key={index}>
                <td>{campeonato.id}</td>
                <td>{campeonato.nome}</td>
                <td>{campeonato.identificador}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
      )
}