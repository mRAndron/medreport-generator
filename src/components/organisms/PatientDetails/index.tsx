import * as React from 'react';
import { Form } from 'semantic-ui-react';
import { PatientBlock } from '../../molecules/PatientBlock';
import { HolderBlock } from '../../molecules/HolderBlock';

interface IProps {
  className?: string;
}

const PatientDetails: React.FC<IProps> = (props) => {
  return (
    <Form>
      <PatientBlock />
      <HolderBlock />
    </Form>
  );
};

export { PatientDetails };
