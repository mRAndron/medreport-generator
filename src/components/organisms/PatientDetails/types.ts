export interface Patient {
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
  holderName: string;
  holderAddress: string;
  holderCity: string;
  holderZip: string;
  holderPhone: string;
  holderState: SelectFild;
  holderGender: SelectFild;
  holderDob: null | Date;
  isSameHolder: boolean;
  isEmployment: boolean;
  isAutoAccident: boolean;
  isOtherAccident: boolean;
  stateAccident: string;
  relastionship: SelectFild;
  accidentDate: null | Date;
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
  holderDob: null | Date;
}
