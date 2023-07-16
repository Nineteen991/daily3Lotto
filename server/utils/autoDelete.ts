import { getNumbers } from "../interfaces/controller.interfaces"
import Lotto from "../models/Lotto"

const autoDeleteOverLength20 = async (winningNumbers: getNumbers[]) => {
  const oldestNumbers = winningNumbers[0]._id
  const nixedNumbers = await Lotto.deleteOne({ _id: oldestNumbers })
  console.log(nixedNumbers)
  console.log(`Deleted old numbers: ${ winningNumbers[0].winnngNumbers }`)
}

export default autoDeleteOverLength20