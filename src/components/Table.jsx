import "../App.css"
import { fibonacciNumbers } from "../functions/fibonacciNumbers"
import { primeNumbers } from "../functions/primeNumbers"
import { triangularNumbers } from "../functions/triangularNumbers"
const Table = () => {
  const primos = primeNumbers(10)
  const triangular = triangularNumbers(10)
  const fibo = fibonacciNumbers(10)
  return (
    <table>
      <thead>
        <th>Serie</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
        <th>6</th>
        <th>7</th>
        <th>8</th>
        <th>9</th>
        <th>10</th>
      </thead>
      <tbody>
        <tr>
          <th>Primos</th>
          {primos.map((n) => (
            <th key={n}>{n}</th>
          ))}
        </tr>
        <tr>
          <th>Triangular</th>
          {triangular.map((n) => (
            <th key={n}>{n}</th>
          ))}
        </tr>
        <tr>
          <th>Fibonacci</th>
          {fibo.map((n) => (
            <th key={n}>{n}</th>
          ))}
        </tr>
      </tbody>
    </table>
  )
}
export default Table
