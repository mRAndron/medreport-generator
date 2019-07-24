import { 
  GENERATE_FILE,
  HEADERS_OBJECT
} from './constants'

export const generateFileFromApi = data => {
  return fetch(GENERATE_FILE, {
    method: 'POST',
    headers: HEADERS_OBJECT,
    body: JSON.stringify(data)
  }).then(response => Promise.all([response, response.json()]))
}