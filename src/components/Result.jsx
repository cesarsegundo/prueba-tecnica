import "../App.css"
import Calc from "./Calc"

import { fibonacciNumbers } from "../functions/fibonacciNumbers"
import { primeNumbers } from "../functions/primeNumbers"
import { triangularNumbers } from "../functions/triangularNumbers"

const Result = ({ n }) => {
  const primes = primeNumbers(10)
  const triangulars = triangularNumbers(10)
  const fibo = fibonacciNumbers(10)
  return (
    <div className="result">
      <p>Formula:</p>
      <p>serie(n) = primo(n + 1) - 2trinagular(n) + fibonacci(n + 1)</p>
      <p>Resultado:</p>
      <div>
        serie<sub>({n})</sub> = ({primes[n - 1]} + 1) - 2(
        {triangulars[n - 1]}) + ({fibo[n - 1]} + 1)
      </div>
      <Calc position={n} />
    </div>
  )
}
export default Result
