import { SET_PATIENT_FIELD } from './actions';
import { Patient } from './types';

const initialState: Patient = {
  patientInfo: {
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
  },
  holderInfo: {
    holderName: '',
    holderAddress: '',
    holderCity: 'Jacksonville',
    holderZip: '',
    holderPhone: '',
    holderState: { text: 'FL', value: 'FL' },
    holderGender: { text: '', value: '' },
  },
  accidentInfo: {
    accidentDate: null,
    stateAccident: 'FL',
    relastionship: { text: '', value: '' },
    isEmployment: false,
    isAutoAccident: true,
    isOtherAccident: false,
  },
  isSameHolder: false,
};

const patientDetails = (state: Patient = initialState, action: any) => {
  switch (action.type) {
    case SET_PATIENT_FIELD:
      return {
        ...state,
        patientInfo: { ...state.patientInfo, ...action.field },
      };

    default:
      return state;
  }
};

export { patientDetails };
