import { Router } from 'express'
import { connectDB, sql } from '../database'

const router = Router()

router.get('/testsp', async (req, res) => {
  try {
    const pool = await connectDB()
    const result = await pool.request()
      .input("i_month", sql.Int, 1)
      .input("i_cardType", sql.VarChar(50), 'Vista')
      .output("o_count", sql.Int)
      .output("o_message", sql.VarChar(50))
      //.execute('[Sales].[uspGetCreditCardExpiredApril]')
      .execute('[Sales].[uspGetCreditCardExpiredByMonth]')
    console.log(result)
    res.status(200).json({msg: "Example use SP"})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

export default router