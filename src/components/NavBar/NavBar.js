import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import PropTypes from 'prop-types'
import classnames from 'classnames'
export { FIRST_NAV_TAB, SECOND_NAV_TAB } from '../../constants/mainForm'

const FIRST_NAV_TAB = '1' // DO EXPORT
const SECOND_NAV_TAB = '2' // DO EXPORT

class NavBar extends Component {
  static propTypes = {
    toggle: PropTypes.func.isRequired,
    tabPosition: PropTypes.string.isRequired,
  }

  render() {
    const { toggle, tabPosition } = this.props
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
}

export default NavBar
