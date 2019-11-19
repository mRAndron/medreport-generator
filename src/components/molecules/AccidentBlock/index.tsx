import * as React from 'react';
import { Form } from 'semantic-ui-react';
import { DatePicker } from '../../atoms/DatePicker';

interface IProps {
  className?: string;
}

const AccidentBlock: React.FC<IProps> = props => {
  return (
    <React.Fragment>
      <Form.Group>
        <Form.Select
          width={6}
          fluid
          label="Patient to relationship to insured:"
          options={window.relationshipList}
          placeholder="relationship"
          required
        />
        <DatePicker label="Accident date:" />
      </Form.Group>
      <Form.Group>
        <Form.Checkbox label="Employment? (Courrent or Previous)" />
      </Form.Group>
      <Form.Group>
        <Form.Checkbox label="Auto accident?" />
        <Form.Input fluid size="mini" label="State:" />
      </Form.Group>
      <Form.Group>
        <Form.Checkbox label="Other accident?" />
      </Form.Group>
    </React.Fragment>
  );
};

export { AccidentBlock };
