const pertenceAFibonacci = (numero: number): boolean => {
  let primeiro: number = 0;
  let segundo: number = 1;

  if (numero === primeiro || numero === segundo) {
    return true;
  }

  while (segundo < numero) {
    const proximo = primeiro + segundo;
    primeiro = segundo;
    segundo = proximo;

    if (segundo === numero) {
      return true;
    }
  }

  return false;
};

const numeroParaTestar: number = 21;

if (pertenceAFibonacci(numeroParaTestar)) {
  console.log(`${numeroParaTestar} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numeroParaTestar} não pertence à sequência de Fibonacci.`);
}
