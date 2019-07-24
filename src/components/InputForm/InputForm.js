import React, { Component } from 'react'
import { 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Col, 
  Row
} from 'reactstrap'
import './InputForm.scss'

class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      insuranceName: '',
      insuranceNumber: '',
      patientName: '',
      insuranceHolder: '',
      policyNumber: '',
      accidentDate: null,
      isSameHolder: false
    }
    this.onInsuranceNameChange = this.onInsuranceNameChange.bind(this)
    this.onInsuranceNumberChange = this.onInsuranceNumberChange.bind(this)
    this.onPatientNameChange = this.onPatientNameChange.bind(this)
    this.onInsuranceHolderChange = this.onInsuranceHolderChange.bind(this)
    this.onPolicyNumberChange = this.onPolicyNumberChange.bind(this)
    this.onAccidentDateChange = this.onAccidentDateChange.bind(this)
    this.onSameHolderChange = this.onSameHolderChange.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)
  }
  
  onInsuranceNameChange(event) {
    this.setState({ insuranceName: event.target.value })
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

  onAccidentDateChange(event) {
    this.setState({ accidentDate: event.target.value })
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

  onSubmitForm(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h2>Medrepot-generator</h2>
        <Form className='form' onSubmit={ this.onSubmitForm }>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>Insurance name:</Label>
                <Input
                  placeholder='insurance name...'
                  onChange={ this.onInsuranceNameChange }
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Insurance number:</Label>
                <Input
                  placeholder='insurance number...'
                  onChange={ this.onInsuranceNumberChange }
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col>
              <FormGroup>
                <Label>Full name patient:</Label>
                <Input placeholder='full name patient...'
                  onChange={ this.onPatientNameChange }
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col>
              <FormGroup>
                <Label>Full name insurance holder:</Label>
                <Input
                  placeholder='full name insurance holder...'
                  value={ this.state.insuranceHolder }
                  disabled={this.state.isSameHolder}
                  onChange={ this.onInsuranceHolderChange }
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
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>Policy number:</Label>
                <Input
                  placeholder='policy number...'
                  onChange={ this.onPolicyNumberChange }
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='exampleDate'>Accident date:</Label>
                <Input
                  type='date'
                  format='MM/DD/YYYY'
                  id='exampleDate'
                  placeholder='accident date...'
                  onChange={ this.onAccidentDateChange }
                />
              </FormGroup>
            </Col>
          </Row>
          <Button
            className='form-item'
            onClick={this.onClick}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}
  
export default InputForm