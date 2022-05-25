let amigo = {nome: 'Jose', 
sexo: 'M', 
peso: 85.4, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

//------------------------- Ativando função dentro do objeto
amigo.engordar(2)
//------------------------

console.log(amigo)
console.log('----------')
console.log(amigo.nome)
console.log('----------')
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
console.log('----------')