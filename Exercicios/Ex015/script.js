function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value == 0 || fano.value > ano){ // Verifica se o campo estra vazio, ou se a data e maior que a data atiual
        window.alert('[ERRO] Verifique os dandos e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'mas-crianca.png')
            }else if(idade >=10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'mas-jovem.png')
            }else if(idade >=21 && idade < 50){
                //Adulto
                img.setAttribute('src', 'mas-adulto.png')
            }else{
                //Velho
                img.setAttribute('src', 'mas-velho.png')
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'fem-crianca.png')
            }else if(idade >=10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'fem-jovem.png')
            }else if(idade >=21 && idade < 50){
                //Adulto
                img.setAttribute('src', 'fem-adulto.png')
            }else{
                //Velho
                img.setAttribute('src', 'fem-velho.png')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Sua idade é: ${idade} anos, e seu sexo é ${genero}`
        res.appendChild(img)



    }


}