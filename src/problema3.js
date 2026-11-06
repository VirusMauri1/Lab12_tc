
const transpuesta = X =>
  X.length === 0 ? [] : X[0].map((_, j) => X.map(fila => fila[j]));

module.exports = { transpuesta };
