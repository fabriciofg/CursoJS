function contar(){
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpasso')
    var res = document.getElementById('resposta')

    if(ini.value == 0 || fim.value == 0 || pas.value == 0){  
        res.innerHTML = 'Impossivel Contar'
    }else{      
        res.innerHTML = 'Contando... <br>'
        let i = Number(ini.value)   
        let f = Number(fim.value)
        let p = Number(pas.value)   
 
        if(p <= 0){
            window.alert('Passo Invalido, considerando PASSO como 1')
            p = 1
        }
        //Contagem crescente
        if(i < f){
            for(let c = i; c <= f; c += p){        
                res.innerHTML += `${c} \u{1F449}`
            }
        //Contagem regressiva
        }else{
            for(let c = i; c >= f; c -= p){        
                res.innerHTML += `${c} \u{1F449}`
            }            
        } 
        res.innerHTML += `\u{1F3C1}`    
    }
}
