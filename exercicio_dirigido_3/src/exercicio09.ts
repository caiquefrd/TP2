var readline = require('readline');
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let continuar = true;

function is_prime(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function prime_factors(n: number): number[] {
    const factors: number[] = [];
    let divisor = 2;

    while (n >= 2) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }

    return factors;
}

function perguntar() {
    if (continuar) {
        leitor.question("Digite um numero (ou 'sair' para terminar): ", function (answer: string) {
            let n_answer = parseInt(answer);
            if (answer.toLowerCase() === 'sair') {
                continuar = false
                leitor.close();
            }
            if (is_prime(n_answer)) {
                console.log(`O número ${answer} é primo? ${is_prime(n_answer) ? "Sim" : "Não"}`);
            }
            else {
                console.log(`Os fatores de ${answer} são :${prime_factors(n_answer)}`)
            }
            leitor.close();
        });
    }
}
perguntar()

export default {}