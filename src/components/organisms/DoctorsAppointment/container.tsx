import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../../../store/rootReducer';
import { incrementCurrentVisitNumber, setVisitsCount } from './actions';
import { setField } from '../PatientDetails/actions';

import { DoctorsAppointment } from './index';

const mapStateToProps = (state: AppState) => ({
  currentVisitNumber: state.doctorsAppointment.currentVisitNubmer,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setField: bindActionCreators(setField, dispatch),
  setVisitsCount: bindActionCreators(setVisitsCount, dispatch),
  incrementCurrentVisitNumber: bindActionCreators(
    incrementCurrentVisitNumber,
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorsAppointment);
