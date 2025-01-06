let musica = document.querySelector('audio')
let play = document.querySelector('.botao-play')
let pause = document.querySelector('.botao-pause')
let previous = document.querySelector('.previous')
let next = document.querySelector('.next')
let barra = document.querySelector('progress')
let inicio = document.querySelector('.inicio')
let fim = document.querySelector('.fim')
let imagens = document.querySelector('img')
let nomeMusica = document.querySelector('.descricao h2')
let nomeArtista = document.querySelector('.descricao i')
let atual = 0
let musicas = [
    {musica: 'Eye Of The Tiger', banda: 'Survivor',src:'musicas/dihsister-the-eye-of-tiger-ct-1435eb95.mp3', img:'imagens/caio-silva-C7RFkKvThG4-unsplash.jpg'},
    {musica: "Sweet Child O' Mine", banda: 'Guns N Roses',src:'musicas/guilhermeterra-sweet-child-o-mine-78fdced7.mp3', img:'imagens/james-barbosa-qOWjDs-77cM-unsplash.jpg'},
    {musica: 'Born to be Wild', banda: 'Steppenwolf',src:'musicas/lambertos-burn-to-be-wild-84893d1e.mp3', img:'imagens/jeremy-allouche-YStboKiFPVw-unsplash.jpg'},
    {musica: 'Love Hurts', banda: 'Nazareth',src:'musicas/lambertos-love-hurts-2eaa720d.mp3', img:'imagens/justin-clark-mK8bHYCtLrg-unsplash.jpg'},
    {musica: 'The final cowntdown', banda: 'Europe',src:'musicas/lambertos-the-final-cowntdown-b08abcd2.mp3', img:'imagens/justin-ziadeh-Xchu5q4NTvY-unsplash.jpg'},
]

nextMusic()

function tocarMusica(){
    musica.play()
    const duracaoTotal = ((musica.duration/60).toFixed(2)).toString().split(".")
    let minuto = duracaoTotal[0]
    let segundos = duracaoTotal[1]
    fim.innerHTML = `${minuto}:${segundos}`
    play.style.display = 'none'
    pause.style.display = 'block'

    
}

function pausarMusica(){
    musica.pause()
    pause.style.display = 'none'
    play.style.display = 'block'
}

function atualizarProgresso(){
    let tempoAtual = ((musica.currentTime/60).toFixed(2)).toString().split(".")
    inicio.innerHTML = `${tempoAtual[0]}:${tempoAtual[1]}`
    barra.style.width = `${Math.floor((musica.currentTime/ musica.duration)*100)}%`
   
}

function nextMusic(){
    let quantidadeMusicas = musicas.length
    musica.src = musicas[atual].src
    nomeMusica.innerHTML = musicas[atual].musica
    nomeArtista.innerHTML = musicas[atual].banda
    imagens.setAttribute("src", musicas[atual].img)
    atual = (atual+1)%quantidadeMusicas
    musica.load()
    musica.addEventListener('loadeddata', tocarMusica)
    musica.addEventListener('timeupdate', atualizarProgresso)
    
}

function previousMusic(){
    let quantidadeMusicas = musicas.length
    atual = (atual-1+quantidadeMusicas)%quantidadeMusicas
    musica.src = musicas[atual].src
    nomeMusica.innerHTML = musicas[atual].musica
    nomeArtista.innerHTML = musicas[atual].banda
    imagens.setAttribute("src", musicas[atual].img)
    musica.load()
    musica.addEventListener('loadeddata', tocarMusica)
    musica.addEventListener('timeupdate', atualizarProgresso)
    
}




play.addEventListener('click', tocarMusica)

pause.addEventListener('click', pausarMusica)

musica.addEventListener('timeupdate', atualizarProgresso)

next.addEventListener('click', nextMusic)

previous.addEventListener('click', previousMusic)



