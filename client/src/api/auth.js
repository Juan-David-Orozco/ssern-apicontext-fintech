import axios from 'axios'

const url = "http://localhost:4000"

export const loginRequest = async () => {
  return await axios.post(`${url}/api/login`, {
    headers: {
      "Content-Type": "application/json"
    }
  })
}