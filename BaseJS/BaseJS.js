
function ElementosHTML() {
  chave;
  valor;

  adicionarCampo = function (chave, seletor) {
    this[chave] = seletor;
  }

  removerCampo = function (chave) {
    delete this[chave];
  }

}

var keyboard =
{
  button:
  {
    ENTER: 13,
    CTRL_ENTER: 10
  }
};


var campo =
{


};


var label =
{


}

var area =
{
  jogadoresAdicionados: $('#JogadoresAdicionados > .panel-body > h4'),
  panelTime1: $('#panel-time1 > .panel-body > h4'),
  panelTime2: $('#panel-time2 > .panel-body > h4'),
  panelRestantes: $('#panel-restantes > .panel-body > h4'),

  numeroDeJogadores: $('#label-quantidade-jogadores'),
  modoDeJogo: $('#modo-selecionado'),

  sectionResultado: $('#section-resultado'),
  resultadoQuantidadeJogadores: $('#jogadores-quantidade')


}

Array.prototype.IsNullOrEmpty = function () {
  return (this == null && this == undefined) || (this != null && this.length == 0);
}
