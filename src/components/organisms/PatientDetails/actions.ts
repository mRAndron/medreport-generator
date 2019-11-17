//import { SelectFild } from './types';
//import _ from 'lodash';

export const SET_PATIENT_FIELD: string = 'SET_PATIENT_FIELD';

export const setPatientField = (field: any) => {
  return {
    type: SET_PATIENT_FIELD,
    field,
  };
};
