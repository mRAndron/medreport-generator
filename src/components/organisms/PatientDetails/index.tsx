import * as React from 'react';
import { Form } from 'semantic-ui-react';
import { PatientBlock } from '../../atoms/PatientBlock';

interface IProps {
  className?: string;
}

const PatientDetails: React.FC<IProps> = (props) => {
  return (
    <Form>
      <PatientBlock />
    </Form>
  );
};

export { PatientDetails };
