import React, { Component } from 'react'
import './App.scss'
import { Container } from 'reactstrap'
import { base } from '../../db/base'
import MainForm from '../../components/MainForm/MainForm'
import { SERVICES_FIELD, TABLE_NAME } from '../../constants/mainForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patients: {},
      selectedPatientId: ''
    }
    this.addPatient = this.addPatient.bind(this)
    this.setSelectedPatientId = this.setSelectedPatientId.bind(this)
    this.setPatientInfo = this.setPatientInfo.bind(this)
    this.getPatientByName = this.getPatientByName.bind(this)
    this.getPatientIdByValue = this.getPatientIdByValue.bind(this)
  }

  addPatient(data) {
    const patientsList = { ...this.state.patients }
    const id = Date.now()
    patientsList[id] = {
      ...data,
      diagnoses: [],
      services: []
    }
    this.setState({ patients: patientsList })
  }

  setPatientInfo(data, field) {
    const { patients, selectedPatientId } = this.state
    const patientsList = { ...patients }
    const selectedPatient = patientsList[selectedPatientId]
    if (field === SERVICES_FIELD) {
      selectedPatient.services = data
    } else {
      selectedPatient.diagnoses = data
    }
    patientsList[selectedPatientId] = selectedPatient
    this.setState({ patients: patientsList })
  }

  setSelectedPatientId(id) {
    this.setState({
      selectedPatientId: id
    })
  }

  getPatientByName(name) {
    const { patients } = this.state
    return Object.values(patients).find(patient => {
      return patient.patientName === name
    })
  }

  getPatientIdByValue(value) {
    const { patients } = this.state
    for (let [key, val] of Object.entries(patients)) {
      if (JSON.stringify(val) === JSON.stringify(value)) {
        return key
      }
    }
  }

  componentWillMount() {
    try {
      this.patientsRef = base.syncState(TABLE_NAME, {
        context: this,
        state: TABLE_NAME
      })
    }
    catch (error) {
      console.log(error)
      throw error
    }
  }

  render() {
    const { patients } = this.state
    return (
      <Container className='app'>
        <MainForm
          addPatien={ this.addPatient }
          getPatientByName={ this.getPatientByName }
          setSelectedPatientId={ this.setSelectedPatientId }
          getPatientIdByValue={ this.getPatientIdByValue }
          setPatientInfo={ this.setPatientInfo }
          patients={ patients }
          selectedPatientId={ this.state.selectedPatientId }
        />
      </Container>
    )
  }
}

export default App