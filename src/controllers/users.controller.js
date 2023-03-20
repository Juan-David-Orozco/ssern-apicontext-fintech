import { connectDB, sql } from '../database'
import moment from 'moment'

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
  let { phone, city, address, type } = req.body
  // validacion parametros requeridos
  if(username == null || email == null || password == null) {
    return res.status(400).json({msg: "Bad Request, Fields required"})
  }
  // reasignacion parametro - type
  if(type === "admin") type = 1
  else if(type === "customer" || type === undefined) type = 2
  else {return res.status(400).json({msg: "UserType not exists"})}  
  // parametros opcionales (phone, city,address)
  if(phone === undefined) phone = "NULL"
  if(city === undefined) city = "NULL"
  if(address === undefined) address = "NULL"
  // mostrar consola - parametros requeridos y opcionales
  console.log(phone, city, address)
  console.log(username, email, password, type)

  // config campos DATETIME
  const currentDate = new Date()
  const currentNow = Date.now()
  console.log(currentDate)
  console.log(currentNow)

  console.log(currentDate.toString())
  console.log(currentDate.toDateString())
  console.log(currentDate.toISOString())
  console.log(JSON.stringify(currentDate.toJSON()))
  console.log(currentDate.toLocaleString())
  console.log(currentDate.toLocaleDateString())
  console.log(currentDate.toLocaleTimeString())
  
  

  //console.log(currentDate.getDate(), currentDate.getHours())

  // const momentDate = moment(new Date()).format()
  // const momentNow = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')
  // const momentFormat = moment(Date.now()).format('L')
  // console.log(date)
  // console.log(dateNow)
  // console.log(momentDate)
  
  const date = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`
  const hour = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}.${currentDate.getMilliseconds()}`
  
  console.log(date)
  console.log(hour)
  const date_hour = `${date} ${hour}`
  console.log(date_hour)

  //res.status(201).json({msg: "New user created"})

  // const date = currentDate.toLocaleDateString()
  // const hour = currentDate.toLocaleTimeString()
  // const dateYhour = `${date} ${hour}`
  // console.log(dateYhour)

  try {
    const pool = await connectDB()
    await pool.request()
      .input('i_username', sql.VarChar(50), username)
      .input('i_email', sql.VarChar(100), email)
      .input('i_password', sql.VarChar(100), password)
      .input('i_typeId', sql.Int, type)
      .input('i_active', sql.Bit, true)
      .input('i_phone', sql.VarChar(100), phone)
      .input('i_city', sql.VarChar(100), city)
      .input('i_address', sql.VarChar(100), address)
      //.input('i_createdAt', sql.DateTime, date_hour)
      //.input('i_updatedAt', sql.DateTime, date_hour)
      .execute('createNewUser')
    res.status(201).json({msg: "New user created"})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}