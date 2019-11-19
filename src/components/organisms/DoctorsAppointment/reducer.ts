import { INCREMENT_CURRENT_VISITS_NUMBER, SET_VISITS_COUNT } from './actions';
import { MIN_VISITS_COUNT } from './constants';
import { DoctorsAppointment } from './types';

const initialState: DoctorsAppointment = {
  visitsCount: MIN_VISITS_COUNT,
  currentVisitNubmer: MIN_VISITS_COUNT,
};

const doctorsAppointment = (
  state: DoctorsAppointment = initialState,
  action: any
) => {
  switch (action.type) {
    case SET_VISITS_COUNT:
      return {
        ...state,
        visitsCount: action.count,
      };

    case INCREMENT_CURRENT_VISITS_NUMBER:
      return {
        ...state,
        currentVisitNubmer:
          state.currentVisitNubmer < state.visitsCount
            ? ++state.currentVisitNubmer
            : MIN_VISITS_COUNT,
      };

    default:
      return state;
  }
};

export { doctorsAppointment };
