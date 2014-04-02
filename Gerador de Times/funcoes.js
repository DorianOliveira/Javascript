

function criarNovoJogador(nomeJogador, obrigatorio)
{
	var jogador = {};


	var id = 1;

	//Recupera o id de maior valor
	for (var i = 0; i < listaDeJogadores.length; i++) {
	
		if(listaDeJogadores[i].id > id)
			id = listaDeJogadores[i].id;
	};

	id++;

	jogador.id = id
	jogador.nome = nomeJogador;
	jogador.obrigatorio = obrigatorio;

	return jogador;
}

function InserirJogador(nomeJogador)
{

	var jogadorJaExistente = false;

	for(i = 0; i < listaDeJogadores.length; i++)
	{
		if(listaDeJogadores[i].nome == nomeJogador)
		{
			jogadorJaExistente = true;
			break;
		}
	}

	if(!jogadorJaExistente)
	{


		EsconderAlert();

		var novoJogador = criarNovoJogador(nomeJogador, jogadorObrigatorio);



		listaDeJogadores.push(novoJogador)

		var tipoLabel =  novoJogador.obrigatorio ? 'warning' : 'success';

		area
			.jogadoresAdicionados
			.append
			(
				
				label.adicionarJogador(novoJogador.id, novoJogador.nome, novoJogador.obrigatorio, tipoLabel, true)
			);

		return true;
	}
	else
	{
		ExibirAlert();	
		return false;
	}
}

function RemoverJogador(idJogador)
{
	
	var id = idJogador.replace('_', '');

	var indiceJogador = -1;
	var encontrouJogador = false;

	for(i = 0; i < listaDeJogadores.length; i++)
	{

		jogador = listaDeJogadores[i];

		indiceJogador ++;

		if(jogador.id == id)
		{
			encontrouJogador = true;
			break;
		}
		
	}

	if(encontrouJogador)
	{
		listaDeJogadores.splice(indiceJogador, 1);
		$('#'+idJogador).remove();
	}
}

function Salvar(campo)
{
	
	if(campo.val() != '')
	{
			
		var nomeNovoJogador = campo.val();

		if(InserirJogador(nomeNovoJogador))
		{
			campo.val('');

			return true;
		}
		
		return false;
	}

	return false;
}


function SalvarJogador()
{

	return Salvar(campo.novoJogador);


}



function SalvarJogadorObrigatorio()
{

	return Salvar(campo.novoJogadorObrigatorio);


}

function ExibirAlert()
{
	$('.alert').show(delay.alert);
	
}

function EsconderAlert()
{
	$('.alert').hide(delay.alert);
}


function SortearJogadores(quantidadePorTime)
{
	var time_1 = [];
	var time_2 = [];
	var _restantes = [];
	
	var jogadoresAdicionar = [];

	var turn = true;

	var time_1_completo = false;
	var time_2_completo = false;


	if(!listaDeJogadores.IsNullOrEmpty())
	{

		//Copia o array para uma lista provisória
		for (var i = 0; i < listaDeJogadores.length; i++) 
		{
			jogadoresAdicionar.push(listaDeJogadores[i]);
		};	


		for(i = 0; i < listaDeJogadores.length; i++)
		{
			
			var max = jogadoresAdicionar.length;
			var index = Math.floor(Math.random() * max );

			var jogadorEscolhido = jogadoresAdicionar[index];

			jogadoresAdicionar.splice(index, 1);

			if(turn)
			{
				if(time_1.length < quantidadePorTime)
					time_1.push(jogadorEscolhido);
				else
					_restantes.push(jogadorEscolhido);
			}
			else
			{
				if(time_2.length < quantidadePorTime)
					time_2.push(jogadorEscolhido);
				else
					_restantes.push(jogadorEscolhido);
			}

			turn = !turn;
		}
	}

	var times = 
	{
		time1 : time_1,
		time2 : time_2,
		restantes : _restantes
	}

	return times;

}

function EscreverTimes(time1, time2, restantes)
{

	area.panelTime1.text('');
	area.panelTime2.text('');
	area.panelRestantes.text('');

	//Escreve os nomes dos jogadores no time 1
	if(!time1.IsNullOrEmpty())
	{
		for (var i = 0; i < time1.length; i++) 
		{
			var jogador = time1[i];

			
			area.panelTime1
			.append
			(
				label.adicionarJogador(jogador.id, jogador.nome, 'success')
			);
		}
	}

	//Escreve os nomes dos jogadores no time 2
	if(!time2.IsNullOrEmpty())
	{
		for (var i = 0; i < time2.length; i++) 
		{

			var jogador = time2[i];

			area.panelTime2
			.append
			(
				label.adicionarJogador(jogador.id, jogador.nome, 'success')
			);
		}
	}	

	if(!restantes.IsNullOrEmpty())
	{
		for (var i = 0; i < restantes.length; i++) 
		{

			var jogador = restantes[i];

			area.panelRestantes
			.append
			(
				label.adicionarJogador(jogador.id, jogador.nome, 'warning')
			);
		};
	}
}

function Adicionar()
{
	EsconderAlert();

	//Delay para definir o focus do campo de texto
	setInterval(function(){

		campo.novoJogador.focus();
		campo.novoJogadorObrigatorio.focus();

	}, 100);
}