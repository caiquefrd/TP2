var readline = require('readline');
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let continuar = true;

function perguntar() {
    if (continuar) {
        leitor.question("Digite uma palavra: ", function (answer: string) {
            const answer_splitted: string[] = answer.split("");
            console.log(answer_splitted)
            const vogals: string[] = ['a', 'e', 'i', 'o', 'u'];
            let qnt_vogals: number = 0;
            let qnt_consoantes: number = 0;
            for (let i = 0; i < answer_splitted.length; i++) {
                if (vogals.includes(answer_splitted[i])) {
                    qnt_vogals += 1;
                    console.log(`vogal em ${i}`)
                }
                else {
                    qnt_consoantes += 1;
                    console.log(`consoante em ${i}`)
                }
            }
            console.log(`\nqntd vogais = ${qnt_vogals} \nqntd consoantes = ${qnt_consoantes}`)
            leitor.close();
        });
    }

}

perguntar()