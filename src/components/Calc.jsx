import { fibonacciNumbers } from "../functions/fibonacciNumbers"
import { primeNumbers } from "../functions/primeNumbers"
import { triangularNumbers } from "../functions/triangularNumbers"

const Calc = ({ position }) => {
  const formula = (position) => {
    const primes = primeNumbers(10)
    const triangulars = triangularNumbers(10)
    const fibo = fibonacciNumbers(10)
    let n = position - 1
    let result = 0
    result = primes[n] + 1 - 2 * triangulars[n] + (fibo[n] + 1)
    return result
  }
  return (
    <div>
      <div>
        serie<sub>({position})</sub> = {formula(position)}
      </div>
    </div>
  )
}

export default Calc
