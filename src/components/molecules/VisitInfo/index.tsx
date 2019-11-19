import * as React from 'react';
import { Dropdown, DropdownProps, Form } from 'semantic-ui-react';
import { DatePicker } from '../../atoms/DatePicker';

interface IProps {
  className?: string;
  setField: (field: any) => any;
}

const VisitInfo: React.FC<IProps> = ({ setField }) => {
  const handleSelectChange = (
    event: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ): void => {
    const { name, value } = data;
    setField({ [name]: { text: value, value: value } });
  };

  const handleDateChange = (event: any, data: any): void => {
    const { name, value } = data;
    setField({ [name]: value });
  };

  return (
    <React.Fragment>
      <Form.Group widths="equal">
        <Form.Select
          name="patient"
          fluid
          label="Patient:"
          options={window.relationshipList}
          onChange={handleSelectChange}
          required
        />
        <DatePicker
          name="receiptDate"
          label="Date of Receipt:"
          onChange={handleDateChange}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Select
          name="office"
          fluid
          label="Office address:"
          options={window.relationshipList}
          onChange={handleSelectChange}
          required
        />
        <Form.Select
          name="doctor"
          fluid
          label="Doctor:"
          options={window.relationshipList}
          onChange={handleSelectChange}
          required
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Dropdown
          label="Diagnoses:"
          fluid
          multiple
          selection
          options={window.diagnosesList}
        />
        <Dropdown
          label="Selection of services rendered:"
          fluid
          multiple
          selection
          options={window.servicesList}
        />
      </Form.Group>
    </React.Fragment>
  );
};

export { VisitInfo };
