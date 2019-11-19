import * as React from 'react';
import { Form } from 'semantic-ui-react';
import { PatientBlock } from '../../molecules/PatientBlock';
import { HolderBlock } from '../../molecules/HolderBlock';
import { AccidentBlock } from '../../molecules/AccidentBlock';
import { HolderInfo } from './types';

interface IProps {
  className?: string;
  isSameHolder: boolean;
  holderInfo: HolderInfo;
  setField: (field: any) => any;
}

const PatientDetails: React.FC<IProps> = ({
  isSameHolder,
  holderInfo,
  setField,
}) => {
  return (
    <Form>
      <PatientBlock isSameHolder={isSameHolder} setField={setField} />
      <HolderBlock
        isSameHolder={isSameHolder}
        holderInfo={holderInfo}
        setField={setField}
      />
      <AccidentBlock setField={setField} />
    </Form>
  );
};

export { PatientDetails };
