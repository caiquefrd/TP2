var readline = require('readline');
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function numbers_added(numbers:string[]):number{
    let sum:number = 0
    for(let i = 0; i < numbers.length; i++){
        sum = sum + parseFloat(numbers[i])
    }
    return sum
}

let continuar = true;
var somatorio = 0;
const int_numbers: string[] = [];

function perguntar() {
    if (continuar) {
        leitor.question("Digite um numero (ou 'sair' para terminar): ", function (answer: string) {
            if (answer.toLowerCase() === 'sair' || somatorio >= 10) {
                console.log("maximo excedido........... fechando")
                continuar = false;
                leitor.close();
            } if(int_numbers.includes(answer)) {
                console.log("numero repetido");
                leitor.close()
            }
            else{
                int_numbers.push(answer);   
                console.log(int_numbers);
                console.log(`somatorio: ${numbers_added(int_numbers)}`)
                somatorio += 1;
                perguntar();
            }
        });
    }
}
perguntar()

export default{}