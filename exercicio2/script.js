/*# Exercício 2

Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

Exemplo com entrada **`7`**:
```jsx
7
14
21
28
35
42
49
56
63
70
```
*/

const inputUser = Number (prompt("Prezado usuário, favor informar um número para a tabuada: "))
i = 0

for (i=0; i<=10; i++){
    console.log (`${inputUser} X ${i} = ${inputUser*i}`)

}