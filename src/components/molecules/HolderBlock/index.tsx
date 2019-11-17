import * as React from 'react';
import { Form } from 'semantic-ui-react';
import {DatePicker} from '../../atoms/DatePicker'

import './styles.scss'

interface IProps {
  className?: string;
}

const HolderBlock: React.FC<IProps> = (props) => {
  return (
    <div className='holder-block'>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Holder insurance name:"
          placeholder="holder name"
          required
        />
        <Form.Select
          fluid
          label="Gender:"
          options={window.genderList}
          placeholder="gender"
          required
        />
        <Form.Input
          fluid
          label="Palicy Number:"
          placeholder="palicy number"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Checkbox label='the name of the insurer matches the name of the patient'></Form.Checkbox>
      </Form.Group>
      <Form.Group>
        <Form.Input
          width={8}
          fluid
          label="Address holder:"
          placeholder="address holder"
          required
        />
        <Form.Input
          width={8}
          fluid
          label="Phone number:"
          placeholder="phone number"
          required
        />
        <Form.Field>
          <DatePicker />
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          fluid label="City:"
          placeholder="city"
          required
        />
        <Form.Select
          fluid
          label="State:"
          options={window.states}
          placeholder="state"
          required
        />
        <Form.Input fluid label="Zip:" placeholder="zip" required />
      </Form.Group>
    </div>
  );
};

export { HolderBlock };
