import * as React from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';

import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

interface IProps {
  className?: string;
  label?: string;
  value?: Date | Date[] | null | undefined;
  callback?: () => void;
}

const DatePicker: React.FC<IProps> = ({ label, value, callback }) => {
  return (
    <SemanticDatepicker
      type="basic"
      label={label}
      locale="en-US"
      onChange={callback}
      value={value}
      required
    />
  );
};

export { DatePicker };
