//Atualiza a div de hora pegando a hora da data no formato dd/mm/yyyy hh:mm:ss
function atualizaHora(){ document.getElementById('hora').innerHTML = new Date().toLocaleString().substring(11, 16); }

atualizaHora();

//Atualiza a hora a cada 30 segundos
setTimeout(function() { atualizaHora();	}, 30000);

function abreJanela(janela){
	document.getElementsByTagName('body')[0].className = '';
	document.getElementsByTagName('body')[0].classList.add(janela);
}
function fechaJanela(janela){

	document.getElementsByTagName('body')[0].className = '';
	document.getElementsByTagName('body')[0].classList.remove(janela);
}

function avancaSlide(qtde){

	var slideAtual = document.getElementById('janela-portifolio').getAttribute('data-slide');

	slideAtual++;

	slideAtual = slideAtual > qtde ? 1 : slideAtual;

	document.getElementById('janela-portifolio').setAttribute('data-slide', slideAtual);
	document.getElementById('pagina-n').innerHTML = slideAtual;
}

function voltaSlide(qtde){
	
	var slideAtual = document.getElementById('janela-portifolio').getAttribute('data-slide');

	slideAtual--;

	slideAtual = slideAtual == 0 ? qtde : slideAtual;

	document.getElementById('janela-portifolio').setAttribute('data-slide', slideAtual);
	document.getElementById('pagina-n').innerHTML = slideAtual;
}