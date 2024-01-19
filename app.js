alert('Bem vindo ao jogo do numero secreto')

const numeroCerto = parseInt(Math.random()*(40-1)+1)

let numeroChute
let tentativas=1
while(numeroChute!=numeroCerto){
        numeroChute = prompt('Escolha um numero entre 1 e 40')

    if(numeroChute==numeroCerto){
        break
   

    }
    else{
        
        if(numeroChute<numeroCerto){
            alert(`o numero certo é maior que ${numeroChute}`)
        }
        else{
            alert(`o numero certo é menor que ${numeroChute}`)
        }
        tentativas+=1
}}

let palavraTentativas = tentativas === 1 ? 'tentativa' : 'tentativas'
    alert(`Isso aí, vc descobriu o numero certo ${numeroCerto} com ${tentativas} ${palavraTentativas}`)

