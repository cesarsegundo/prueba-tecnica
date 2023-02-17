import { useState } from "react"
import "../App.css"
import Result from "./Result"
const Form = () => {
  const [valueInput, setValueInput] = useState() // valor input

  const handleChange = (e) => {
    setValueInput(e.target.value)
  }
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="form">
        <label>Ingrese un número del 1 al 10</label>
        <input
          onChange={handleChange}
          type="number"
          min={1}
          max={10}
          className="input"
        />
      </form>
      {valueInput > 0 && <Result n={valueInput} />}
    </>
  )
}

export default Form
