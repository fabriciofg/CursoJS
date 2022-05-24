function adicionar(){
    let num = Number(document.getElementById('txtnum').value)
    let cont = 0

    let numeros = [5,5]

    let dados = document.getElementById('dados')
    let res = document.getElementById('res')

    res.innerHTML += num

    numeros.push(num)



    res.innerHTML += `Valor dentro do arrey: ${numeros[cont]}`

    let item = document.createElement('option')
    item.text = `${num}`
    item.value = `tab${num}`
    dados.appendChild(item)










}