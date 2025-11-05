import { describe, it, expect } from 'vitest'
import { sum, sub, mul, div } from '../src/lib/ops.js'

describe('Operaciones básicas', () => {
  it('suma', () => { expect(sum(2, 3)).toBe(5) })
  it('resta', () => { expect(sub(5, 2)).toBe(3) })
  it('multiplicación', () => { expect(mul(4, 3)).toBe(12) })
  it('división', () => { expect(div(10, 2)).toBe(5) })
  it('división por cero lanza error', () => {
    expect(() => div(10, 0)).toThrow('div0')
  })
})
