import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import {
  INITIAL_STATE_DOCTORS_APPOINTMENT,
  DATE_FORMAT, ERROR_LABEL, SUCCES_LABEL,
  ERROR_MESSAGE, TIMEOUT_MESSAGE, SUCCES_GENERATION,
  SERVICES_FIELD, DIAGNOSES_FIELD
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
    this.onSubmit = this.onSubmit.bind(this)
  }

  onDataReceiptbChange(event) {
    this.setState({
      dateReceipt: moment(event.target.value).format(DATE_FORMAT)
    })
  }

  onServicesChange(event) {
    this.props.setPatientInfo(event, SERVICES_FIELD )
  }
  
  onOfficeAddress(event) {
    this.setState({ officeAddress: event.value })
  }

  onPatientChange(event) {
    const patient = this.props.getPatientByName(event.value)
    const patientId = this.props.getPatientIdByValue(patient)
    this.props.setSelectedPatientId(patientId)
    this.setState({
      patientName: event.value,
      isPatientSelected: false
    })
  }

  onDoctorChange(event) {
    console.log(event)
    this.setState({ 
      doctorName: event.label,
      doctorValue: event.value
    })
  }

  onDiagnosesChange(event) {
    this.props.setPatientInfo(event, DIAGNOSES_FIELD )
  }

  checkValid() {
    const { doctorName, patientName, officeAddress } = this.state
    const { patientsList, selectedPatientId } = this.props
    const servicesList = patientsList[selectedPatientId].services
    const diagnosesList = patientsList[selectedPatientId].diagnoses
    return officeAddress && doctorName && patientName && 
           Array.isArray(servicesList) && servicesList.length && 
           Array.isArray(diagnosesList) && diagnosesList.length
  }

  onSubmit(event) {
    event.preventDefault()
    if (this.checkValid()) {
      const { patientsList, selectedPatientId } = this.props
      generateFile(this.state, patientsList[selectedPatientId])
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
    const { patientsList, selectedPatientId } = this.props
    const { isPatientSelected } = this.state
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
                <Label>Date of Receipt:</Label>
                <Input
                  type='date'
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
                closeMenuOnSelect={ false }
                hideSelectedOptions={ true }
                onChange={ this.onDiagnosesChange }
                isDisabled={ isPatientSelected }
                value={ selectedPatientId && patientsList[selectedPatientId].diagnoses }
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
                closeMenuOnSelect={ false }
                hideSelectedOptions={ true }
                onChange={ this.onServicesChange }
                isDisabled={ isPatientSelected }
                value={ selectedPatientId && patientsList[selectedPatientId].services }
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