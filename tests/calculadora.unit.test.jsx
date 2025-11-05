import { describe, it, expect } from 'vitest';

const ops = {
  sum: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => {
    if (b === 0) throw new Error('div0');
    return a / b;
  }
};

describe('Operaciones básicas', () => {
  it('suma', () => { expect(ops.sum(2, 3)).toBe(5); });
  it('resta', () => { expect(ops.sub(5, 2)).toBe(3); });
  it('multiplicación', () => { expect(ops.mul(4, 3)).toBe(12); });
  it('división', () => { expect(ops.div(10, 2)).toBe(5); });
  it('división por cero lanza error', () => {
    expect(() => ops.div(10, 0)).toThrow('div0');
  });
});