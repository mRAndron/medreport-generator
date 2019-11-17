import * as React from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';

import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

interface IProps {
  className?: string;
  callback?: () => void;
}

const DatePicker: React.FC<IProps> = ({callback}) => {
  return (
    <SemanticDatepicker
      type="basic"
      label="Date of Birth:"
      locale="en-US"
      onChange={callback}
      required
    />
  );
};

export { DatePicker };
