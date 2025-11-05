import { useState } from 'react'
import { sum, sub, mul, div as divide } from './lib/ops.js'

const operations = [
  { value: 'sum', label: 'Suma', fn: sum, symbol: '+' },
  { value: 'sub', label: 'Resta', fn: sub, symbol: '−' },
  { value: 'mul', label: 'Multiplicación', fn: mul, symbol: '×' },
  { value: 'div', label: 'División', fn: divide, symbol: '÷' },
]

export default function Calculadora() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operation, setOperation] = useState('sum')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const calculate = () => {
    const a = Number(num1)
    const b = Number(num2)

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
      setError('Ingrese números válidos')
      setResult(null)
      return
    }

    const op = operations.find(o => o.value === operation)
    try {
      const res = op.fn(a, b)
      setResult(res)
      setError('')
    } catch (e) {
      if (e?.message === 'div0') setError('No se puede dividir entre cero')
      else setError('Error en el cálculo')
      setResult(null)
    }
  }

  const clear = () => {
    setNum1(''); setNum2(''); setOperation('sum'); setResult(null); setError('')
  }

  return (
    <section className="calc">
      <div className="row">
        <label>
          Número 1
          <input
            aria-label="Número 1"
            type="number"
            value={num1}
            onChange={e => setNum1(e.target.value)}
          />
        </label>

        <label>
          Operación
          <select
            aria-label="Operación"
            value={operation}
            onChange={e => setOperation(e.target.value)}
          >
            {operations.map(op => (
              <option key={op.value} value={op.value}>{op.label}</option>
            ))}
          </select>
        </label>

        <label>
          Número 2
          <input
            aria-label="Número 2"
            type="number"
            value={num2}
            onChange={e => setNum2(e.target.value)}
          />
        </label>
      </div>

      <div className="row buttons">
        <button onClick={calculate}>Calcular</button>
        <button className="secondary" onClick={clear}>Limpiar</button>
      </div>

      {error && <p role="alert" className="error">{error}</p>}
      {result !== null && !error && (
        <p className="result">Resultado: <strong>{result}</strong></p>
      )}
    </section>
  )
}
