function calcular(){
    let num = Number(document.getElementById('txtnum').value)

    let res = document.getElementById('res')
    let tab = document.getElementById('tab')

    tab.innerHTML = ''
    
    for(let c = 1; c <= 10; c ++){
        let resul = c * num      
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${resul}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }
}
