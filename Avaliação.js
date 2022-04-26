function getMovieInfosOMDB(title){ ///um conjunto de instruções que executa uma tarefa ou calcula um valor
    const url = `http://www.omdbapi.com/?t=${title}&apikey=790af7bc`   ///cria uma variável cujo o valor é fixo, ou seja, 
    ///uma constante somente leitura
       
    fetch(url) ///fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas.
    .then(response => response.json())
    .then(data => { ///usado para lidar com tarefas assíncronas(que não é sincrônico, que não apresenta sincronia ou sincronismo; assincrônico)

        if(data.Response == 'False'){
            descriptionBodyNotFound.textContent = "Filme não encontrado! Tente novamente.";
            descriptionBodyNotFound.style.marginBottom = '30px'
            movieTitle.textContent = ""
            movieYear.textContent = ""
            movieGenre.textContent = ""
            movieRuntime.textContent = ""
            imdbRating.textContent = ""
            movieInfo.textContent = ""
            movieWriter.textContent = ""
            movieDirector.textContent = ""
            remover1.textContent = ""
            remover2.textContent = ""
            moviePoster.style.backgroundImage = `url(filmeNaoEncontrado.png)`

        } else {
            descriptionBodyNotFound.textContent = "";
            
            movieTitle.textContent = data.Title
            movieYear.textContent = data.Year
            movieGenre.textContent = data.Genre
            movieRuntime.textContent = data.Runtime
            imdbRating.textContent = data.imdbRating
            movieInfo.textContent = data.Plot
            movieWriter.textContent = data.Writer
            movieDirector.textContent = data.Director
            moviePoster.style.backgroundImage = `url(${data.Poster})`
        }
        
        
     })  
}

var form = document.getElementById('formSearch'); ///var = variável
var title = document.getElementById('title');

form.addEventListener('submit', function(e) {
    
    getMovieInfosOMDB(title.value)
    // impede o envio do form
    e.preventDefault();


});
