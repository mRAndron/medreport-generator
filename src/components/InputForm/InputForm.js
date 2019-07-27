import React, { Component } from 'react'
import { 
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap'
import { generateFile } from '../../api/index'
import moment from 'moment'
import './InputForm.scss'
import Select from 'react-select'
import 'react-notifications/lib/notifications.css'
import {
  NotificationContainer,
  NotificationManager
} from 'react-notifications'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      insuranceName: '',
      insuranceNumber: '',
      patientName: '',
      insuranceHolder: '',
      policyNumber: '',
      addressPatient: '',
      city: '',
      state: '',
      zip: '',
      gender: '',
      phoneNumber: '',
      doctor: '',
      officeAddress: '',
      dob: null,
      services: [],
      isSameHolder: false
    }
    this.onInsuranceNameChange = this.onInsuranceNameChange.bind(this)
    this.onInsuranceNumberChange = this.onInsuranceNumberChange.bind(this)
    this.onPatientNameChange = this.onPatientNameChange.bind(this)
    this.onInsuranceHolderChange = this.onInsuranceHolderChange.bind(this)
    this.onPolicyNumberChange = this.onPolicyNumberChange.bind(this)
    this.onDobChange = this.onDobChange.bind(this)
    this.onSameHolderChange = this.onSameHolderChange.bind(this)
    this.onAddressPatientChange = this.onAddressPatientChange.bind(this)
    this.onOfficeAddressChange = this.onOfficeAddressChange.bind(this)
    this.onDoctorChange = this.onDoctorChange.bind(this)
    this.onStateChange = this.onStateChange.bind(this)
    this.onGenderChange = this.onGenderChange.bind(this)
    this.onZipChange = this.onZipChange.bind(this)
    this.onCityChange = this.onCityChange.bind(this)
    this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this)
    this.onServicesChange = this.onServicesChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  
  onInsuranceNameChange(event) {
    this.setState({ insuranceName: event.value })
  }
  
  onInsuranceNumberChange(event) {
    this.setState({ insuranceNumber: event.target.value })
  }

  onPatientNameChange(event) {
    this.setState({ patientName: event.target.value })
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
      dob: moment(event.target.value).format('MMDDYYYY')
    })
  }

  officeAddress(event) {
    this.setState({ officeAddress: event.target.value })
  }

  onCityChange(event) {
    this.setState({ city: event.target.value })
  }

  onStateChange(event) {
    this.setState({ state: event.target.value })
  }

  onPhoneNumberChange(event) {
    this.setState({ phoneNumber: event.target.value })
  }

  onGenderChange(event) {
    this.setState({ gender: event.target.value })
  }

  onDoctorChange(event) {
    this.setState({ doctor: event.value })
  }

  onOfficeAddressChange(event) {
    this.setState({ officeAddress: event.value })
  }

  onZipChange(event) {
    this.setState({ zip: event.target.value })
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


  onSameHolderChange() {
    const { isSameHolder } = this.state
    !(isSameHolder) ? this.setState({
      insuranceHolder: this.state.patientName,
    }) : this.setState({
      insuranceHolder: ''
    })
    this.setState({
      isSameHolder: !isSameHolder
    })
  }

  onSubmit(event) {
    event.preventDefault()
    const { 
      doctor, insuranceName,
      officeAddress, services
    } = this.state
    if (doctor && insuranceName && officeAddress && 
        Array.isArray(services) && services.length)
      generateFile(this.state)
    else 
    NotificationManager.error(
      'Error message',
      'Please, fill in all fields!',
      3000
    )
    console.log(this.state)
  }

  render() {
    console.log(window.insuranceList)
    return (
      <div>
        <h2>Medrepot-generator</h2>
        <Form className='form' onSubmit={ this.onSubmit }>
          <Breadcrumb>
            <BreadcrumbItem active>Pre-Registration Information</BreadcrumbItem>
          </Breadcrumb>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>Doctor:</Label>
                <Select 
                  options={options}
                  onChange={ this.onDoctorChange }
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
              <Label>Insurance name:</Label>
              <Select
                options={options} 
                onChange={ this.onInsuranceNameChange }
              />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>Office address:</Label>
                <Select
                  options={options}
                  onChange={ this.onOfficeAddressChange }
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
              <Label>Selection of services rendered:</Label>
              <Select
                isMulti
                name='colors'
                options={ options }
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={ this.onServicesChange }
              />
              </FormGroup>
            </Col>
          </Row>
          <Breadcrumb>
            <BreadcrumbItem active>Patient Details</BreadcrumbItem>
          </Breadcrumb>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>Full name patient:</Label>
                <Input
                  placeholder='full name patient...'
                  onChange={ this.onPatientNameChange }
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Social Security Number (SSN):</Label>
                <Input
                  placeholder='ssn...'
                  onChange={ this.onInsuranceNumberChange }
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for='exampleAddress'>Address patient:</Label>
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
                <Label for='exampleState'>State:</Label>
                <Input
                  placeholder='state patient...'
                  onChange={ this.onStateChange }
                  required
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for='exampleZip'>Zip:</Label>
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
                <Label for='exampleState'>Date of Birth:</Label>
                <Input
                  type='date'
                  id='exampleDate'
                  placeholder='date of birth...'
                  onChange={ this.onDobChange }
                  required
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for='exampleZip'>Gender:</Label>
                <Input type='select' required>
                  <option>Male</option>
                  <option>Female</option>
                </Input>
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
                  disabled={this.state.isSameHolder}
                  onChange={ this.onInsuranceHolderChange }
                  required
                />
                <Label check className='form-item'>
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
          <Button color='secondary' size='lg'>Submit</Button>
        </Form>
        <NotificationContainer/>
      </div>
    )
  }
}

export default InputForm