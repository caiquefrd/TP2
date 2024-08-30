const nota_1: number = 7.5;
const nota_2: number = 8;
const nota_3: number = 9;

class Aluno {
    n1: number;
    n2: number;
    n3: number;
    constructor(n1: number, n2: number, n3: number) {
        this.n1 = n1;
        this.n2 = n2;
        this.n3 = n3;
    }
    private calc_media(): any {
        return ((this.n1 + this.n2 + this.n3) / 3)
    }
    calc_aprovacao() {
        const media: number = this.calc_media();
        if (media >= 6) {
            console.log("Aluno aprovado")
        }
        else {
            console.log("Aluno reprovado")
        }
    }
    imprimir_media():any{
        console.log ((this.n1 + this.n2 + this.n3) / 3)
    }
}

const aluno1 = new Aluno(nota_1, nota_2, nota_3)

aluno1.imprimir_media()
aluno1.calc_aprovacao()