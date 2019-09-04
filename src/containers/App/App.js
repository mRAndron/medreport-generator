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
  ERROR_MESSAGE,
  TIMEOUT_MESSAGE,
  SUCCES_MESSAGE,
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

  showMesseageSuccess = () => {
    NotificationManager.success(SUCCES_MESSAGE, SUCCES_LABEL, TIMEOUT_MESSAGE)
  }

  showMesseageFill = () => {
    NotificationManager.error(ERROR_LABEL, ERROR_MESSAGE, TIMEOUT_MESSAGE)
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
        />
        <NotificationContainer />
      </Container>
    )
  }
}

export { App }
