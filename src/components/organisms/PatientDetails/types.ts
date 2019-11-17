export interface Patient {
  patientInfo: PatientInfo;
  holderInfo: HolderInfo;
  accidentInfo: AccidentInfo;
  isSameHolder: boolean;
}

export interface SelectFild {
  text: string;
  value: string;
}

export interface HolderInfo {
  holderName: string;
  holderAddress: string;
  holderCity: string;
  holderZip: string;
  holderPhone: string;
  holderState: SelectFild;
  holderGender: SelectFild;
}

export interface PatientInfo {
  name: string;
  ssn: string;
  address: string;
  city: string;
  zip: string;
  phone: string;
  dob: null | Date;
  insurance: SelectFild;
  state: SelectFild;
  gender: SelectFild;
}

export interface AccidentInfo {
  isEmployment: boolean;
  isAutoAccident: boolean;
  isOtherAccident: boolean;
  stateAccident: string;
  relastionship: SelectFild;
  accidentDate: null | Date;
}
