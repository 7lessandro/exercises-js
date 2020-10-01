
function carregar() {

    //resgatar os ID's com variáveis
    var msg = document.getElementById('mensagem')
    var img = document.getElementById('imagem')

    //pegar a data atual
    var data = new Date()

    //pegar apenas à hora p/ variavel hora
    var hora = data.getHours()

    //pegar apenas os minutos p/ variavel minuto
    var minuto = data.getMinutes()

    //id pra inserir uma mensagem de acordo com o horário
    var horario = document.getElementById('horario')


    //mensagem padrão usando os valores das variáveis hora e minuto
    msg.innerHTML = `Agora são ${hora}:${minuto}.`


    //condição composta p/ alterar as informações em base das condições de horários (dia, tarde e noite)
    if(hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'img/fotodia.jpg'
        document.body.style.background = '#71b8f6'
        horario.innerHTML = `Bom dia :)`
    } else if (hora >=12 && hora < 18) {
        //boa tarde
        img.src = 'img/fototarde.jpg'
        document.body.style.background = '#d58239'
        horario.innerHTML += `Boa tarde :)`
    } else {
        //boa noite
        img.src = 'img/fotonoite.jpg'
        horario.innerHTML = `Boa noite :)`
        document.body.style.background = '#19272a'
    }
}

//carregar função no html 'body'
document.body.setAttribute('load', carregar())