import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { CadastrarTime } from './times/CadastraTime'
import { ListaTimes } from './times/ListaTimes'
import { CadastrarPartida } from './partidas/CadastrarPartida'
import { ListaPartidas } from './partidas/ListaPartidas'
import { CadastrarCampeonato } from './campeonatos/CadastrarCampeonato'
import { ListaCampeonatos } from './campeonatos/ListaCampeonatos'

import { Routes, Route } from 'react-router-dom'

import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'


function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <img src={reactLogo} alt="React Logo" width="100" />
      <Grid container>
      {/* A tela é dividida em 12 colunas. Portanto cada item ocupa 12 colunas ou seja, a linha inteira */}
        {/* <Grid item xs={12}>  
          <Link to="/home">Home</Link>
        </Grid> */}
        <Grid item xs={4}>
          <Grid item xs={12}>
            <Link to="/">Home</Link>
          </Grid>

          <Grid item xs={12}>
            <Link to="/cadastrarTime">Cadastrar Time</Link>
          </Grid>

          <Grid item xs={12}>
            <Link to="/listarTimes">Listar Times</Link>
          </Grid>

          <Grid item xs={12}>
            <Link to="/cadastrarPartida">Cadastrar Partida</Link>
          </Grid>

          <Grid item xs={12}>
            <Link to="/listarPartidas">Listar Partidas</Link>
          </Grid>

          <Grid item xs={12}>
            <Link to="/cadastrarCampeonato">Cadastrar Campeonato</Link>
          </Grid>

          <Grid item xs={12}>
            <Link to="/listarCampeonatos">Listar Campeonatos</Link>
          </Grid>

        </Grid>
      
      
        <Grid item xs={8}>
          <Routes>
            <Route path="/cadastrarTime" element={<CadastrarTime />} />
            <Route path="/listarTimes" element={<ListaTimes/>} />
            <Route path="/CadastrarPartida" element={<CadastrarPartida/>} />
            <Route path="/listarPartidas" element={<ListaPartidas/>} />
            <Route path="/cadastrarCampeonato" element={<CadastrarCampeonato/>} />,
            <Route path='/listarCampeonatos' element={<ListaCampeonatos/>} />
          </Routes>
        </Grid>
      
      </Grid>
    </>
  )
}

export default App
