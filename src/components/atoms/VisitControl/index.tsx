import * as React from 'react';
import { DropdownProps, Form } from 'semantic-ui-react';
import { VISITS_COUNT_LIST } from './constants';

interface IProps {
  className?: string;
  visitNumber: number;
  onChange: (count: number) => void;
}

const VisitControl: React.FC<IProps> = ({ onChange, visitNumber }) => {
  const handleOnChange = (
    event: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => onChange(Number(data.value));

  return (
    <React.Fragment>
      <Form.Group widths="equal">
        <Form.Field>
          <h2>Input info for {visitNumber} visit:</h2>
        </Form.Field>
        <Form.Select
          label="Number of visit in report file:"
          options={VISITS_COUNT_LIST}
          onChange={handleOnChange}
          disabled={visitNumber > 1}
        />
      </Form.Group>
    </React.Fragment>
  );
};

export { VisitControl };
