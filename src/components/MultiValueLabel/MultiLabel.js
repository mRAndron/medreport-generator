import React, { useState } from 'react'
import { Tooltip, Label } from 'reactstrap'
//import T from 'prop-types'
import { components } from 'react-select'

const regx = /^\d*[.]?\d*$/

const MultiValueLabel = props => {
  const [isOpen, setToggle] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const handleToggle = () => {
    setToggle(!isOpen)
  }

  const handleInput = ({ target: { value } }) => {
    if (regx.test(value) && value !== '0') {
      setQuantity(value)
    } else {
      setQuantity(1)
    }
  }

  const { data } = props

  return (
    <div id={data._id}>
      <components.MultiValueLabel {...props} />
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

export { MultiValueLabel }
