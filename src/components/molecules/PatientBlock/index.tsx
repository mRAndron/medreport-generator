import * as React from 'react';
import { Form, DropdownProps } from 'semantic-ui-react';
import { DatePicker } from '../../atoms/DatePicker';
import { HOLDER_FIELDS } from '../../organisms/PatientDetails/constants'

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
  isSameHolder: boolean;
  setField: (field: any) => any;
}

const PatientBlock: React.FC<IProps> = ({ isSameHolder, setField }) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setField({ [name]: value });
    if (isSameHolder && checkSameHolderFields(name)) {
      const fieldName = `holder${capitalizeFirstLetter(name)}`;
      setField({ [fieldName]: value });
    }
  }

  const handleSelectChange = (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps): void => {
    const { name, value } = data
    setField({ [name]: { text: value, value: value } });
    if (isSameHolder && checkSameHolderFields(name)) {
      const fieldName = `holder${capitalizeFirstLetter(name)}`;
      setField({ [fieldName]: { text: value, value: value } });
    }
  }

  const handleDateChange = (event: any, data: any): void => {
    const { name, value } = data
    setField({ [name]: value });
    if (isSameHolder && checkSameHolderFields(name)) {
      const fieldName = `holder${capitalizeFirstLetter(name)}`;
      setField({ [fieldName]: value });
    }
  }

  const checkSameHolderFields = (field: string): boolean => HOLDER_FIELDS.includes(field);

  const capitalizeFirstLetter = (field: string): string => field.charAt(0).toUpperCase() + field.slice(1);

  return (
    <React.Fragment>
      <Form.Group widths="equal">
        <Form.Input
          name="name"
          fluid
          label="Patient name:"
          placeholder="patient name"
          onChange={handleTextChange}
          required
        />
        <Form.Input
          name="ssn"
          fluid
          label="Social Security Number (SSN):"
          placeholder="ssn"
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
          defaultValue='STATEFARM'
          required
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="address"
          fluid
          label="Address patient:"
          placeholder="address patient"
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
          onChange={handleTextChange}
          defaultValue='Jacksonville'
          required
        />
        <Form.Select
          name="state"
          fluid
          label="State:"
          options={window.states}
          placeholder="state"
          onChange={handleSelectChange}
          defaultValue="FL"
          required
        />
        <Form.Input
          name="zip"
          fluid
          label="Zip:"
          placeholder="zip"
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
          onChange={handleTextChange}
          required
        />
        <Form.Field>
          <DatePicker
            name="dob"
            label='Date of Birth:'
            onChange={handleDateChange}
          />
        </Form.Field>
        <Form.Select
          name="gender"
          width={6}
          fluid
          label="Gender:"
          options={window.genderList}
          placeholder="gender"
          onChange={handleSelectChange}
          defaultValue='Male'
          required
        />
      </Form.Group>
    </React.Fragment>
  );
};

export { PatientBlock };
