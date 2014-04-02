
campo.botoesModo.on('click', function(){
    
    modoDeJogo = $(this).data('value');
     
    campo.botoesModo.removeClass('active');
    
    $(this).addClass('active');


});



campo.botoesNumeroJogadores.on('click', function(){
    
    numeroJogadores = $(this).data('value');
     
    campo.botoesNumeroJogadores.removeClass('active');
    
    $(this).addClass('active');


});

campo.botaoSalvarEAdicionar.on('click', function(e){

	SalvarJogador();

});

$(campo.botaoSalvarEFechar).on('click', function(e){


	if(SalvarJogador())
		modal.AdicionarJogador.modal('hide');
});


campo.botaoSalvarObrigatorio.on('click', function(e){


	if(SalvarJogadorObrigatorio())
	{
		modal.AdicionarObrigatorio.modal('hide');
	}
});



campo.novoJogador.on('keypress', function(e){
    
    if(e.keyCode == keyboard.button.ENTER)
    	campo.botaoSalvarEAdicionar.click()

    else if(e.keyCode == keyboard.button.CTRL_ENTER)
        campo.botaoSalvarEFechar.click()

});


campo.novoJogadorObrigatorio.on('keypress', function(e){
    
    if(
    	e.keyCode == keyboard.button.ENTER 
    	|| e.keyCode == keyboard.button.CTRL_ENTER)
    {
    	campo.botaoSalvarObrigatorio.click()
    }

});



campo.botaoAdicionar.on('click', function(e){
	Adicionar();
	
});


campo.botaoAdicionarObrigatorio.on('click', function(e){
	
	Adicionar();

	jogadorObrigatorio = true;

	
});





campo.botaoFecharAlert.on('click', function(e)
{
	$(this).parent().hide(delay.alert);	
});

campo.botaoLimpar.on('click', function(e)
{
	area.jogadoresAdicionados.html('');
	area.panelTime1.text('');
	area.panelTime2.text('');
	area.panelRestantes.text('');

	area.sectionResultado.hide(delay.default);

	listaDeJogadores = [];
});

campo.botaoSortearTimes.on('click', function(e)
{

	area.sectionResultado.hide(delay.default);
	area.resultadoQuantidadeJogadores.text('');
	area.modoDeJogo.text('');
	area.numeroDeJogadores.html('');


	var modo = campo.botaoModoSelecionado().data('value');

	var modoSelecionado = modo;

	if(modo.toLowerCase() == 'random')
	{
		var randomIndex = Math.floor(Math.random() * modos.length);

		var contador = 0;

		for (var modo in  modos)
		{
			if(contador == randomIndex)
			{
				modoSelecionado = modos[modo]
				break;
			}
			contador ++;
		}	
	}

	modoDeJogo = modoSelecionado;
	numeroJogadores = campo.botaoNumeroJogadoresSelecionado().data('value');

	area.numeroDeJogadores.text(numeroJogadores);


	setTimeout(
		function(){

			area.sectionResultado.show(delay.default);

			area.modoDeJogo.text(modoDeJogo);
			
			area.resultadoQuantidadeJogadores.text(numeroJogadores);

			if(modal.SortearTimes.is(':visible'))
			{
				modal.SortearTimes.modal('hide');

				var times = SortearJogadores(numeroJogadores);
				

				var time1 = times.time1;
				var time2 = times.time2;
				var restantes = times.restantes;

				EscreverTimes(time1, time2, restantes);
			}


		}, 2000);


});

modal.AdicionarObrigatorio.on('hidden.bs.modal', function(e){

	jogadorObrigatorio = false;

});