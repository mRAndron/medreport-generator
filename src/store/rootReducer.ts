import { combineReducers } from 'redux';
import { doctorsAppointment } from '../components/organisms/DoctorsAppointment/reducer';
import { patientDetails } from '../components/organisms/PatientDetails/reducer';

export const rootReducer = combineReducers({
  patientDetails,
  doctorsAppointment,
});

export type AppState = ReturnType<typeof rootReducer>;
