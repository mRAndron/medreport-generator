import * as React from 'react';
import { Form } from 'semantic-ui-react';
import { PatientBlock } from '../../molecules/PatientBlock';
import { HolderBlock } from '../../molecules/HolderBlock';
import { AccidentBlock } from '../../molecules/AccidentBlock';
import { PatientInfo } from './types';

interface IProps {
  className?: string;
  patient: PatientInfo;
  setPatientField: (field: any) => void;
}

const PatientDetails: React.FC<IProps> = ({ patient, setPatientField }) => {
  return (
    <Form>
      <PatientBlock patient={patient} setPatientField={setPatientField} />
      <HolderBlock />
      <AccidentBlock />
    </Form>
  );
};

export { PatientDetails };
