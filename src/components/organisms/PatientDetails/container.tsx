import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../../../store/rootReducer';
import { setField } from './actions';

import { PatientDetails } from './index';

const mapStateToProps = (state: AppState) => ({
  holderInfo: {
    holderName: state.patientDetails.holderName,
    holderAddress: state.patientDetails.holderAddress,
    holderCity: state.patientDetails.holderCity,
    holderZip: state.patientDetails.holderZip,
    holderPhone: state.patientDetails.holderPhone,
    holderState: state.patientDetails.holderState,
    holderGender: state.patientDetails.holderGender,
    holderDob: state.patientDetails.holderDob,
  },
  isSameHolder: state.patientDetails.isSameHolder,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setField: bindActionCreators(setField, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientDetails);
