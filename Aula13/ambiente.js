var cont = 0
var cont2 = 0

console.log(`Início`)

while(cont <= 5){
    console.log(`while ${cont}`)
    cont ++
}

do{
    console.log(`do while: ${cont2}`)
    cont2 ++

}while(cont2 <= 5)

for(var cont3=0; cont3 <= 5; cont3 ++ ){
    console.log(`for: ${cont3}`)
}

console.log(`Fim`)