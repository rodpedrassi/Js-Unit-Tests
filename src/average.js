/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;

*/

const checkNumbers = (numbers) => {
  if (numbers.length === 0) {
    return 'vazio';
  }
  for (let index = 0; index < numbers.length; index += 1) {
    const element = numbers[index];
    if (typeof element !== 'number') {
      return 'NaN';
    }
  }
};

const roundNumbers = (numbers) => {
  const roundNuns = [];
  for (let i = 0; i < numbers.length; i += 1) {
    const element = numbers[i];
    roundNuns.push(Math.round(element));
  }
  return roundNuns;
};

const average = (numbers) => {
  if (checkNumbers(numbers) === 'vazio' || checkNumbers(numbers) === 'NaN') {
    return undefined;
  }
  const roundNuns = roundNumbers(numbers);
  let result = 0;
  for (let index = 0; index < roundNuns.length; index += 1) {
    const element = roundNuns[index];
    result += element;
  }
  result /= roundNuns.length;
  return Math.round(result);
};

console.log(average([3, 4, 5, '4']));

module.exports = average;
