import * as React from 'react';
import { Form, DropdownProps } from 'semantic-ui-react';
import { DatePicker } from '../../atoms/DatePicker';
import { PatientInfo } from '../../organisms/PatientDetails/types';

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
  patient: PatientInfo;
  setPatientField: (field: any) => any;
}

const PatientBlock: React.FC<IProps> = ({ patient, setPatientField }) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setPatientField({[name]: value });
  }

  const handleSelectChange = (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
    const { name, value } = data
    setPatientField({[name]: {text: value, value: value} });
  }


  return (
    <React.Fragment>
      <Form.Group widths="equal">
        <Form.Input
          name="name"
          fluid
          label="Patient name:"
          placeholder="patient name"
          value={patient.name}
          onChange={handleTextChange}
          required
        />
        <Form.Input
          name="ssn"
          fluid
          label="Social Security Number (SSN):"
          placeholder="ssn"
          value={patient.ssn}
          onChange={handleTextChange}
          required
        />
        <Form.Select
          name="insurance"
          fluid
          label="Insurance name:"
          options={window.insuranceList}
          placeholder="insurance name"
          onChange={handleSelectChange}
          required
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="address"
          fluid
          label="Address patient:"
          placeholder="address patient"
          value={patient.address}
          onChange={handleTextChange}
          required
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="city"
          fluid
          label="City:"
          placeholder="city"
          value={patient.city}
          onChange={handleTextChange}
          required
        />
        <Form.Select
          name="state"
          fluid
          label="State:"
          options={window.states}
          placeholder="state"
          onChange={handleSelectChange}
          required
        />
        <Form.Input
          name="zip"
          fluid
          label="Zip:"
          placeholder="zip"
          value={patient.zip}
          onChange={handleTextChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Input
          name="phone"
          width={8}
          fluid
          label="Phone number:"
          placeholder="phone number"
          value={patient.phone}
          onChange={handleTextChange}
          required
        />
        <Form.Field>
          <DatePicker label='Date of Birth:' value={patient.dob} />
        </Form.Field>
        <Form.Select
          name="gender"
          width={6}
          fluid
          label="Gender:"
          options={window.genderList}
          placeholder="gender"
          onChange={handleSelectChange}
          required
        />
      </Form.Group>
    </React.Fragment>
  );
};

export { PatientBlock };
