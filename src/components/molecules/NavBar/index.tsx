import * as React from 'react';
import { Tab } from 'semantic-ui-react';
import PatientDetails from '../../organisms/PatientDetails/container';
import DoctorsAppointment from '../../organisms/DoctorsAppointment/container';

const panes = [
  {
    menuItem: "Doctor's Appointment",
    render: () => (
      <Tab.Pane>
        <DoctorsAppointment />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Patient Details',
    render: () => (
      <Tab.Pane>
        <PatientDetails />
      </Tab.Pane>
    ),
  },
];

const NavBar = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
);

export { NavBar };
