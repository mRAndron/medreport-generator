import * as React from 'react';
import { Form, CheckboxProps, DropdownProps } from 'semantic-ui-react';
import { DatePicker } from '../../atoms/DatePicker';
import { HolderInfo } from '../../organisms/PatientDetails/types';

import './styles.scss';

interface IProps {
  className?: string;
  isSameHolder: boolean;
  holderInfo: HolderInfo;
  setField: (field: any) => any;
}

const HolderBlock: React.FC<IProps> = ({
  isSameHolder,
  holderInfo,
  setField,
}) => {
  const handleTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setField({ [name]: value });
  };

  const handleSelectChange = (
    event: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ): void => {
    const { name, value } = data;
    setField({ [name]: { text: value, value: value } });
  };

  const handleDateChange = (event: any, data: any): void => {
    const { name, value } = data;
    setField({ [name]: value });
  };

  const handleCheckBoxChange = (
    event: React.FormEvent<HTMLInputElement>,
    data: CheckboxProps
  ): void => {
    const { checked } = data;
    setField({ isSameHolder: checked });
  };

  return (
    <div className="holder-block">
      <Form.Group widths="equal">
        <Form.Input
          fluid
          name="holderName"
          label="Holder insurance name:"
          placeholder="holder name"
          value={holderInfo.holderName}
          onChange={handleTextChange}
          disabled={isSameHolder}
          required
        />
        <Form.Select
          fluid
          name="holderGender"
          label="Gender:"
          options={window.genderList}
          placeholder="gender"
          value={holderInfo.holderGender.text}
          onChange={handleSelectChange}
          disabled={isSameHolder}
          required
        />
        <Form.Input
          fluid
          name="palicyNumber"
          label="Palicy Number:"
          placeholder="palicy number"
          onChange={handleTextChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Checkbox
          name="isSameHolder"
          label="the name of the insurer matches the name of the patient"
          defaultChecked={true}
          onChange={handleCheckBoxChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Input
          width={8}
          fluid
          name="holderAddress"
          label="Address holder:"
          placeholder="address holder"
          value={holderInfo.holderAddress}
          onChange={handleTextChange}
          disabled={isSameHolder}
          required
        />
        <Form.Input
          width={8}
          fluid
          name="holderPhone"
          label="Phone number:"
          placeholder="phone number"
          value={holderInfo.holderPhone}
          onChange={handleTextChange}
          disabled={isSameHolder}
          required
        />
        <Form.Field>
          <DatePicker
            name="holderDob"
            label="Date of Birth:"
            onChange={handleDateChange}
            value={holderInfo.holderDob}
            disabled={isSameHolder}
          />
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          name="holderCity"
          label="City:"
          placeholder="city"
          value={holderInfo.holderCity}
          onChange={handleTextChange}
          disabled={isSameHolder}
          required
        />
        <Form.Select
          fluid
          name="holderState"
          label="State:"
          options={window.states}
          placeholder="state"
          value={holderInfo.holderState.value}
          onChange={handleSelectChange}
          disabled={isSameHolder}
          required
        />
        <Form.Input
          fluid
          name="holderZip"
          label="Zip:"
          placeholder="zip"
          value={holderInfo.holderZip}
          disabled={isSameHolder}
          required
        />
      </Form.Group>
    </div>
  );
};

export { HolderBlock };
