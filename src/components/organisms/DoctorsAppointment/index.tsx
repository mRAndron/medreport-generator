import * as React from 'react';
import { Button, Form, FormProps } from 'semantic-ui-react';
import { VisitInfo } from '../../molecules/VisitInfo';
import { VisitControl } from '../../atoms/VisitControl';

interface IProps {
  className?: string;
  currentVisitNumber: number;
  setField: (field: any) => void;
  setVisitsCount: (count: number) => void;
  incrementCurrentVisitNumber: () => void;
}

const DoctorsAppointment: React.FC<IProps> = ({
  currentVisitNumber,
  incrementCurrentVisitNumber,
  setField,
  setVisitsCount,
}) => {
  const onSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    data: FormProps
  ): void => {
    event.preventDefault();
    incrementCurrentVisitNumber();
  };

  return (
    <Form onSubmit={onSubmit}>
      <VisitControl
        visitNumber={currentVisitNumber}
        onChange={setVisitsCount}
      />
      <VisitInfo setField={setField} />
      <Button>Submit</Button>
    </Form>
  );
};

export { DoctorsAppointment };
