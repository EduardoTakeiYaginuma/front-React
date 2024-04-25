import { Fragment, useState } from "react"
import { Button, IconButton, Snackbar } from '@mui/material'

export function CadastrarPartida() {
    
    const [mandante, setmandante] = useState()
    const [visitante, setvisitante] = useState()
    const [placarMandante, setplacarMandante] = useState()
    const [placarVisitante, setplacarVisitante] = useState()
    const [campeonato, setcampeonato] = useState()

    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

    const action = (
        <Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            
          </IconButton>
        </Fragment>
      );

    function click() {

        let data = {
        "mandante": mandante,
        "visitante": visitante,
        "placarMandante": placarMandante,
        "placarVisitante": placarVisitante,
        "campeonato": campeonato,
        }

        fetch("http://localhost:8080/partida", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
            "Content-Type": "application/json"
            }
            }).then(response => {
            setOpen(true)
            }).catch(response => {
            alert("Erro ao cadastrar partida!")
            alert(response.status)
        });
    }

    return (
        <>
            <div className="card">
                Time mandante: <input type="text" value={mandante} onChange={e => setmandante(e.target.value)}></input><br></br>
                Time visitante: <input type="text" value={visitante} onChange={e => setvisitante(e.target.value)}></input><br></br>
                Placar Mandante: <input type="number" value={placarMandante} onChange={e => setplacarMandante(e.target.value)}></input><br></br>
                Placar Visitante: <input type="number" value={placarVisitante} onChange={e => setplacarVisitante(e.target.value)}></input><br></br>
                Campeonato: <input type="text" value={campeonato} onChange={e => setcampeonato(e.target.value)}></input><br></br>
                <Button onClick={() => click()} variant="outlined">Cadastrar</Button>
            </div>
            <Snackbar
                open={open} 
                autoHideDuration={6000} 
                onClose={handleClose}
                message="Partida cadastrado com sucesso!"
                action={action}>
            </Snackbar>

        </>
    )
}