import * as React from 'react';
import { Button, Form, FormProps } from 'semantic-ui-react';
import { PatientBlock } from '../../molecules/PatientBlock';
import { HolderBlock } from '../../molecules/HolderBlock';
import { AccidentBlock } from '../../molecules/AccidentBlock';
import { Patient } from './types';
import { firebase } from '../../../firebase';

interface IProps {
  className?: string;
  patient: Patient;
  setField: (field: any) => any;
}

const PatientDetails: React.FC<IProps> = ({ patient, setField }) => {
  const onSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    data: FormProps
  ): void => {
    event.preventDefault();
    firebase.createPatient(patient);
    //TODO: alert
  };

  return (
    <Form onSubmit={onSubmit}>
      <PatientBlock isSameHolder={patient.isSameHolder} setField={setField} />
      <HolderBlock
        isSameHolder={patient.isSameHolder}
        holderInfo={{
          holderName: patient.holderName,
          holderAddress: patient.holderAddress,
          holderCity: patient.holderCity,
          holderZip: patient.holderZip,
          holderPhone: patient.holderPhone,
          holderState: patient.holderState,
          holderGender: patient.holderGender,
          holderDob: patient.holderDob,
        }}
        setField={setField}
      />
      <AccidentBlock setField={setField} />
      <Button>Submit</Button>
    </Form>
  );
};

export { PatientDetails };
