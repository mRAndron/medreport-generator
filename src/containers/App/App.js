import React, { Component } from 'react'
import './App.scss'
import { Container } from 'reactstrap'
import { base } from '../../db/base'
import MainForm from '../../components/MainForm/MainForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patients: []
    }
    this.addPatient = this.addPatient.bind(this)
  }

  addPatient(data) {
    const patients = { ...this.state.patients }
    const id = Date.now()
    patients[id] = {
      ...data
    }
    this.setState({ patients })
  }

  componentWillMount() {
    this.patientsRef = base.syncState('patients', {
      context: this,
      state: 'patients'
    })
  }

  render() {
    const { patients } = this.state
    return (
      <Container className='app'>
        <MainForm
          addPatien={ this.addPatient }
          patients={ patients }
        />
      </Container>
    )
  }
}

export default App