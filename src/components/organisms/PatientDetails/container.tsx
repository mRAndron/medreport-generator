import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../../../store/rootReducer';
import { setField } from './actions';

import { PatientDetails } from './index';

const mapStateToProps = (state: AppState) => ({
  patient: state.patientDetails,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setField: bindActionCreators(setField, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientDetails);
