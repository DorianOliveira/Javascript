


function AdicionarRemoverValor(campo, valor, adicionar)
{
   
  var valores; 

  if($(campo) != '' && $(campo) != undefined)
  {
      valores = $(campo).val().toString().split(',');
      
      if(adicionar)
      {
          var jaExiste = false;

          for(iValor = 0; iValor < valores.length; iValor++)
          {
              if(valores[iValor] == valor)
              {
                  jaExiste = true;
                  break;                
              }
                              
          }

          if(!jaExiste)
              valores.push(valor);
      }
      else
      {

          var indice = 0;
          
          for(iValor = 0; iValor < valores.length; iValor++)
          {
              if(valores[iValor] == valor)
                  break;

              indice ++;                     
          }

          valores.splice(indice, 1);
      }

      $(campo).val(valores.join());

    }
    else
    {
        if(adicionar)
            campo.val(valor);
    }
}
