
const compararPor = key => (a, b) =>
  a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;

// NUEVA lista ordenada
const ordenarPor = (lista, key) => [...lista].sort(compararPor(key));

module.exports = { compararPor, ordenarPor };
