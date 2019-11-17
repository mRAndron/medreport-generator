import { combineReducers } from 'redux';
import { patientDetails } from '../components/organisms/PatientDetails/reducer';

export const rootReducer = combineReducers({
  patientDetails,
});

export type AppState = ReturnType<typeof rootReducer>;
