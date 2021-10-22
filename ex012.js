var agora = new Date()
var hora = agora.getHours()
var diaSem = agora.getDay()
console.log(`Agora são exatamente ${hora} hr`)
console.log(diaSem)
switch(diaSem){ 
    case  0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERROR] Dia Invalido')

}

if (hora < 12) {
    console.log('Bom Dia!!')
}else if (hora <= 18) {
    console.log('Boa Tarde!!!')
} else {
    console.log('Boa Noite!!')
}
