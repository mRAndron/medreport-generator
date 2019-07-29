import React, { Component } from 'react'
import { Form, TabContent, TabPane, Row, Col, Button } from 'reactstrap'
import PatientDetails from '../PatientDetails/PatientDetails'
import { FIRST_NAV_TAB  } from '../../constants/mainForm'
import NavBar from '../NavBar/NavBar'
import PropTypes from 'prop-types'
import './MainForm.scss'

class MainForm extends Component {
  static propTypes = {
    addPatien: PropTypes.func.isRequired,
    patients: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      activeTab: FIRST_NAV_TAB
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  render() {
    const { activeTab } = this.state
    return (
      <Form>
        <h2>Medrepot-generator</h2>
        <NavBar toggle={ this.toggle } tabPosition={ activeTab } />
        <TabContent activeTab={ activeTab }>
          <TabPane tabId='1'>
            <Row>
              <Col sm='12'>
                {
                  Object.entries(this.props.patients).map(([key, val]) => {
                    return (
                      <p key={key}>{ val.patientName }</p>
                    )
                  })
                }
                <Button onClick={ this.props.addPatien }>Add</Button>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='2'>
            <Row>
              <Col sm='12'>
                <PatientDetails addPatien={ this.props.addPatien } />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Form>
    )
  }
}

export default MainForm