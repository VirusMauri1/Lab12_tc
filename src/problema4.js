
const eliminar = (lista, aBorrar) => lista.filter(x => !aBorrar.includes(x));

module.exports = { eliminar };
