// MAIN FORM
export const DATE_FORMAT = 'MMDDYYYY'
export const ERROR_LABEL = 'Error message'
export const ERROR_MESSAGE = 'Please, fill in all fields!'
export const SUCCES_MESSAGE = 'Done'
export const SUCCES_LABEL = 'Success'
export const SUCCES_GENERATION = 'Generation'
export const TIMEOUT_MESSAGE = 3000
export const FIRST_NAV_TAB = '1'
export const SECOND_NAV_TAB = '2'
export const SERVICES_FIELD = 'services'
export const DIAGNOSES_FIELD = 'diagnoses'
export const TABLE_NAME = 'patients'
export const MAX_DAY = 25
export const MIN_DAY = 1

//DoctorsAppointment

export const INITIAL_STATE_DOCTORS_APPOINTMENT = {
  patientName: '',
  officeAddress: '',
  doctorName: '',
  doctorValue: {},
  isPatientSelected: true,
  dateReceipt: null,
}

export const getPatientByName = (list, name) => {
  return Object.values(list).find(patient => {
    return patient.patientName === name
  })
}

export const getPatientIdByValue = (list, value) => {
  for (let [key, val] of Object.entries(list)) {
    if (JSON.stringify(val) === JSON.stringify(value)) {
      return key
    }
  }
}

export const getSelectedPatients = patientsList => {
  const selectPatientList = []
  Object.entries(patientsList).map(([key, val]) => {
    return selectPatientList.push({
      value: val.patientName,
      label: val.patientName,
    })
  })
  return selectPatientList
}

// PATIENT DETAILS
export const INITIAL_STATE_PATIENT = {
  patientName: '',
  ssn: '',
  addressPatient: '',
  city: 'Jacksonville',
  state: 'FL',
  zip: '',
  phoneNumber: '',
  dob: null,
  accidentDate: null,
  gender: '',
  insuranceHolder: '',
  phoneNumberHolder: '',
  zipHolder: '',
  cityHolder: 'Jacksonville',
  stateHolder: 'FL',
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
  stateAccident: 'FL',
}

export const REPEAT_TEXT_INPUTS = [
  'patientName',
  'patientAddress',
  'patientCity',
  'patientZip',
  'patientPhone',
  'dobPatient',
]

export const GENDER_LIST = [
  { value: 'm', label: 'male' },
  { value: 'f', label: 'female' },
]

export const COUT_DAYS = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
  { value: 10, label: '10' },
  { value: 11, label: '11' },
  { value: 12, label: '12' },
  { value: 13, label: '13' },
  { value: 14, label: '14' },
  { value: 15, label: '15' },
  { value: 16, label: '16' },
  { value: 17, label: '17' },
  { value: 18, label: '18' },
  { value: 19, label: '19' },
  { value: 20, label: '20' },
  { value: 21, label: '21' },
  { value: 22, label: '22' },
  { value: 23, label: '23' },
  { value: 24, label: '24' },
  { value: 25, label: '25' },
]

export const USA_STATES = [
  {
    value: 'Alabama',
    label: 'AL',
  },
  {
    value: 'Alaska',
    label: 'AK',
  },
  {
    value: 'American Samoa',
    label: 'AS',
  },
  {
    value: 'Arizona',
    label: 'AZ',
  },
  {
    value: 'Arkansas',
    label: 'AR',
  },
  {
    value: 'California',
    label: 'CA',
  },
  {
    value: 'Colorado',
    label: 'CO',
  },
  {
    value: 'Connecticut',
    label: 'CT',
  },
  {
    value: 'Delaware',
    label: 'DE',
  },
  {
    value: 'District Of Columbia',
    label: 'DC',
  },
  {
    value: 'Federated States Of Micronesia',
    label: 'FM',
  },
  {
    value: 'Florida',
    label: 'FL',
  },
  {
    value: 'Georgia',
    label: 'GA',
  },
  {
    value: 'Guam',
    label: 'GU',
  },
  {
    value: 'Hawaii',
    label: 'HI',
  },
  {
    value: 'Idaho',
    label: 'ID',
  },
  {
    value: 'Illinois',
    label: 'IL',
  },
  {
    value: 'Indiana',
    label: 'IN',
  },
  {
    value: 'Iowa',
    label: 'IA',
  },
  {
    value: 'Kansas',
    label: 'KS',
  },
  {
    value: 'Kentucky',
    label: 'KY',
  },
  {
    value: 'Louisiana',
    label: 'LA',
  },
  {
    value: 'Maine',
    label: 'ME',
  },
  {
    value: 'Marshall Islands',
    label: 'MH',
  },
  {
    value: 'Maryland',
    label: 'MD',
  },
  {
    value: 'Massachusetts',
    label: 'MA',
  },
  {
    value: 'Michigan',
    label: 'MI',
  },
  {
    value: 'Minnesota',
    label: 'MN',
  },
  {
    value: 'Mississippi',
    label: 'MS',
  },
  {
    value: 'Missouri',
    label: 'MO',
  },
  {
    value: 'Montana',
    label: 'MT',
  },
  {
    value: 'Nebraska',
    label: 'NE',
  },
  {
    value: 'Nevada',
    label: 'NV',
  },
  {
    value: 'New Hampshire',
    label: 'NH',
  },
  {
    value: 'New Jersey',
    label: 'NJ',
  },
  {
    value: 'New Mexico',
    label: 'NM',
  },
  {
    value: 'New York',
    label: 'NY',
  },
  {
    value: 'North Carolina',
    label: 'NC',
  },
  {
    value: 'North Dakota',
    label: 'ND',
  },
  {
    value: 'Northern Mariana Islands',
    label: 'MP',
  },
  {
    value: 'Ohio',
    label: 'OH',
  },
  {
    value: 'Oklahoma',
    label: 'OK',
  },
  {
    value: 'Oregon',
    label: 'OR',
  },
  {
    value: 'Palau',
    label: 'PW',
  },
  {
    value: 'Pennsylvania',
    label: 'PA',
  },
  {
    value: 'Puerto Rico',
    label: 'PR',
  },
  {
    value: 'Rhode Island',
    label: 'RI',
  },
  {
    value: 'South Carolina',
    label: 'SC',
  },
  {
    value: 'South Dakota',
    label: 'SD',
  },
  {
    value: 'Tennessee',
    label: 'TN',
  },
  {
    value: 'Texas',
    label: 'TX',
  },
  {
    value: 'Utah',
    label: 'UT',
  },
  {
    value: 'Vermont',
    label: 'VT',
  },
  {
    value: 'Virgin Islands',
    label: 'VI',
  },
  {
    value: 'Virginia',
    label: 'VA',
  },
  {
    value: 'Washington',
    label: 'WA',
  },
  {
    value: 'West Virginia',
    label: 'WV',
  },
  {
    value: 'Wisconsin',
    label: 'WI',
  },
  {
    value: 'Wyoming',
    label: 'WY',
  },
]
