import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import {
  INITIAL_STATE_DOCTORS_APPOINTMENT,
  DATE_FORMAT, ERROR_LABEL, SUCCES_LABEL,
  ERROR_MESSAGE, TIMEOUT_MESSAGE, SUCCES_GENERATION
} from '../../constants/mainForm'
import { generateFile } from '../../api/index'
import moment from 'moment'
import Select from 'react-select'
import 'react-notifications/lib/notifications.css'

class DoctorsAppointment extends Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE_DOCTORS_APPOINTMENT
    this.onDataReceiptbChange = this.onDataReceiptbChange.bind(this)
    this.onOfficeAddress = this.onOfficeAddress.bind(this)
    this.onPatientChange = this.onPatientChange.bind(this)
    this.onDoctorChange = this.onDoctorChange.bind(this)
    this.onServicesChange = this.onServicesChange.bind(this)
    this.onDiagnosesChange = this.onDiagnosesChange.bind(this)
    this.checkValid = this.checkValid.bind(this)
    this.addMulti = this.addMulti.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onDataReceiptbChange(event) {
    this.setState({
      dateReceipt: moment(event.target.value).format(DATE_FORMAT)
    })
  }

  onServicesChange(event) {
    let servicesArray = []
    if (event !== null){
      event.forEach((element) => {
        servicesArray.push(element.value)
      })
      this.setState({ services: servicesArray })
    } else {
      this.setState({ services: [] })
    }
  }
  
  onOfficeAddress(event) {
    this.setState({ officeAddress: event.value })
  }

  onPatientChange(event) {
    this.setState({ patientName: event.value })
  }

  onDoctorChange(event) {
    this.setState({ doctor: event.label })
  }

  onDiagnosesChange(event) {
    let diagnosesArray = []
    if (event !== null){
      event.forEach((element) => {
        diagnosesArray.push(element.value)
      })
      this.setState({ diagnoses: diagnosesArray })
    } else {
      this.setState({ diagnoses: [] })
    }
  }

  addMulti(prop, value) {
    let tempArray = []
    if (value !== null) {
      value.forEach((element) => {
        tempArray.push(element.value)
      })
      this.setState({ prop: tempArray })
    } else {
      this.setState({ prop: [] })
    }
  }

  checkValid() {
    const { 
      doctor, patientName, diagnoses,
      officeAddress, services
    } = this.state
    return officeAddress && doctor && patientName && 
           Array.isArray(services) && services.length && 
           Array.isArray(diagnoses) && diagnoses.length
  }

  onSubmit(event) {
    event.preventDefault()
    if (this.checkValid()) {
      generateFile(this.state)
      NotificationManager.success(
        SUCCES_GENERATION,
        SUCCES_LABEL,
        TIMEOUT_MESSAGE
      )
    } else {
      NotificationManager.error(
        ERROR_LABEL,
        ERROR_MESSAGE,
        TIMEOUT_MESSAGE
      )
    }
  }

  render() {
    const doctorList = window.doctorList
    const servicesList = window.servicesList
    const officeAddressList = window.officeAddressList
    const diagnosesList = window.diagnosesList
    const { patientsList } = this.props
    const selectPatientList = []
    Object.entries(patientsList).map(([key, val]) => {
      return (
        selectPatientList.push({
          value: val.patientName,
          label: val.patientName
        })
      )
    })

    return (
      <Form onSubmit={ this.onSubmit }>
        <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>Patient:</Label>
                <Select 
                  options={ selectPatientList }
                  onChange={ this.onPatientChange }
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='exampleState'>Date of Receipt:</Label>
                <Input
                  type='date'
                  id='exampleDate'
                  placeholder='date of receipt...'
                  onChange={ this.onDataReceiptbChange }
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>Office address:</Label>
                <Select
                  options={ officeAddressList }
                  onChange={ this.onOfficeAddress }
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Doctor:</Label>
                <Select 
                  options={ doctorList }
                  onChange={ this.onDoctorChange }
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
              <Label>Diagnoses:</Label>
              <Select
                isMulti name='colors' options={ diagnosesList }
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={ this.onDiagnosesChange }
              />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
              <Label>Selection of services rendered:</Label>
              <Select
                isMulti name='colors' options={ servicesList }
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={ this.onServicesChange }
              />
              </FormGroup>
            </Col>
          </Row>
        <Button color='secondary' size='lg'>Submit</Button>
        <NotificationContainer />
      </Form>
    )
  }
}

export default DoctorsAppointment