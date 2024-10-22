const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'


async function vizualizarInformacoesGlobais() {

    const resposta = await fetch(url)

    const dados = await resposta.json()

    //console.log(dados)



const paragrafo= document.createElement('p')
paragrafo.classList.add(graficos-container__texto)
paragrafo.innerHTML = `Você sabia que no mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conctadas} estão conectadas em alguma rede social ${dados.tempo_medio} horas conectadas`
const container=document.getElementById('graficos-container')
    container.appendChild(paragrafo);

}

vizualizarInformacoesGlobais()