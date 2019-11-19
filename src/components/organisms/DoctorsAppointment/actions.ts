//import { SelectFild } from './types';
//import _ from 'lodash';

export const SET_VISITS_COUNT: string = 'SET_FIELD';
export const INCREMENT_CURRENT_VISITS_NUMBER: string =
  'INCREMENT_CURRENT_VISITS_NUMBER';

export const setVisitsCount = (count: number) => {
  return {
    type: SET_VISITS_COUNT,
    count,
  };
};

export const incrementCurrentVisitNumber = () => {
  return {
    type: INCREMENT_CURRENT_VISITS_NUMBER,
  };
};
