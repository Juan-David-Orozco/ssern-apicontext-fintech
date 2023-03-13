import axios from 'axios'

const url = "http://localhost:4000"

export const getUsersRequests = async () => {
  return await axios.get(`${url}/api/users`)
}