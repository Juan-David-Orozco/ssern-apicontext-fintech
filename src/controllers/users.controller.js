import { connectDB, sql } from '../database'

export const getUsers = async (req, res) => {
  try {
    const pool = await connectDB()
    const result = await pool.request()
      .execute('getAllUsers')
    const users = result.recordset
    res.status(200).json({msg: "Get All Users", users})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

export const createUser = async (req, res) => {
  const { username, email, password } = req.body
  let { type } = req.body
  if(username == null || email == null || password == null) {
    return res.status(400).json({msg: "Bad Request, Fields required"})
  }
  if(type == null) type = 2 // 2 => userType : customer
  console.log(username, email, password, type)
  try {
    const pool = await connectDB()
    await pool.request()
      .input('i_username', sql.VarChar(50), username)
      .input('i_email', sql.VarChar(100), email)
      .input('i_password', sql.VarChar(100), password)
      .input('i_type', sql.Int, type)
      .input('i_active', sql.Bit, true)
      .execute('createNewUser')
    res.status(201).json({msg: "New user created"})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}