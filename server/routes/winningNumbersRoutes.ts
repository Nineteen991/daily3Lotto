import express from 'express'

import { 
  setWinningNumbers,
  getWinningNumbers,
  deleteWinningNumbers
} from '../controller/winningNumbersController'

const router = express.Router()

router.route('/')
  .get(getWinningNumbers)
  .post(setWinningNumbers)
  .delete(deleteWinningNumbers)

export default router