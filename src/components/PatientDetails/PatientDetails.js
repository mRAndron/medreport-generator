import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Col, Row, CustomInput  } from 'reactstrap'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import {
  INITIAL_STATE_PATIENT, GENDER_LIST, 
  USA_STATES, DATE_FORMAT, ERROR_LABEL, 
  ERROR_MESSAGE, TIMEOUT_MESSAGE,
  SUCCES_MESSAGE, SUCCES_LABEL,
  RELATIONSHIP_LIST
} from '../../constants/mainForm'
import moment from 'moment'
import Select from 'react-select'
import './PatientDetails.scss'
import PropTypes from 'prop-types'
import 'react-notifications/lib/notifications.css'

class PatientDetails extends Component {
  static propTypes = {
    addPatien: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = INITIAL_STATE_PATIENT
    this.onSSNChange = this.onSSNChange.bind(this)
    this.onPatientNameChange = this.onPatientNameChange.bind(this)
    this.onInsuranceHolderChange = this.onInsuranceHolderChange.bind(this)
    this.onPolicyNumberChange = this.onPolicyNumberChange.bind(this)
    this.onDobChange = this.onDobChange.bind(this)
    this.onSameHolderChange = this.onSameHolderChange.bind(this)
    this.onAddressPatientChange = this.onAddressPatientChange.bind(this)
    this.onStateChange = this.onStateChange.bind(this)
    this.onGenderChange = this.onGenderChange.bind(this)
    this.onZipChange = this.onZipChange.bind(this)
    this.onCityChange = this.onCityChange.bind(this)
    this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this)
    this.checkValidForm = this.checkValidForm.bind(this)
    this.onEmploymentChange = this.onEmploymentChange.bind(this)
    this.onAutoAccidentChange = this.onAutoAccidentChange.bind(this)
    this.onOtherAccidentChange = this.onOtherAccidentChange.bind(this)
    this.onStateAccidentChange = this.onStateAccidentChange.bind(this)
    this.onRelastionshipChange = this.onRelastionshipChange.bind(this)
    this.onAccidentDateChange = this.onAccidentDateChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSSNChange(event) {
    this.setState({ ssn: event.target.value })
  }

  onRelastionshipChange(event) {
    this.setState({ relastionship: event.value })
  }

  onEmploymentChange(event) {
    const { isEmployment } = this.state
    this.setState({ isEmployment: !isEmployment })
  }

  onAutoAccidentChange(event) {
    const { isAutoAccident } = this.state
    this.setState({ isAutoAccident: !isAutoAccident })
  }

  onOtherAccidentChange(event) {
    const { isOtherAccident } = this.state
    this.setState({ isOtherAccident: !isOtherAccident })
  }

  onStateAccidentChange(event) {
    this.setState({ stateAccident: event.target.value })
  }

  onPatientNameChange(event) {
    this.setState({
      patientName: event.target.value
    })
    if (this.state.isSameHolder) {
      this.setState({
        insuranceHolder: event.target.value
      })
    }
  }

  onInsuranceHolderChange(event) {
    this.setState({ insuranceHolder: event.target.value })
  }

  onPolicyNumberChange(event) {
    this.setState({ policyNumber: event.target.value })
  }

  onAddressPatientChange(event) {
    this.setState({ addressPatient: event.target.value })
  }

  onDobChange(event) {
    this.setState({
      dob: moment(event.target.value).format(DATE_FORMAT)
    })
  }

  onAccidentDateChange(event) {
    this.setState({
      accidentDate: moment(event.target.value).format(DATE_FORMAT)
    })
  }

  onCityChange(event) {
    this.setState({ city: event.target.value })
  }

  onStateChange(event) {
    this.setState({ state: event.label })
  }

  onPhoneNumberChange(event) {
    this.setState({ phoneNumber: event.target.value })
  }

  onGenderChange(event) {
    this.setState({ gender: event.value })
  }

  onOfficeAddressChange(event) {
    this.setState({ officeAddress: event.value })
  }

  onZipChange(event) {
    this.setState({ zip: event.target.value })
  }

  onSameHolderChange() {
    const { isSameHolder, patientName } = this.state
    !(isSameHolder) ? this.setState({
      insuranceHolder: patientName,
    }) : this.setState({
      insuranceHolder: ''
    })
    this.setState({
      isSameHolder: !isSameHolder
    })
  }

