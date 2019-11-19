import * as React from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';

import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

interface IProps {
  className?: string;
  label?: string;
  name?: string;
  value?: Date | Date[] | null | undefined;
  disabled?: boolean;
  onChange?: (event: any, data: any) => void;
}

const DatePicker: React.FC<IProps> = ({
  name,
  disabled,
  label,
  value,
  onChange,
}) => {
  return (
    <SemanticDatepicker
      name={name}
      type="basic"
      label={label}
      locale="en-US"
      onChange={onChange}
      value={value}
      disabled={disabled}
      required
    />
  );
};

export { DatePicker };
