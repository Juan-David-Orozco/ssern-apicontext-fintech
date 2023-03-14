import axios from 'axios'

let url = "http://localhost:4000"

export const loginRequest = async (email, password) => {
  return await axios.post(`${url}/api/login`, {email, password} , {
    headers: {
      "Content-Type": "application/json"
    }
  })
}

//export const logoutRequest = async ()