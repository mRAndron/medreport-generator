import React, { Fragment } from 'react'
import T from 'prop-types'

import Select from 'react-select'
import { Label } from 'reactstrap'

import { MultiValueLabel } from '@/components/MultiValueLabel'

const SelectServices = ({ updateServices, onChange, patient }) => {
  const options = window.servicesList

  return (
    <Fragment>
      <Label>Selection of services rendered:</Label>
      <Select
        isMulti
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        closeMenuOnSelect={false}
        hideSelectedOptions={true}
        onChange={onChange}
        isDisabled={!patient.id}
        value={patient.id && patient.services}
        components={{
          MultiValueLabel: props => (
            <MultiValueLabel
              updateCountServices={updateServices}
              patientInfo={{ ...patient }}
              defaultProps={props}
            />
          ),
        }}
        backspaceRemovesValue={false}
      />
    </Fragment>
  )
}

T.defaultProps = {
  patient: {
    id: '',
    services: [],
  },
}

T.PropTypes = {
  updateServices: T.func.isRequired,
  onChange: T.func.isRequired,
  patient: T.Object,
}

export { SelectServices }
