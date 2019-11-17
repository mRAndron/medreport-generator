import * as React from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';

import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

interface IProps {
  className?: string;
  label?: string;
  callback?: () => void;
}

const DatePicker: React.FC<IProps> = ({label, callback}) => {
  return (
    <SemanticDatepicker
      type="basic"
      label={label}
      locale="en-US"
      onChange={callback}
      required
    />
  );
};

export { DatePicker };
