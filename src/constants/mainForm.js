// MAIN FORM
export const DATE_FORMAT = 'MMDDYYYY'
export const ERROR_LABEL = 'Error message'
export const ERROR_MESSAGE = 'Please, fill in all fields!'
export const SUCCES_MESSAGE = 'You add new patient'
export const SUCCES_LABEL = 'Success'
export const SUCCES_GENERATION = 'Generation'
export const TIMEOUT_MESSAGE = 3000
export const FIRST_NAV_TAB = '1'
export const SECOND_NAV_TAB = '2'
export const SERVICES_FIELD = 'services'
export const DIAGNOSES_FIELD = 'diagnoses'
export const TABLE_NAME = 'patients'
export const MAX_DAY = 7
export const MIN_DAY = 1

//DoctorsAppointment

export const INITIAL_STATE_DOCTORS_APPOINTMENT = {
  patientName: '',
  officeAddress: '',
  doctorName: '',
  doctorValue: {},
  isPatientSelected: true,
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
  accidentDate: null,
  gender: '',
  insuranceHolder: '',
  phoneNumberHolder: '',
  zipHolder: '',
  cityHolder: '',
  stateHolder: '',
  addressHolder: '',
  isSameHolder: true,
  policyNumber: '',
  diagnoses: [],
  services: [],
  relastionship: '',
  isEmployment: false,
  isAutoAccident: true,
  isOtherAccident: false,
  insurance: '',
  stateAccident: 'FL'
}

export const GENDER_LIST = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' }
]

export const INSURANCE_LIST = [
    { value: 'STATEFARM', label: 'STATEFARM' },
    { value: 'GEICO', label: 'GEICO' }
]

export const RELATIONSHIP_LIST = [
  { value: 'Selа', label: 'Selа' },
  { value: 'Spouse', label: 'Spouse' },
  { value: 'Child', label: 'Child' },
  { value: 'Other', label: 'Other' }
]

export const USA_STATES = [
  {
      value: "Alabama",
      label: "AL"
  },
  {
      value: "Alaska",
      label: "AK"
  },
  {
      value: "American Samoa",
      label: "AS"
  },
  {
      value: "Arizona",
      label: "AZ"
  },
  {
      value: "Arkansas",
      label: "AR"
  },
  {
      value: "California",
      label: "CA"
  },
  {
      value: "Colorado",
      label: "CO"
  },
  {
      value: "Connecticut",
      label: "CT"
  },
  {
      value: "Delaware",
      label: "DE"
  },
  {
      value: "District Of Columbia",
      label: "DC"
  },
  {
      value: "Federated States Of Micronesia",
      label: "FM"
  },
  {
      value: "Florida",
      label: "FL"
  },
  {
      value: "Georgia",
      label: "GA"
  },
  {
      value: "Guam",
      label: "GU"
  },
  {
      value: "Hawaii",
      label: "HI"
  },
  {
      value: "Idaho",
      label: "ID"
  },
  {
      value: "Illinois",
      label: "IL"
  },
  {
      value: "Indiana",
      label: "IN"
  },
  {
      value: "Iowa",
      label: "IA"
  },
  {
      value: "Kansas",
      label: "KS"
  },
  {
      value: "Kentucky",
      label: "KY"
  },
  {
      value: "Louisiana",
      label: "LA"
  },
  {
      value: "Maine",
      label: "ME"
  },
  {
      value: "Marshall Islands",
      label: "MH"
  },
  {
      value: "Maryland",
      label: "MD"
  },
  {
      value: "Massachusetts",
      label: "MA"
  },
  {
      value: "Michigan",
      label: "MI"
  },
  {
      value: "Minnesota",
      label: "MN"
  },
  {
      value: "Mississippi",
      label: "MS"
  },
  {
      value: "Missouri",
      label: "MO"
  },
  {
      value: "Montana",
      label: "MT"
  },
  {
      value: "Nebraska",
      label: "NE"
  },
  {
      value: "Nevada",
      label: "NV"
  },
  {
      value: "New Hampshire",
      label: "NH"
  },
  {
      value: "New Jersey",
      label: "NJ"
  },
  {
      value: "New Mexico",
      label: "NM"
  },
  {
      value: "New York",
      label: "NY"
  },
  {
      value: "North Carolina",
      label: "NC"
  },
  {
      value: "North Dakota",
      label: "ND"
  },
  {
      value: "Northern Mariana Islands",
      label: "MP"
  },
  {
      value: "Ohio",
      label: "OH"
  },
  {
      value: "Oklahoma",
      label: "OK"
  },
  {
      value: "Oregon",
      label: "OR"
  },
  {
      value: "Palau",
      label: "PW"
  },
  {
      value: "Pennsylvania",
      label: "PA"
  },
  {
      value: "Puerto Rico",
      label: "PR"
  },
  {
      value: "Rhode Island",
      label: "RI"
  },
  {
      value: "South Carolina",
      label: "SC"
  },
  {
      value: "South Dakota",
      label: "SD"
  },
  {
      value: "Tennessee",
      label: "TN"
  },
  {
      value: "Texas",
      label: "TX"
  },
  {
      value: "Utah",
      label: "UT"
  },
  {
      value: "Vermont",
      label: "VT"
  },
  {
      value: "Virgin Islands",
      label: "VI"
  },
  {
      value: "Virginia",
      label: "VA"
  },
  {
      value: "Washington",
      label: "WA"
  },
  {
      value: "West Virginia",
      label: "WV"
  },
  {
      value: "Wisconsin",
      label: "WI"
  },
  {
      value: "Wyoming",
      label: "WY"
  }
]