const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const calcularPercentuais = (faturamento: {
  [estado: string]: number;
}): void => {
  const totalFaturamento = Object.values(faturamento).reduce(
    (total, valor) => total + valor,
    0
  );

  for (const [estado, valor] of Object.entries(faturamento)) {
    const percentual = (valor / totalFaturamento) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
};

calcularPercentuais(faturamentoEstados);
