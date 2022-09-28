/* # Exercício 1

Utilizando o laço `while`, escreva um código que :
 - Recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. 
 - Crie também uma `let conta` para guardar o valor total.

Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. 
Quando a resposta não for **sim**, devemos imprimir o valor total da conta.

*/
let desejaMaisCoxinha = prompt("Deseja comer uma coxinha? C> \n - Digite “S” para representar “sim”, \n - Digite “N” para representar “não” ").toUpperCase()
let totalCoxinha = 0

while (desejaMaisCoxinha === "S"){
    totalCoxinha = totalCoxinha + 1

    console.log("Você já comeu", totalCoxinha, "coxinha(s). Valor Total = R$",totalCoxinha*2.5)
    desejaMaisCoxinha = prompt("Deseja comer mais uma coxinha? C> \n - Digite “S” para representar “sim”, \n - Digite “N” para representar “não” ").toUpperCase()

}
console.log("Agradecemos a preferencia! O total de coxinha(s) que você comeu foi:",totalCoxinha, ". Valor Total = R$",totalCoxinha*2.5)
