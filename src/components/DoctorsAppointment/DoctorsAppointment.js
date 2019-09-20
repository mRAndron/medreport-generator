import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap'
import T from 'prop-types'
import Select, { components } from 'react-select'
import { MultiValueLabel } from '@/components/MultiValueLabel'

import {
  COUT_DAYS,
  MIN_DAY,
  getPatientByName,
  getPatientIdByValue,
  getSelectedPatients,
  SERVICES_FIELD,
  DIAGNOSES_FIELD,
} from '@/constants/mainForm'
import { SUCCES_GENERATION } from '@/constants/app'
import { generateFile } from '@/api'

import './DoctorsAppointment.scss'

const Menu = props => {
  const optionSelectedLength = props.getValue().length || 0
  return (
    <components.Menu {...props}>
      {optionSelectedLength <= 19 ? (
        props.children
      ) : (
        <div style={{ margin: 15 }}>Max limit achieved</div>
      )}
    </components.Menu>
  )
}

const DoctorsAppointment = props => {
  const [idPatient, setIdPatient] = useState('')
  const [maxDay, setMaxDay] = useState(MIN_DAY)
  const [currentDay, setCurrentDay] = useState(MIN_DAY)
  const [pages, setPages] = useState([])
  const [doctor, setDoctor] = useState('')
  const [officeAddress, setOfficeAddress] = useState('')
  const [dateReceipt, setDateReceipt] = useState(null)

  const doctorList = window.doctorList
  const servicesList = window.servicesList
  const officeAddressList = window.officeAddressList
  const diagnosesList = window.diagnosesList
  const { patients, updatePatient, showMesseageSuccess } = props

  const selectPatientList = getSelectedPatients(patients)

  const handleChangePatient = e => {
    const patient = getPatientByName(patients, e.value)
    const patientId = getPatientIdByValue(patients, patient)
    setIdPatient(patientId)
  }

  const handleServicesChange = e => {
    updatePatient(idPatient, e, SERVICES_FIELD)
  }

  const handleDiagnosesChange = e => {
    updatePatient(idPatient, e, DIAGNOSES_FIELD)
  }

  const onSubmitForm = e => {
    e.preventDefault()
    const newPage = {
      services: patients[idPatient].services,
      diagnoses: patients[idPatient].diagnoses,
      doctor: doctor,
      officeAddress: officeAddress,
      dateReceipt: dateReceipt,
    }

    pages.push(newPage)
    setCurrentDay(currentDay + 1)

    if (currentDay === maxDay) {
      generateFile(pages, patients[idPatient])
      setCurrentDay(MIN_DAY)
      setPages([])
      showMesseageSuccess(SUCCES_GENERATION)
    }
  }

  return (
    <Form onSubmit={onSubmitForm}>
      <Row form className="input-label">
        <Col>
          <h4>Input info for {currentDay} day:</h4>
        </Col>
        <Col>
          <Label>Number of pages in report file:</Label>
          <Select
            options={COUT_DAYS}
            onChange={e => setMaxDay(e.value)}
            placeholder="choose count days..."
            defaultValue={{
              value: 1,
              label: '1',
            }}
            isDisabled={currentDay !== MIN_DAY}
          />
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label>Patient:</Label>
            <Select
              options={selectPatientList}
              onChange={handleChangePatient}
              isDisabled={currentDay !== MIN_DAY}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>Date of Receipt:</Label>
            <Input
              type="date"
              placeholder="date of receipt..."
              onChange={e => setDateReceipt(e.target.value)}
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
              options={officeAddressList}
              onChange={e => setOfficeAddress(e.value)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>Doctor:</Label>
            <Select options={doctorList} onChange={e => setDoctor(e.value)} />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label>Diagnoses:</Label>
            <Select
              isMulti
              components={{ Menu }}
              options={diagnosesList}
              className="basic-multi-select"
              classNamePrefix="select"
              closeMenuOnSelect={false}
              hideSelectedOptions={true}
              onChange={handleDiagnosesChange}
              isDisabled={!idPatient}
              value={idPatient && patients[idPatient].diagnoses}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>Selection of services rendered:</Label>
            <Select
              isMulti
              options={servicesList}
              className="basic-multi-select"
              classNamePrefix="select"
              closeMenuOnSelect={false}
              hideSelectedOptions={true}
              onChange={handleServicesChange}
              isDisabled={!idPatient}
              value={idPatient && patients[idPatient].services}
              components={{
                MultiValueLabel: props => (
                  <MultiValueLabel
                    updateCountServices={updatePatient}
                    patientInfo={{
                      idPatient: idPatient,
                      patientServices: patients[idPatient].services,
                    }}
                    defaultProps={props}
                  />
                ),
              }}
              backspaceRemovesValue={false}
            />
          </FormGroup>
        </Col>
      </Row>
      <Button color="secondary" size="lg">
        Submit
      </Button>
    </Form>
  )
}

T.PropTypes = {
  showMesseageSuccess: T.func.isRequired,
  updatePatient: T.func.isRequired,
  patients: T.Object,
}

export { DoctorsAppointment }
