let n = document.getElementById('nome')
let c = document.getElementById('cpf')
let na = document.getElementById('nasc')
let t = document.getElementById('tel')
let e = document.getElementById('email')


console.log(n.value)


let res = document.getElementById('res')

let pessoa = {nome:'-', cpf:'-', nasc:'-', tel:'-', email:'-'}


function cadastrar(){    
    pessoa.nome = n.value
    pessoa.cpf = c.value
    pessoa.nasc = na.value
    pessoa.tel = t.value
    pessoa.email = e.value

    res.innerHTML += `<strong>Nome: </strong>${pessoa.nome}<br>`
    res.innerHTML += `<strong>CPF: </strong>${pessoa.cpf}<br>`
    res.innerHTML += `<strong>Nascimento: </strong>${pessoa.nasc}<br>`
    res.innerHTML += `<strong>Telefone: </strong>${pessoa.tel}<br>`
    res.innerHTML += `<strong>E-mail: </strong>${pessoa.email}<br>` 
}

