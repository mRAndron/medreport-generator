import React, { useState } from 'react'
import T from 'prop-types'

import { Tooltip, Label } from 'reactstrap'
import { components } from 'react-select'

import { SERVICES_FIELD } from '@/constants/mainForm'

const MultiValueLabel = props => {
  const { updateCountServices, patientInfo } = props
  const { data } = props.defaultProps

  const [isOpen, setToggle] = useState(false)
  const [quantity, setQuantity] = useState(data.quantity)

  const handleToggle = () => {
    if (isOpen) {
      setQuantity(data.quantity)
    }
    setToggle(!isOpen)
  }

  const checkVaild = value =>
    value === '1/2' || value === '0.5' || value === '1' || value === '2'

  const handleInput = ({ target: { value } }) => {
    const { id, services } = patientInfo

    if (checkVaild(value)) {
      const changedServices = services.map(service => {
        if (service._id === data._id) {
          return { ...service, quantity: value }
        } else {
          return service
        }
      })
      setQuantity(value)
      updateCountServices(id, changedServices, SERVICES_FIELD)
    } else {
      setQuantity(value)
    }
  }

  return (
    <div id={data._id}>
      <components.MultiValueLabel {...props.defaultProps} />
      <Tooltip
        placement="top"
        isOpen={isOpen}
        autohide={false}
        target={data._id}
        toggle={handleToggle}
      >
        <Label for="quantitySelect">Quantity:</Label>
        <input id="quantitySelect" onChange={handleInput} value={quantity} />
      </Tooltip>
    </div>
  )
}

T.defaultProps = {
  patient: {
    id: '',
    services: [],
  },
}

T.PropTypes = {
  updateCountServices: T.func.isRequired,
  patientInfo: T.Object,
}

export { MultiValueLabel }
