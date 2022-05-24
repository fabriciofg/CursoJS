function parimp(n){ // função para verificar se o numero é par ou impar 
    if (n%2 == 0){
        return 'PAR'
    }else{
        return 'IMPAR'
    }
}

let res = parimp(15)

console.log(`O número é: ${res}`)

console.log(`O número é: ${parimp(10)}`)
 

//--------------------------------------------------------------
function soma(n1=0, n2=0){
    return n1 + n2 
}
console.log(`A soma dos números n1 + n2 é igual a: ${soma(5,5)}`)


//--------------------------------------------------------------
// criando variavel com retorno de valor de função
let v = function(x){
    return x*2
}
console.log(v(3))


//--------------------------------------------------------------
// função de fatorial de um número
function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(`Fatorial de n: ${fatorial(5)} `)


//Função recursiva, a função chama ela mesmo
function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(`Fatorial de n: ${fatorial(8)} `)