import React, { Fragment } from 'react'
import T from 'prop-types'

import Select from 'react-select'
import { Label } from 'reactstrap'

import { MenuDiagnoses } from '@/components/MenuDiagnoses'

const SelectDiagnoses = ({ changeDiagnoses, patient }) => {
  const options = window.diagnosesList

  return (
    <Fragment>
      <Label>Diagnoses:</Label>
      <Select
        isMulti
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        closeMenuOnSelect={false}
        hideSelectedOptions={true}
        onChange={changeDiagnoses}
        isDisabled={!patient.id}
        value={patient.id && patient.diagnoses}
        components={{
          Menu: props => <MenuDiagnoses defaultProps={props} />,
        }}
      />
    </Fragment>
  )
}

T.defaultProps = {
  patient: {
    id: '',
    diagnoses: [],
  },
}

T.PropTypes = {
  changeDiagnoses: T.func.isRequired,
  patient: T.Object,
}

export { SelectDiagnoses }
