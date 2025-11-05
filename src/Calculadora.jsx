import { useState } from "react";

export default function Calculadora() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("sum");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setError("Ingrese números válidos");
      return;
    }

    if (operation === "div" && b === 0) {
      setError("No se puede dividir entre cero");
      return;
    }

    setError("");
    let res;
    switch (operation) {
      case "sum": res = a + b; break;
      case "sub": res = a - b; break;
      case "mul": res = a * b; break;
      case "div": res = a / b; break;
      default: res = 0;
    }
    setResult(res);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={e => setNum1(e.target.value)} />
      <input type="number" value={num2} onChange={e => setNum2(e.target.value)} />
      <select value={operation} onChange={e => setOperation(e.target.value)}>
        <option value="sum">Suma</option>
        <option value="sub">Resta</option>
        <option value="mul">Multiplicación</option>
        <option value="div">División</option>
      </select>
      <button onClick={calculate}>Calcular</button>
      {error && <p style={{color: "red"}}>{error}</p>}
      {result !== null && <p>Resultado: {result}</p>}
    </div>
  );
}