
function verificar() {
    //Criar a data e pegar os dados através dos ID's html
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    //condição composta p/ verificar se os dados foram preenchidos corretamente e enquadrar as informações de acordo com o value (resultado)
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Preencha os dados corretamente...')
    } else {
        //campo radio do input p/ gênero c/ respostas diferentes
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        //criar elemento img e inserir o ID foto
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.marginTop = '15px'

        //condição composta p/ visualização da imagem de acordo com a idade
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultom.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebe-f.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src', 'adulto-f.jpg')
            } else {
                //Idosa
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        //adicionar informações no html pelo ID Res
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

//Inserir à função através de um click pelo ID do input button 'app'
var app = document.getElementById('app')
app.addEventListener('click', verificar)
