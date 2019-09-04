import React /* useState */ from 'react'
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap'

//import moment from 'moment'
import Select from 'react-select'
import './DoctorsAppointment.scss'

const DoctorsAppointment = props => {
  return (
    <Form>
      <Row form className="input-label">
        <Col>
          <h4>Input info for -- day:</h4>
        </Col>
        <Col>
          <Label>Number of pages in report file:</Label>
          <Select
          /*               options={COUT_DAYS}
              onChange={e => this.props.setCountDays(e.value)}
              placeholder="choose count days..."
              defaultValue={{
                value: 1,
                label: '1',
              }}
              isDisabled={day !== MIN_DAY} */
          />
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label>Patient:</Label>
            <Select
            /*                 options={selectPatientList}
                onChange={this.onPatientChange}
                isDisabled={day !== MIN_DAY} */
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>Date of Receipt:</Label>
            <Input
              type="date"
              placeholder="date of receipt..."
              //onChange={this.onDataReceiptbChange}
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
            /* options={officeAddressList}
                onChange={this.onOfficeAddress} */
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>Doctor:</Label>
            <Select /* options={doctorList} onChange={this.onDoctorChange} */ />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label>Diagnoses:</Label>
            <Select
              isMulti
              /*                 name="colors"
                options={diagnosesList}
                className="basic-multi-select"
                classNamePrefix="select"
                closeMenuOnSelect={false}
                hideSelectedOptions={true}
                onChange={this.onDiagnosesChange}
                isDisabled={isPatientSelected}
                value={
                  selectedPatientId && patientsList[selectedPatientId].diagnoses
                } */
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>Selection of services rendered:</Label>
            <Select
              isMulti
              /*                 name="colors"
                options={servicesList}
                className="basic-multi-select"
                classNamePrefix="select"
                closeMenuOnSelect={false}
                hideSelectedOptions={true}
                onChange={this.onServicesChange}
                isDisabled={isPatientSelected}
                value={
                  selectedPatientId && patientsList[selectedPatientId].services
                } */
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

export { DoctorsAppointment }
