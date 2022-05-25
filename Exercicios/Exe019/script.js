let n = document.getElementById('nome')
let c = document.getElementById('cpf')
let na = document.getElementById('nasc')
let t = document.getElementById('tel')
let e = document.getElementById('email')


console.log(n.value)


let res = document.getElementById('res')
let tab = document.getElementById('tabela')

let pessoa = {nome:'-', cpf:'-', nasc:'-', tel:'-', email:'-'}

console.log(tab)

limpa()


function cadastrar(){    
    if(vazio() == true){
        alert('Entre com os dados')
        limpa()
    }else{
        pessoa.nome = n.value
        pessoa.cpf = c.value
        pessoa.nasc = na.value
        pessoa.tel = t.value
        pessoa.email = e.value

        if(VerificaCPF() == true){     
            tab.innerHTML +=`
            <tr>
            <td>${pessoa.nome}</td>
            <td>${pessoa.cpf}</td>
            <td>${pessoa.nasc}</td>
            <td>${pessoa.tel}</td>
            <td>${pessoa.email}</td>
            </tr>`
        }else{
            alert('CPF já cadastrado! Entre com outro cadastro')
        }
        limpa()
    }
}

function vazio(){ // Verifica de os campos do formulário contem dados 
    if(n.value == '' || c.value == '' || na.value == '' || t.value == '' || e.value == ''){
        console.log('FALSE')
        return true
    }else{
        console.log('FALSE')
        return false
    }
}
function limpa(){ // Limpa todos os campos do formulario
    console.log('LIMPAR CAMPOS')   
    n.value =''
    c.value =''
  //na.value =''
    t.value =''
    e.value =''

    n.focus()
}
function VerificaCPF(){ // Verificar de CPF já esta cadastrado na tabela
    return true
}

