import React from 'react'
import T from 'prop-types'

import { components } from 'react-select'

const MAX_COUNT = 19

const MenuDiagnoses = ({ defaultProps }) => {
  const optionSelectedLength = defaultProps.getValue().length || 0
  return (
    <components.Menu {...defaultProps}>
      {optionSelectedLength < MAX_COUNT ? (
        defaultProps.children
      ) : (
        <div style={{ margin: 15 }}>Max limit achieved</div>
      )}
    </components.Menu>
  )
}

T.defaultProps = {
  defaultProps: {},
}

T.PropTypes = {
  defaultProps: T.Object,
}

export { MenuDiagnoses }
