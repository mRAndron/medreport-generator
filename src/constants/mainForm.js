// MAIN FORM
export const DATE_FORMAT = 'MMDDYYYY'
export const ERROR_LABEL = 'Error message'
export const ERROR_MESSAGE = 'Please, fill in all fields!'
export const TIMEOUT_MESSAGE = 3000
export const FIRST_NAV_TAB = '1'
export const SECOND_NAV_TAB = '2'

//DoctorsAppointment

export const INITIAL_STATE_DOCTORS_APPOINTMENT = {
  patientName: '',
  services: [],
  officeAddress: '',
  diagnoses: [],
  doctor: '',
  dateReceipt: null
}

// PATIENT DETAILS
export const INITIAL_STATE_PATIENT = {
  patientName: '',
  ssn: '',
  addressPatient: '',
  city: '',
  state: '',
  zip: '',
  phoneNumber: '',
  dob: null,
  gender: '',
  insuranceHolder: '',
  isSameHolder: false,
  policyNumber: ''
}

export const GENDER_LIST = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' }
]

export const USA_STATES = [
  { value: 'ALABAMA', label: 'ALABAMA'},
  { value: 'ALASKA', label: 'ALASKA'},
  { value: 'AMERICAN SAMOA', label: 'AMERICAN SAMOA'},
  { value: 'ARIZONA', label: 'ARIZONA'},
  { value: 'ARKANSAS', label: 'ARKANSAS'},
  { value: 'CALIFORNIA', label: 'CALIFORNIA'},
  { value: 'COLORADO', label: 'COLORADO'},
  { value: 'CONNECTICUT', label: 'CONNECTICUT'},
  { value: 'DELAWARE', label: 'DELAWARE'},
  { value: 'DISTRICT OF COLUMBIA', label: 'DISTRICT OF COLUMBIA'},
  { value: 'FEDERATED STATES OF MICRONESIA', label: 'FEDERATED STATES OF MICRONESIA'},
  { value: 'FLORIDA', label: 'FLORIDA'},
  { value: 'GEORGIA', label: 'GEORGIA'},
  { value: 'GUAM', label: 'GUAM'},
  { value: 'HAWAII', label: 'HAWAII'},
  { value: 'IDAHO', label: 'IDAHO'},
  { value: 'ILLINOIS', label: 'ILLINOIS'},
  { value: 'INDIANA', label: 'INDIANA'},
  { value: 'IOWA', label: 'IOWA'},
  { value: 'KANSAS', label: 'KANSAS'},
  { value: 'KENTUCKY', label: 'KENTUCKY'},
  { value: 'LOUISIANA', label: 'LOUISIANA'},
  { value: 'MAINE', label: 'MAINE'},
  { value: 'MARSHALL ISLANDS', label: 'MARSHALL ISLANDS'},
  { value: 'MARYLAND', label: 'MARYLAND'},
  { value: 'MASSACHUSETTS', label: 'MASSACHUSETTS'},
  { value: 'MICHIGAN', label: 'MICHIGAN'},
  { value: 'MINNESOTA', label: 'MINNESOTA'},
  { value: 'MISSISSIPPI', label: 'MISSISSIPPI'},
  { value: 'MISSOURI', label: 'MISSOURI'},
  { value: 'MONTANA', label: 'MONTANA'},
  { value: 'NEBRASKA', label: 'NEBRASKA'},
  { value: 'NEVADA', label: 'NEVADA'},
  { value: 'NEW HAMPSHIRE', label: 'NEW HAMPSHIRE'},
  { value: 'NEW JERSEY', label: 'NEW JERSEY'},
  { value: 'NEW MEXICO', label: 'NEW MEXICO'},
  { value: 'NEW YORK', label: 'NEW YORK'},
  { value: 'NORTH CAROLINA', label: 'NORTH CAROLINA'},
  { value: 'NORTH DAKOTA', label: 'NORTH DAKOTA'},
  { value: 'NORTHERN MARIANA ISLANDS', label: 'NORTHERN MARIANA ISLANDS'},
  { value: 'OHIO', label: 'OHIO'},
  { value: 'OKLAHOMA', label: 'OKLAHOMA'},
  { value: 'OREGON', label: 'OREGON'},
  { value: 'PALAU', label: 'PALAU'},
  { value: 'PENNSYLVANIA', label: 'PENNSYLVANIA'},
  { value: 'PUERTO RICO', label: 'PUERTO RICO'},
  { value: 'RHODE ISLAND', label: 'RHODE ISLAND'},
  { value: 'SOUTH CAROLINA', label: 'SOUTH CAROLINA'},
  { value: 'SOUTH DAKOTA', label: 'SOUTH DAKOTA'},
  { value: 'TENNESSEE', label: 'TENNESSEE'},
  { value: 'TEXAS', label: 'TEXAS'},
  { value: 'UTAH', label: 'UTAH'},
  { value: 'VERMONT', label: 'VERMONT'},
  { value: 'VIRGIN ISLANDS', label: 'VI'},
  { value: 'VIRGINIA', label: 'VIRGINIA'},
  { value: 'WASHINGTON', label: 'WASHINGTON'},
  { value: 'WEST VIRGINIA', label: 'WEST VIRGINIA'},
  { value: 'WISCONSIN', label: 'WISCONSIN'},
  { value: 'WYOMING', label: 'WYOMING' }
]