  checkValidForm() {
    return this.state.gender && this.state.state && 
           this.state.relastionship
  }

  onSubmit(event) {
    event.preventDefault()
    if (this.checkValidForm()) {
      const patient = this.state
      delete patient.isSameHolder
      this.props.addPatien(patient)
      NotificationManager.success(
        SUCCES_MESSAGE,
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
    const { isEmployment, isAutoAccident, isOtherAccident, stateAccident } = this.state
    return (
      <Form onSubmit={ this.onSubmit }>
        <Row form>
          <Col md={7}>
          <FormGroup>
            <Label>Full name patient:</Label>
              <Input
                placeholder='full name patient...'
                onChange={ this.onPatientNameChange }
                required
              />
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup>
                <Label>Social Security Number (SSN):</Label>
                <Input
                  placeholder='ssn...'
                  onChange={ this.onSSNChange }
                  required
                />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label>Address patient:</Label>
          <Input
            placeholder='address patient...'
            onChange={ this.onAddressPatientChange }
            required
          />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>City:</Label>
              <Input
                placeholder='city patient...'
                onChange={ this.onCityChange }
                required
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>State:</Label>
              <Select
                placeholder='state patient...'
                options={ USA_STATES }
                onChange={ this.onStateChange }
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label>Zip:</Label>
              <Input
                placeholder='zip patient...'
                onChange={ this.onZipChange }
                required
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Phone number:</Label>
              <Input
                placeholder='phone number...'
                onChange={ this.onPhoneNumberChange }
                required
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Date of Birth:</Label>
              <Input
                type='date'
                placeholder='date of birth...'
                onChange={ this.onDobChange }
                required
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label>Gender:</Label>
                <Select
                  placeholder='gender...'
                  options={ GENDER_LIST }
                  onChange={ this.onGenderChange }
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>Full name insurance holder:</Label>
                <Input
                  placeholder='full name insurance holder...'
                  value={ this.state.insuranceHolder }
                  disabled={ this.state.isSameHolder }
                  onChange={ this.onInsuranceHolderChange }
                  required
                />
                <Label check className='check-box'>
                  <Input
                    type='checkbox'
                    onChange={ this.onSameHolderChange }
                  />{' '}
                    the name of the insurer matches the name of the patient
                </Label>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
              <Label>Palicy Number:</Label>
              <Input
                placeholder='palicy number...'
                onChange={ this.onPolicyNumberChange }
              />
            </FormGroup>
          </Col>
          </Row>
          <Row className='line'>
            <Col md={6}>
              <FormGroup>
                <Label>Patient to relationship to insured:</Label>
                  <Select
                    placeholder='...'
                    options={ RELATIONSHIP_LIST }
                    onChange={ this.onRelastionshipChange }
                  />
              </FormGroup>
              <FormGroup>
                <Label>Accident date:</Label>
                <Input
                  type='date'
                  placeholder='accident date...'
                  onChange={ this.onAccidentDateChange }
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='exampleCheckbox'>Is patients condition related to:</Label>
                <div>
                  <CustomInput
                    type='switch'
                    id='exampleCustomSwitch'
                    name='customSwitch'
                    label='EMPLOYMENT? (Courrent or Previous)'
                    onChange={ this.onEmploymentChange }
                    checked={ isEmployment }
                  />
                  <Row>
                    <Col md={3}>
                      <CustomInput
                        type='switch'
                        id='exampleCustomSwitch2'
                        name='customSwitch'
                        label='AUTO ACCIDENT?'
                        onChange={ this.onAutoAccidentChange }
                        checked={ isAutoAccident }
                      />
                    </Col>
                    <Col className='inputState' md={2}>
                      State:
                      <Input
                        bsSize='sm'
                        value={ stateAccident }
                        onChange={ this.onStateAccidentChange }
                      />
                    </Col>
                  </Row>
                  <CustomInput
                    type='switch'
                    id='exampleCustomSwitch3'
                    label='OTHER ACCIDENT?'
                    onChange={ this.onOtherAccidentChange }
                    checked={ isOtherAccident }
                  />
                </div>
              </FormGroup>
            </Col>
          </Row>
        <Button color='secondary' size='lg'>Add</Button>
        <NotificationContainer />
      </Form>
    )
  }
}

export default PatientDetails