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
      },
    }))
  }

  showMesseageSuccess = () => {
    NotificationManager.success(SUCCES_MESSAGE, SUCCES_LABEL, TIMEOUT_MESSAGE)
  }

  showMesseageFill = () => {
    NotificationManager.error(ERROR_LABEL, ERROR_MESSAGE, TIMEOUT_MESSAGE)
  }

  render() {
    return (
      <Container className="app">
        <MainForm
          addPatient={this.addPatient}
          showMesseageSuccess={this.showMesseageSuccess}
          showMesseageFill={this.showMesseageFill}
        />
        <NotificationContainer />
      </Container>
    )
  }
}

export { App }
