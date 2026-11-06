
const { ordenarPor } = require('./problema2');
const { transpuesta } = require('./problema3');
const { eliminar } = require('./problema4');
const titulo = texto => console.log(`\n===== ${texto} =====`);
const mostrarLista = lista => console.log('[\n' + lista.map(e => '  ' + JSON.stringify(e)).join(',\n') + '\n]');
const mostrarMatriz = M => M.forEach(fila => console.log('  ' + fila.join('  ')));

// ---------------- Problema 2 ----------------
titulo('Problema 2: ordenar lista de diccionarios por key');
const telefonos = [
  { make: 'Nokia', model: 216, color: 'Black' },
  { make: 'Mi Max', model: 2, color: 'Gold' },
  { make: 'Samsung', model: 7, color: 'Blue' },
];
console.log('Lista original:');
mostrarLista(telefonos);
console.log("Ordenada por key = 'model':");
mostrarLista(ordenarPor(telefonos, 'model'));
console.log("Ordenada por key = 'make':");
mostrarLista(ordenarPor(telefonos, 'make'));

// ---------------- Problema 3 ----------------
titulo('Problema 3: matriz transpuesta');
const X = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log('X =');
mostrarMatriz(X);
console.log('X^T =');
mostrarMatriz(transpuesta(X));
console.log('Como lista de listas:', JSON.stringify(transpuesta(X)));

// ---------------- Problema 4 ----------------
titulo('Problema 4: eliminar elementos de una lista');
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'];
const aBorrar = ['amarillo', 'cafe', 'blanco'];
console.log('Lista inicial:      ', JSON.stringify(colores));
console.log('Elementos a borrar: ', JSON.stringify(aBorrar));
console.log('Resultado:          ', JSON.stringify(eliminar(colores, aBorrar)));
