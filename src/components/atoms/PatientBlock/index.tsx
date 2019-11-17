import * as React from 'react';
import { Form } from 'semantic-ui-react';

declare global {
  interface Window {
    insuranceList: any;
    states: any;
  }
}

interface IProps {
  className?: string;
}

const PatientBlock: React.FC<IProps> = (props) => {
  return (
    <React.Fragment>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Patient name:"
          placeholder="patient name"
          required
        />
        <Form.Input
          fluid
          label="Social Security Number (SSN):"
          placeholder="ssn"
          required
        />
        <Form.Select
          fluid
          label="Insurance name:"
          options={window.insuranceList}
          placeholder="insurance name"
          required
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Address patient:"
          placeholder="address patient"
          required
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input fluid label="City:" placeholder="city" required />
        <Form.Select
          fluid
          label="State:"
          options={window.states}
          placeholder="state"
          required
        />
        <Form.Input fluid label="Zip:" placeholder="zip" required />
      </Form.Group>
    </React.Fragment>
  );
};

export { PatientBlock };
