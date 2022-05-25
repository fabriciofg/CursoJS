let num = document.getElementById('txtnum')

let lista = document.getElementById('flista')
let res = document.getElementById('res')

let valores = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }    
}
function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true       
    }else{
        return false
    }    
}

function adicionar(){      
    if(isnumero(num.value) && !inlista(num.value, valores)){ // ! -- ????
        valores.push(Number(num.value))
        //Criação do item para colocar na lista 
        let item  = document.createElement('option')
        item.text = `Valor: ${num.value} adicionado`
        lista.appendChild(item) // adiciona o elemento na lista       
        res.innerHTML=''        
    }else{
        window.alert('Valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus() 
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let total = 0
        let maior = 0
        let menor = 0
        let soma = 0
        let media = 0    
        
        //Pega a quantidade de valores no arrey
        total= valores.length

        valores.sort()

        //Pega o menor e o mair valor
        maior = valores[0]
        menor = valores[0]
        for(let c in valores){
            soma += valores[c] // somando valores
            if(valores[c] > maior) // pega o maior valor
                maior = valores[c]
            if(valores[c] < menor) // pega o menor valor
                menor = valores[c]             
        }


        media = soma / total // calculando a média



        res.innerHTML=''

        res.innerHTML+=`Total de numeros informados: ${total}<br>`
        res.innerHTML+=`Maior valor informado: ${maior}<br>`
        res.innerHTML+=`Menor valor informado: ${menor}<br>`
        res.innerHTML+=`Soma de todos os valores: ${soma}<br>`
        res.innerHTML+=`Média dos valores: ${media}<br>`




    }
}