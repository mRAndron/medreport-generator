import React, { useState } from 'react'
import T from 'prop-types'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  CustomInput,
} from 'reactstrap'
import Select from 'react-select'

import {
  GENDER_LIST,
  USA_STATES,
  RELATIONSHIP_LIST,
  INSURANCE_LIST,
  REPEAT_TEXT_INPUTS,
} from '@/constants/mainForm'

import './PatientDetails.scss'

const PatientDetails = props => {
  const [textInputs, setTextInputs] = useState({
    patientName: '',
    ssn: '',
    patientAddress: '',
    patientCity: 'Jacksonville',
    patientZip: '',
    patientPhone: '',
    dobPatient: null,
    accidentDate: null,
    stateAccident: 'FL',
    holderName: '',
    policyNumber: '',
    holderAddress: '',
    holderCity: 'Jacksonville',
    holderZip: '',
    holderPhone: '',
  })
  const [patientState, setPatientState] = useState('FL')
  const [holderState, setHolderState] = useState('FL')
  const [insuranceName, setInsuranceName] = useState('')
  const [gender, setGender] = useState('')
  const [relastionship, setRelastionship] = useState('')
  const [isSameHolder, setSameHolder] = useState(true)
  const [isEmployment, setEmployment] = useState(false)
  const [isAutoAccident, setAutoAccident] = useState(true)
  const [isOtherAccident, setOtherAccident] = useState(false)

  const { addPatient, showMesseageSuccess, showMesseageFill } = props

  const handleTextInputChange = event => {
    event.persist()
    setTextInputs(textInputs => ({
      ...textInputs,
      [event.target.name]: event.target.value,
    }))

    if (isSameHolder && REPEAT_TEXT_INPUTS.includes(event.target.name)) {
      switch (event.target.name) {
        case 'patientName':
          setTextInputs(textInputs => ({
            ...textInputs,
            holderName: event.target.value,
          }))
          break

        case 'patientAddress':
          setTextInputs(textInputs => ({
            ...textInputs,
            holderAddress: event.target.value,
          }))
          break

        case 'patientCity':
          setTextInputs(textInputs => ({
            ...textInputs,
            holderCity: event.target.value,
          }))
          break

        case 'patientZip':
          setTextInputs(textInputs => ({
            ...textInputs,
            holderZip: event.target.value,
          }))
          break

        case 'patientPhone':
          setTextInputs(textInputs => ({
            ...textInputs,
            holderPhone: event.target.value,
          }))
          break

        default:
          break
      }
    }
  }

  const checkValid = () => {
    return (
      patientState && holderState && insuranceName && gender && relastionship
    )
  }

  const onSubmitForm = event => {
    event.preventDefault()
    if (checkValid()) {
      const newPatient = {
        ...textInputs,
        patientState: patientState,
        holderState: holderState,
        insuranceName: insuranceName,
        gender: gender,
        relastionship: relastionship,
        isSameHolder: isSameHolder,
        isEmployment: isEmployment,
        isAutoAccident: isAutoAccident,
        isOtherAccident: isOtherAccident,
      }
      addPatient(newPatient)
      showMesseageSuccess()
    } else {
      showMesseageFill()
    }
  }

  return (
    <Form onSubmit={onSubmitForm}>
      <Row className="input-label" form>
        <Col md={6}>
          <FormGroup>
            <Label>Full name patient:</Label>
            <Input
              name="patientName"
              placeholder="full name patient..."
              onChange={handleTextInputChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label>Social Security Number (SSN):</Label>
            <Input
              name="ssn"
              placeholder="ssn..."
              onChange={handleTextInputChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label>Insurance name:</Label>
            <Select
              name="insuranceName"
              placeholder="..."
              options={INSURANCE_LIST}
              onChange={e => setInsuranceName(e.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label>Address patient:</Label>
        <Input
          name="patientAddress"
          placeholder="address patient..."
          onChange={handleTextInputChange}
          required
        />
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label>City:</Label>
            <Input
              name="patientCity"
              placeholder="city patient..."
              onChange={handleTextInputChange}
              defaultValue="Jacksonville"
              required
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label>State:</Label>
            <Select
              placeholder="state patient..."
              options={USA_STATES}
              onChange={e => setPatientState(e.label)}
              defaultValue={{
                value: 'Florida',
                label: 'FL',
              }}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label>Zip:</Label>
            <Input
              name="patientZip"
              placeholder="zip patient..."
              onChange={handleTextInputChange}
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
              name="patientPhone"
              placeholder="phone number..."
              onChange={handleTextInputChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label>Date of Birth:</Label>
            <Input
              name="dobPatient"
              type="date"
              placeholder="date of birth..."
              onChange={handleTextInputChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label>Gender:</Label>
            <Select
              placeholder="gender..."
              options={GENDER_LIST}
              onChange={e => setGender(e.label)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row className="line" form>
        <Col md={6}>
          <FormGroup>
            <Label>Full name insurance holder:</Label>
            <Input
              name="holderName"
              placeholder="full name insurance holder..."
              value={textInputs.holderName}
              disabled={isSameHolder}
              onChange={handleTextInputChange}
              required
            />
            <Label check className="check-box">
              <Input
                type="checkbox"
                checked={isSameHolder}
                onChange={() => setSameHolder(!isSameHolder)}
              />{' '}
              the name of the insurer matches the name of the patient
            </Label>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>Palicy Number:</Label>
            <Input
              name="policyNumber"
              placeholder="palicy number..."
              onChange={handleTextInputChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label>Address:</Label>
            <Input
              name="holderAddress"
              placeholder="address holder..."
              value={textInputs.holderAddress}
              disabled={isSameHolder}
              onChange={handleTextInputChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>Phone number:</Label>
            <Input
              name="holderPhone"
              placeholder="phone number..."
              value={textInputs.holderPhone}
              disabled={isSameHolder}
              onChange={handleTextInputChange}
              required
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label>City:</Label>
            <Input
              name="holderCity"
              placeholder="city holder..."
              value={textInputs.holderCity}
              disabled={isSameHolder}
              onChange={handleTextInputChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label>State:</Label>
            <Select
              placeholder="state holder..."
              options={USA_STATES}
              onChange={e => setHolderState(e.label)}
              isDisabled={isSameHolder}
              defaultValue={{
                value: 'Florida',
                label: 'FL',
              }}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label>Zip:</Label>
            <Input
              name="holderZip"
              placeholder="zip holder..."
              value={textInputs.holderZip}
              disabled={isSameHolder}
              onChange={handleTextInputChange}
              required
            />
          </FormGroup>
        </Col>
      </Row>
      <Row className="line" form>
        <Col md={6}>
          <FormGroup>
            <Label>Patient to relationship to insured:</Label>
            <Select
              placeholder="..."
              options={RELATIONSHIP_LIST}
              onChange={e => setRelastionship(e.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Accident date:</Label>
            <Input
              name="accidentDate"
              type="date"
              placeholder="accident date..."
              onChange={handleTextInputChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCheckbox">
              Is patients condition related to:
            </Label>
            <div>
              <CustomInput
                type="switch"
                id="employment"
                label="EMPLOYMENT? (Courrent or Previous)"
                onChange={() => setEmployment(!isEmployment)}
                checked={isEmployment}
              />
              <Row>
                <Col md={3}>
                  <CustomInput
                    type="switch"
                    id="auto"
                    label="AUTO ACCIDENT?"
                    onChange={() => setAutoAccident(!isAutoAccident)}
                    checked={isAutoAccident}
                  />
                </Col>
                <Col className="inputState" md={2}>
                  State:
                  <Input
                    name="stateAccident"
                    bsSize="sm"
                    defaultValue="FL"
                    required
                    onChange={handleTextInputChange}
                  />
                </Col>
              </Row>
              <CustomInput
                type="switch"
                id="other"
                label="OTHER ACCIDENT?"
                checked={isOtherAccident}
                onChange={() => setOtherAccident(!isOtherAccident)}
              />
            </div>
          </FormGroup>
        </Col>
      </Row>
      <Button color="secondary" size="lg">
        Add
      </Button>
    </Form>
  )
}

T.PropTypes = {
  addPatient: T.func.isRequired,
  showMesseageSuccess: T.func.isRequired,
  showMesseageFill: T.func.isRequired,
}

export { PatientDetails }
