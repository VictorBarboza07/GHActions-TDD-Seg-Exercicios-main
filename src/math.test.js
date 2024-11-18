const { fatorial, fibonacci, ehPrimo } = require('./math');

describe('função fatorial', () => {
  test('valida entrada', () => {
    // Verifica se a função 'fatorial' existe
    expect(fatorial).toBeDefined();
    // Verifica se a função 'fatorial' possui 1 argumento
    expect(fatorial.length).toBe(1);

    // Garantir que o argumento é um número
    expect(() => fatorial("Texto")).toThrow(TypeError);
    expect(() => fatorial("Texto")).toThrow("O argumento deve ser um número válido");
    expect(() => fatorial("10")).not.toThrow(TypeError);
    expect(() => fatorial(10)).not.toThrow(TypeError);

    // Garantir que não existe fatorial de número negativo
    expect(() => fatorial(-10)).toThrow(Error);
    expect(() => fatorial(-10)).toThrow("Não existe fatorial de número negativo");
  });
  test('calcula fatorial de 5 para ser igual a 120', () => {
    expect(fatorial(5)).toBe(120);
  });

  test('calcula fatorial de 0 para ser igual a 1', () => {
    expect(fatorial(0)).toBe(1);
  });
});

describe('função fibonacci', () => {
  test('valida entrada', () => {
    // Verifica se a função 'fibonacci' existe
    expect(fibonacci).toBeDefined();
    // Verifica se a função 'fibonacci' possui 1 argumento
    expect(fibonacci.length).toBe(1);

    // Garantir que o argumento é um número
    expect(() => fibonacci("Texto")).toThrow(TypeError);
    expect(() => fibonacci("Texto")).toThrow("O argumento deve ser um número válido");
    expect(() => fibonacci("10")).not.toThrow(TypeError);
    expect(() => fibonacci(10)).not.toThrow(TypeError);

    // Garantir que não existe fibonacci de número menor ou ingual a zero
    expect(() => fibonacci(-10)).toThrow(Error);
    expect(() => fibonacci(-10)).toThrow("Não existe fibonacci de número menor ou igual a zero");
    expect(() => fibonacci(0)).toThrow(Error);
    expect(() => fibonacci(0)).toThrow("Não existe fibonacci de número menor ou igual a zero");
  });
  test('Retorna o número fibonacci de 8 igual a 21', () => {
    expect(fibonacci(8)).toBe(21);
  });

  test('Retorna o número fibonacci de 10 igual a 55', () => {
    expect(fibonacci(10)).toBe(55);
  });
});

describe('função ehPrimo', () => {
  test('valida entrada', () => {
    // Verifica se a função 'ehPrimo' existe
    expect(ehPrimo).toBeDefined();
    // Verifica se a função 'ehPrimo' possui 1 argumento
    expect(ehPrimo.length).toBe(1);

    // Garantir que o argumento é um número
    expect(() => ehPrimo("Texto")).toThrow(TypeError);
    expect(() => ehPrimo("Texto")).toThrow("O argumento deve ser um número válido");
    expect(() => ehPrimo("10")).not.toThrow(TypeError);
    expect(() => ehPrimo(10)).not.toThrow(TypeError);

    // Garantir que não existe número primo de número menor ou igual a 1
    expect(() => ehPrimo(1)).toThrow(Error);
    expect(() => ehPrimo(1)).toThrow("Não número primo de número menor ou igual a 1");
    expect(() => ehPrimo(0)).toThrow(Error);
    expect(() => ehPrimo(0)).toThrow("Não número primo de número menor ou igual a 1");
    expect(() => ehPrimo(-2)).toThrow(Error);
    expect(() => ehPrimo(-2)).toThrow("Não número primo de número menor ou igual a 1");
  });
  test('verifica que 7 e 11 são números primos', () => {
    expect(ehPrimo( 7)).toBe(true);
    expect(ehPrimo(11)).toBe(true);
  });

  test('verifica que 6 e 10 não são números primos', () => {
    expect(ehPrimo( 6)).toBe(false);
    expect(ehPrimo(10)).toBe(false);
  });
});