import axios from 'axios'

let baseUrl = "http://localhost:4000"

export const loginRequest = async (email, password) => {
  return await axios.post(`${baseUrl}/api/login`, {email, password} , {
    headers: {
      "Content-Type": "application/json"
    }
  })
}