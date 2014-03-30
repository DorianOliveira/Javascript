var modoDeJogo;
var numeroJogadores;
var listaDeJogadores = new Array();


var modos = [ 'Assault', 'Arena', 'Just', 'Conquest' ] ;


var modal = 
{
	AdicionarJogador : $('#modal-adicionar-jogador'),
	SortearTimes : $('#modal-sortear-times'),
}

var delay = 
{
	default: 300,
	alert: 300
}

var keyboard =
{
	button :
	{
		ENTER : 13,
		CTRL_ENTER : 10
	}
};

var campo = 
{
	novoJogador : $('#txtNovoJogador'),
	botaoSalvar : $('#btnSalvar'),
	botaoSalvarEAdicionar : $('#btnSalvarEAdicionar'),
	botaoSalvarEFechar : $('#btnSalvarEFechar'),
	botaoAdicionar : $('#btnAdicionarJogador'),
	
	botaoLimpar : $('#btnLimpar'),

	botaoSortearTimes: $('#btnSortearTimes'),

	botaoFecharAlert  : $('.alert > .close'),
	botoesModo : $('.botao-modo'),
	botoesNumeroJogadores : $('.botao-numero-jogadores'),


	botaoModoSelecionado : function()
	{
		return $('.botao-modo.active');
	},

	botaoNumeroJogadoresSelecionado : function()
	{
		return $('.botao-numero-jogadores.active');
	}	

};


var label = 
{

	adicionarJogador : function(id, nome, tipoLabel, funcaoExcluir)
	{

		var labelClass = 'success';

		if(tipoLabel != undefined && tipoLabel != null)
		{
			switch(tipoLabel.toString().toLowerCase())
			{
				
				case 'primary':
				case 'warning':
				case 'success':
				case 'info':
				case 'danger':

					labelClass = tipoLabel.toLowerCase();
					break;
				
				default:
					labelClass ='default';	
					break;

			}
		}

		labelClass = 'label-' + labelClass;

		//Criacao do icone
		var icon = $('<span></span>');
		icon.addClass('glyphicon');
		icon.addClass('glyphicon-remove-sign');
	

		//Criacao do label
		var label = $('<span></span>');
		

		label.addClass('label');
		
		label.addClass(labelClass);

		label.addClass('RemoverJogador');
		label.attr('id', "_" + id);
		label.attr('data-id', id);


		//Adiciona texto no label
		label.append(nome);

		//Adiciona texto no label
		label.append('&nbsp;');

		
		var stringFuncaoExcluir = 'RemoverJogador(this.id);return false;';
		
		if(funcaoExcluir != undefined && funcaoExcluir != null && funcaoExcluir)
		{
			label.attr('onclick', stringFuncaoExcluir);
			
			//Adiciona o icone no label
			label.append(icon);
		}

		return label;
	
	}

}

var area =
{
	jogadoresAdicionados : $('#JogadoresAdicionados > .panel-body > h4'),
	panelTime1 :  $('#panel-time1 > .panel-body > h4'),
	panelTime2 :  $('#panel-time2 > .panel-body > h4'),
	panelRestantes :  $('#panel-restantes > .panel-body > h4'),

	numeroDeJogadores : $('#label-quantidade-jogadores'),
	modoDeJogo  : $('#modo-selecionado'),

	sectionResultado: $('#section-resultado'),
	resultadoQuantidadeJogadores : $('#jogadores-quantidade')


}

Array.prototype.IsNullOrEmpty = function()
{
     return (this == null && this == undefined) || (this != null && this.length == 0) ;
}
