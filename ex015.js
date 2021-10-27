function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {window.alert('[ERROR] Verifique os dados e tente novamente')}
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'o-bebe.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'o-jovem.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto.jpg')
            }else {
                //Idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'a-bebe.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'a-joven.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adulta.jpg')
            }else {
                //Idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
