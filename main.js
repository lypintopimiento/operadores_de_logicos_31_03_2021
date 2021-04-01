// true                                   false
// 1,                                     0,
// Verdadero,                             Falso
// '>= 1 Numero mayor o igual a uno',     '<= 0 Numero menor o igual a cero',
// 'Cualquier numero positivo',           'Cualquier numero negativo',                            
// ' ',undefini                            null,

let a = true;
let b = false;

// console.log(a || b);
//Operador xor o NOR
// console.log(!a);

console.warn("Boleanos Operadores lógicos && 'y AND'");
console.log(`A: ${false}  B: ${false} = A && B: ${false && false}`);
console.log(`A: ${false}  B: ${true} = A && B: ${false && true}`);
console.log(`A: ${true}  B: ${false} = A && B: ${true && false}`);
console.log(`A: ${true}  B: ${true} = A && B: ${true && true}`);

console.warn("Numeros");
console.log(`A: ${0}  B: ${0} = A && B: ${0 && 0}`);
console.log(`A: ${0}  B: ${1} = A && B: ${0 && 1}`);
console.log(`A: ${1}  B: ${0} = A && B: ${1 && 0}`);
console.log(`A: ${1}  B: ${1} = A && B: ${1 && 1}`);

console.warn("Boleanos Operadores lógicos || 'o OR'");
console.log(`A: ${false}  B: ${false} = A || B: ${false || false}`);
console.log(`A: ${false}  B: ${true} = A || B: ${false || true}`);
console.log(`A: ${true}  B: ${false} = A || B: ${true || false}`);
console.log(`A: ${true}  B: ${true} = A || B: ${true || true}`);

console.warn("Numeros");
console.log(`A: ${0}  B: ${0} = A || B: ${0 || 0}`);
console.log(`A: ${0}  B: ${1} = A || B: ${0 || 1}`);
console.log(`A: ${1}  B: ${0} = A || B: ${1 || 0}`);
console.log(`A: ${1}  B: ${1} = A || B: ${1 || 1}`);

console.warn("Boleanos Operadores lógicos ! 'xor NOT'");
console.log(`A: ${false} = !A: ${!false}`);
console.log(`A: ${true} = !A: ${!true}`);
// console.warn("Numeros");
console.log(`A: ${0} = !A: ${(!0) ? 1 : 0}`);
console.log(`A: ${1} = !A: ${(!1) ? 1 : 0}`);
