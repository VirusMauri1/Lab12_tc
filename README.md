# Laboratorio 12 - Teoría de la Computación

Programación funcional y funciones lambda en **JavaScript (Node.js)**.

## Video

Video de la ejecución del programa (YouTube, no listado):

**[Ver video](https://youtu.be/AMRMyLvL3NA)**

## Estructura del repositorio

```
Laboratorio12_TC/
├── README.md
└── src/
    ├── problema2.js       ← ordenar una lista de diccionarios por un key
    ├── problema3.js       ← matriz transpuesta
    ├── problema4.js       ← eliminar elementos indicados de una lista
    └── main.js            ← ejecuta los problemas 2, 3 y 4 con los ejemplos del enunciado
```

## Requisitos

- [Node.js](https://nodejs.org/) (probado con v24). No usa dependencias externas.

## Ejecución

Desde la carpeta raíz del repositorio:

```bash
node src/main.js
```

## Solución de cada problema

Todas las soluciones usan funciones flecha (lambdas) y funciones de orden superior (`map`, `filter`, `sort`), sin modificar los datos originales.

### Problema 2 - Ordenar lista de diccionarios por key

```js
const compararPor = key => (a, b) => a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
const ordenarPor = (lista, key) => [...lista].sort(compararPor(key));
```

`compararPor(key)` es una lambda que devuelve otra lambda comparadora. Se copia la lista (`[...lista]`) para no modificar la original.

### Problema 3 - Matriz transpuesta

```js
const transpuesta = X => X.length === 0 ? [] : X[0].map((_, j) => X.map(fila => fila[j]));
```

Por cada índice de columna `j`, se forma una nueva fila con el elemento `j` de cada fila de `X`.

### Problema 4 - Eliminar elementos de una lista

```js
const eliminar = (lista, aBorrar) => lista.filter(x => !aBorrar.includes(x));
```

Se conservan solo los elementos que no están en `aBorrar`. Los elementos a borrar que no existen en la lista (como `'cafe'`) se ignoran.

## Salida esperada

```
===== Problema 2: ordenar lista de diccionarios por key =====
...
Ordenada por key = 'model':
[
  {"make":"Mi Max","model":2,"color":"Gold"},
  {"make":"Samsung","model":7,"color":"Blue"},
  {"make":"Nokia","model":216,"color":"Black"}
]
...
===== Problema 3: matriz transpuesta =====
...
Como lista de listas: [[1,4,7],[2,5,8],[3,6,9]]

===== Problema 4: eliminar elementos de una lista =====
...
Resultado:           ["rojo","verde","azul","gris","negro"]
```
