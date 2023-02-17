import "../App.css"
import Calc from "./Calc"
const Result = ({ n }) => {
  return (
    <div className="result">
      <p>Formula:</p>
      <p>serie(n) = primo(n + 1) - 2trinagular(n) + fibonacci(n + 1)</p>
      <p>Resultado:</p>
      <Calc position={n} />
    </div>
  )
}
export default Result
