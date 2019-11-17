import * as React from 'react';
import { Form } from 'semantic-ui-react';
import {DatePicker} from '../../atoms/DatePicker'

declare global {
  interface Window {
    insuranceList: any;
    states: any;
    genderList: any;
    relationshipList: any;
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
      <Form.Group>
        <Form.Input
          width={8}
          fluid
          label="Phone number:"
          placeholder="phone number"
          required
        />
        <Form.Field>
          <DatePicker label='Date of Birth:' />
        </Form.Field>
        <Form.Select
          width={6}
          fluid
          label="Gender:"
          options={window.genderList}
          placeholder="gender"
          required
        />
      </Form.Group>
    </React.Fragment>
  );
};

export { PatientBlock };
