import React from 'react'
import './App.scss'
import { Container } from 'reactstrap'
import MainForm from '../../components/MainForm/MainForm'

function App() {
  return (
    <Container className='app'>
      <MainForm />
    </Container>
  )
}

export default App