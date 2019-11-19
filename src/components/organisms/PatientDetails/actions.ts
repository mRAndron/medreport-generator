//import { SelectFild } from './types';
//import _ from 'lodash';

export const SET_FIELD: string = 'SET_FIELD';

export const setField = (field: any) => {
  return {
    type: SET_FIELD,
    field,
  };
};
