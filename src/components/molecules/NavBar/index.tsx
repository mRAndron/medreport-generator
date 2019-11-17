import * as React from 'react';
import { Tab } from 'semantic-ui-react';

const panes = [
  {
    menuItem: "Doctor's Appointment",
    render: () => <Tab.Pane>Doctor's Appointment</Tab.Pane>,
  },
  {
    menuItem: 'Patient Details',
    render: () => <Tab.Pane>Patient Details</Tab.Pane>,
  },
];

const NavBar = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
);

export { NavBar };
