const inverterString = (string: string): string => {
  let resultado = "";

  for (let i = string.length - 1; i >= 0; i--) {
    resultado += string[i];
  }

  return resultado;
};

const stringExemplo = "exemplo";
const stringInvertida = inverterString(stringExemplo);

console.log(stringInvertida);
