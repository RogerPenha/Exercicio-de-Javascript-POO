class pessoa{
    constructor(name){
        this.name = name;
    }
    apresentar(){
        console.log('Meu nome é '+ this.name)
    }
}


class funcionário extends pessoa {
    constructor(name, Cargo, Salário){
        super(name);
        this.Cargo = Cargo
        this.Salário = Salário
    }
    apresentar(){
        super.apresentar()
    }
}
class programador extends funcionário{
    constructor(name,Cargo, Salário, Linguagem){
        super(name, Cargo, Salário)
        this.linguagemDeProgramação = Linguagem
    }
    apresentar(){
        super.apresentar()
        console.log('Eu trabalho como ' + this.Cargo + ', programando principalmente em ' + this.linguagemDeProgramação + ', e ganho R$' + this.Salário)
    }
}

class Designer extends funcionário{
    constructor(name,Cargo, Salário, Design){
        super(name, Cargo, Salário)
        this.tipoDeDesign = Design 
    }
    apresentar(){
        super.apresentar()
        console.log('Eu trabalho como ' + this.Cargo + ', principalmente com ' + this.tipoDeDesign + ', e ganho R$' + this.Salário)
    }
}

class Gerente extends funcionário{
    constructor(name,Cargo, Salário, Departamento){
        super(name, Cargo, Salário)
        this.Departamento = Departamento
    }
    apresentar(){
        super.apresentar()
        console.log('Eu trabalho como ' + this.Cargo + ', no departamento ' + this.Departamento + ', e ganho R$' + this.Salário)
    }
}

let p = new Gerente('adrezinho', 'gerente de sistemas', '10000000000', 'tecnologia' )
console.log(p.Salário)
p.apresentar()