import * as React from 'react';
import { Form, CheckboxProps, DropdownProps } from 'semantic-ui-react';
import { DatePicker } from '../../atoms/DatePicker';

interface IProps {
  className?: string;
  setField: (field: any) => any;
}

const AccidentBlock: React.FC<IProps> = ({ setField }) => {
  const handleTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setField({ [name]: value });
  };

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

  const handleCheckBoxChange = (
    event: React.FormEvent<HTMLInputElement>,
    data: CheckboxProps
  ): void => {
    const { name, checked } = data;
    setField({ [`${name}`]: checked });
  };

  return (
    <React.Fragment>
      <Form.Group>
        <Form.Select
          name="relationship"
          width={6}
          fluid
          label="Patient to relationship to insured:"
          options={window.relationshipList}
          placeholder="relationship"
          onChange={handleSelectChange}
          required
        />
        <DatePicker
          name="accidentDate"
          label="Accident date:"
          onChange={handleDateChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Checkbox
          name="isEmployment"
          label="Employment? (Courrent or Previous)"
          onChange={handleCheckBoxChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Checkbox
          name="isAutoAccident"
          label="Auto accident?"
          onChange={handleCheckBoxChange}
          defaultChecked={true}
        />
        <Form.Input
          name="stateAccident"
          fluid
          size="mini"
          label="State:"
          onChange={handleTextChange}
          defaultValue="FL"
        />
      </Form.Group>
      <Form.Group>
        <Form.Checkbox
          name="isOther"
          label="Other accident?"
          onChange={handleCheckBoxChange}
        />
      </Form.Group>
    </React.Fragment>
  );
};

export { AccidentBlock };
