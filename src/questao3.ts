import * as fs from "fs";

const processarFaturamento = (
  faturamento: { dia: number; valor: number }[]
): void => {
  const diasComFaturamento = faturamento.filter((dia) => dia.valor > 0);

  if (diasComFaturamento.length === 0) {
    console.log("Não houve faturamento.");
    return;
  }

  const menorFaturamento = Math.min(
    ...diasComFaturamento.map((dia) => dia.valor)
  );
  console.log(`Menor valor de faturamento: R$ ${menorFaturamento}`);

  const maiorFaturamento = Math.max(
    ...diasComFaturamento.map((dia) => dia.valor)
  );
  console.log(`Maior valor de faturamento: R$ ${maiorFaturamento}`);

  const somaFaturamento = diasComFaturamento.reduce(
    (acumulador, dia) => acumulador + dia.valor,
    0
  );
  const mediaMensal = somaFaturamento / diasComFaturamento.length;
  console.log(`Média mensal de faturamento: R$ ${mediaMensal.toFixed(2)}`);

  const diasAcimaDaMedia = diasComFaturamento.filter(
    (dia) => dia.valor > mediaMensal
  ).length;
  console.log(
    `Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`
  );
};

fs.readFile("../dados/dados.json", "utf8", (erro, data) => {
  if (erro) {
    console.error("Erro ao ler o arquivo:", erro);
    return;
  }

  try {
    const faturamento = JSON.parse(data);
    processarFaturamento(faturamento);
  } catch (erro) {
    console.error("Erro ao processar o arquivo JSON:", erro);
  }
});
