import React from 'react'
import T from 'prop-types'

import classnames from 'classnames'

import { Nav, NavItem, NavLink } from 'reactstrap'

export { FIRST_NAV_TAB, SECOND_NAV_TAB } from '../../constants/mainForm'

const FIRST_NAV_TAB = '1' // DO EXPORT
const SECOND_NAV_TAB = '2' // DO EXPORT

const NavBar = ({ toggle, tabPosition }) => {
  return (
    <Nav tabs>
      <NavItem>
        <NavLink
          className={classnames({
            active: tabPosition === FIRST_NAV_TAB,
          })}
          onClick={() => toggle(FIRST_NAV_TAB)}
        >
          Doctor's Appointment
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({
            active: tabPosition === SECOND_NAV_TAB,
          })}
          onClick={() => toggle(SECOND_NAV_TAB)}
        >
          Patient Details
        </NavLink>
      </NavItem>
    </Nav>
  )
}

T.propTypes = {
  toggle: T.func.isRequired,
  tabPosition: T.string.isRequired,
}

export { NavBar }
