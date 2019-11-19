import { SET_FIELD } from './actions';
import { Patient } from './types';

const initialState: Patient = {
  name: '',
  ssn: '',
  address: '',
  city: 'Jacksonville',
  zip: '',
  phone: '',
  dob: null,
  state: { text: 'Florida', value: 'FL' },
  gender: { text: 'Male', value: 'Male' },
  insurance: { text: 'STATEFARM', value: 'STATEFARM' },
  holderName: '',
  holderAddress: '',
  holderCity: 'Jacksonville',
  holderZip: '',
  holderPhone: '',
  holderState: { text: 'Florida', value: 'FL' },
  holderGender: { text: 'Male', value: 'Male' },
  holderDob: null,
  accidentDate: null,
  stateAccident: 'FL',
  relationship: { text: 'Selа', value: 'Selа' },
  isEmployment: false,
  isAutoAccident: true,
  isOtherAccident: false,
  isSameHolder: true,
};

const patientDetails = (state: Patient = initialState, action: any) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        ...action.field,
      };

    default:
      return state;
  }
};

export { patientDetails };
