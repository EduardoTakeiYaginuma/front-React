import { Fragment, useState } from "react"
import { Button, IconButton, Snackbar } from '@mui/material'

export function CadastrarTime() {
    
    const [nome, setNome] = useState()
    const [identificador, setIdentificador] = useState()
    const [estado, setEstado] = useState()
    const [estadio, setEstadio] = useState()

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
        "nome": nome,
        "identificador": identificador,
        "estado": estado,
        "estadio": estadio
        }

        fetch("http://localhost:8080/time", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
            "Content-Type": "application/json"
            }
            }).then(response => {
            setOpen(true)
            }).catch(response => {
            alert("Erro ao cadastrar time!")
            alert(response.status)
        });
    }

    return (
        <>
            <div className="card">
                Nome: <input type="text" value={nome} onChange={e => setNome(e.target.value)}></input><br></br>
                Identificador: <input type="text" value={identificador} onChange={e => setIdentificador(e.target.value)}></input><br></br>
                Estado: <input type="text" value={estado} onChange={e => setEstado(e.target.value)}></input><br></br>
                Estádio: <input type="text" value={estadio} onChange={e => setEstadio(e.target.value)}></input><br></br>
                <Button onClick={() => click()} variant="outlined">Cadastrar</Button>
            </div>
            <Snackbar
                open={open} 
                autoHideDuration={6000} 
                onClose={handleClose}
                message="Time cadastrado com sucesso!"
                action={action}>
            </Snackbar>

        </>
    )
}