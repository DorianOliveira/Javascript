
var medidor =
{

    'id' : 'arco',
    'x': 0,
    'y' : 0,
	'ponteiro' :
	 {
        'variacao'         : 3,
        'anguloAtual'      : 0,
        'posicao'          : 0,
        'altura'           : 140       
    },

	'arco' :
	{
	   

	    'anguloInicial'     : 1.10,
	    'anguloFinal'       : 1.90,
	    'raio'              : 105,
	    'espessura'         : 35,
	    'corFundo'          : '#ccc',
	    'corMedicao'        : 'green'
	   
	},

	gerar : function(angulo)
	{
        
		var canvas = document.getElementById(this.id);
		var context = canvas.getContext('2d');
	    
		this.x = canvas.width / 2;
	    	this.y = canvas.height / 2;
	    
        
        
		context.clearRect(0, 0, canvas.width, canvas.height);
	    
        	var medidor = this;
	    	var interval = setInterval(function(){
	        
			context.clearRect(0, 0, canvas.width, canvas.height);
	   
	        var final = medidor.arco.anguloFinal * 180 - 180 - 
	            ((2 - medidor.arco.anguloFinal) * 180)
	     
	        if(angulo < 0)
	            angulo = 0;
	        
	        if(medidor.ponteiro.anguloAtual >= angulo || medidor.ponteiro.anguloAtual >= final)
	            clearInterval(interval);
	        
	        medidor.desenharArco(canvas, context);
	        
	        context.save();
	        medidor.desenharPonteiro(canvas, context, angulo);
	        context.restore();
	        
	     }, 100);
	},




	 desenharArco : function(canvas, context)
	 {
         
		var radius = this.arco.raio;
		var startAngle =  this.arco.anguloInicial * Math.PI;
        
	    	var inicio = 2 - this.arco.anguloInicial;
	    	var endAngle = (-1 * inicio) * Math.PI + (this.ponteiro.anguloAtual / 180 * Math.PI);
	    
	    	var angleLimit = this.arco.anguloFinal * Math.PI;
		var counterClockwise = false;
	    
	    
	    //Desenha o arco de fundo
		context.beginPath();
		context.lineWidth = this.arco.espessura;
		context.strokeStyle = this.arco.corFundo;
	    	context.arc(this.x, this.y, radius, startAngle, angleLimit, counterClockwise);
		context.stroke();
		context.closePath();
    
	    	//Desenha a parte do arco que representa a media
		context.beginPath();
		context.strokeStyle = this.arco.corMedicao;
		context.arc(this.x, this.y, radius, startAngle, endAngle, counterClockwise);
		context.stroke();
		context.closePath();
	},

 	desenharPonteiro : function(canvas, context, angulo)
    	{
        	
        	
        	var posicaoPonteiro = this.y - this.ponteiro.posicao;
		var heightPonteiro = posicaoPonteiro - this.ponteiro.altura;
		
	  	context.beginPath();
	    
		if(angulo != null && angulo != undefined)
		{
			context.translate(this.x,posicaoPonteiro);	
			context.rotate
	        (
	            
	            (-1 * (2 - this.arco.anguloInicial)) * Math.PI + 
	            90 * Math.PI / 180
	            + this.ponteiro.anguloAtual / 180 * Math.PI            
	        )

			context.translate(-1 * this.x, -1 * posicaoPonteiro);
	        
			if(angulo > 0)
			    this.ponteiro.anguloAtual += this.ponteiro.variacao;
		        else   
		            this.ponteiro.anguloAtual -= this.ponteiro.variacao;
		}
	    
	        context.beginPath();
	        context.lineWidth = 1;
	        context.fillStyle = '#555';	
		context.moveTo(this.x, posicaoPonteiro - 26);
		
	        context.lineTo(this.x+5, posicaoPonteiro - 26);
	    	context.lineTo(this.x, heightPonteiro);
	        context.moveTo(this.x+5, posicaoPonteiro - 26);
	        context.lineTo(this.x+5, posicaoPonteiro - 26);
	        context.lineTo(this.x, heightPonteiro);
		context.fill();
	    
	        context.closePath();
	        context.beginPath();
	        context.fillStyle = '#444';	
	        
	        context.moveTo(this.x+5, posicaoPonteiro - 26);
	        context.lineTo(this.x+10, posicaoPonteiro - 26);
	        context.lineTo(this.x, heightPonteiro);
	        
	        context.fill();
		context.closePath();
	}

}

medidor.id = 'medidor';
medidor.gerar(100);
