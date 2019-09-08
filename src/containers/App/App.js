import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { NotificationContainer, NotificationManager } from 'react-notifications'

import { MainForm } from '@/components/MainForm'

import { base } from '@/db/base'
import {
  INITIAL_STATE,
  PATIENTS_TABLE,
  ERROR_LABEL,
  SUCCES_LABEL,
  TIMEOUT_MESSAGE,
} from '@/constants/app'
import { SERVICES_FIELD } from '../../constants/mainForm'

import './App.scss'
import 'react-notifications/lib/notifications.css'

class App extends Component {
  state = INITIAL_STATE

  componentDidMount() {
    try {
      this.patientsRef = base.syncState(PATIENTS_TABLE, {
        context: this,
        state: PATIENTS_TABLE,
      })
    } catch (error) {
      throw error
    }
  }

  addPatient = patientData => {
    const id = Date.now()
    this.setState(prevState => ({
      patients: {
        ...prevState.patients,
        [id]: patientData,
        diagnoses: [],
        services: [],
      },
    }))
  }

  showMesseageSuccess = message => {
    NotificationManager.success(message, SUCCES_LABEL, TIMEOUT_MESSAGE)
  }

  showMesseageFill = message => {
    NotificationManager.error(message, ERROR_LABEL, TIMEOUT_MESSAGE)
  }

  updatePatient = (id, data, field) => {
    const { patients } = this.state
    const patientsList = { ...patients }
    const selectedPatient = patientsList[id]
    if (field === SERVICES_FIELD) {
      selectedPatient.services = data
    } else {
      selectedPatient.diagnoses = data
    }
    patientsList[id] = selectedPatient
    this.setState({ patients: patientsList })
  }

  checkPatientName = name => {
    const list = Object.values(this.state.patients)
    return list.find(patient => patient.patientName === name)
  }

  render() {
    const { patients } = this.state
    return (
      <Container className="app">
        <MainForm
          addPatient={this.addPatient}
          showMesseageSuccess={this.showMesseageSuccess}
          showMesseageFill={this.showMesseageFill}
          patients={patients}
          updatePatient={this.updatePatient}
          checkPatientName={this.checkPatientName}
        />
        <NotificationContainer />
      </Container>
    )
  }
}

export { App }
