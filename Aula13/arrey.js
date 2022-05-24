//Posição smepre começa na posição 0

let num = [9, 5, 2, 7, 8] // criação do arrey, e colocando valores nas posições
console.log(`Vetor: ${num}`)

num[3] = 1 // coloca na posição [3] o número 9
console.log(`Vetor: ${num}`)

num.push(4) // coloca automaticamente na ultima posição
console.log(`Vetor: ${num}`)

console.log(`Quantos elementos tem no arrey: ${num.length}`) // num.length mostra quantos elementos tem no arrey

console.log(`valor na posição 4 é: ${num[4]}`)// mostra o valor que etá no elemento entre [4]

num.sort()//coloca em ordem os valores
console.log(`Vetor: ${num}`)

//Mostrar valores do vetor de formas diferentes

for(let c = 0; c < num.length; c++){
    console.log(`Elemento: ${c} conteudo do arrey: ${num[c]}`)
}

//Forma com: for(-----in----)
console.log('--------')

for(let c in num){
    console.log(`Elemento: ${c} conteudo do arrey: ${num[c]}`)
}


//Busca valores dentro do arrey


// retorna em qual elemento se encontra o valor (?) se não existe ele retorna -1
let pos = num.indexOf(5)
if(pos == -1){
    console.log('Número não encontrado')
}else{
    console.log(`O valor 5 esta na posição ${pos}`)
}
