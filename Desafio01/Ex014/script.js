function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   // var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=0 && hora < 12){
        //BOM DIA
        img.src = 'Imagens/fotomanha.png'
        document.body.style.background = '#f3dbb7'
    }else if(hora >=12 && hora <18){
        //BOA TARDE
        img.src = 'Imagens/fototarde.png'
        document.body.style.background = '#8f5b34'
    }else{
        //BOA NOITE
        img.src = 'Imagens/fotonoite.png'
        document.body.style.background = '#165f7f'
    }

}

