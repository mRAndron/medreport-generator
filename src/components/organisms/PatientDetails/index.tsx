import * as React from 'react';
import { Form } from 'semantic-ui-react';
import { PatientBlock } from '../../molecules/PatientBlock';
import { HolderBlock } from '../../molecules/HolderBlock';
import { AccidentBlock } from '../../molecules/AccidentBlock';

interface IProps {
  className?: string;
}

const PatientDetails: React.FC<IProps> = (props) => {
  return (
    <Form>
      <PatientBlock />
      <HolderBlock />
      <AccidentBlock />
    </Form>
  );
};

export { PatientDetails };
