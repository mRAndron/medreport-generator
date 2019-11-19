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
  state: { text: 'FL', value: 'FL' },
  gender: { text: '', value: '' },
  insurance: { text: '', value: '' },
  holderName: '',
  holderAddress: '',
  holderCity: 'Jacksonville',
  holderZip: '',
  holderPhone: '',
  holderState: { text: 'FL', value: 'FL' },
  holderGender: { text: '', value: '' },
  holderDob: null,
  accidentDate: null,
  stateAccident: 'FL',
  relastionship: { text: '', value: '' },
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
