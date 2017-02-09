class NegociacaoController{

	constructor(){
        let $ = document.querySelector.bind(document);

		//this._inputQuantidade = document.querySelector('#quantidade');
		//this._inputData = documet.querySelector('#data');
		//this._inputValor = document.querySelector('#valor');
		this._inputQuantidade = $('#quantidade');
		this._inputData = $('#data');
		this._inputValor = $('#valor');
		this._listaNegociacoes = new ListaNegociacoes();
		
		this._negociacoesView = new NegociacoesView($('#negociacoesView'));
		this._negociacoesView.update(this._listaNegociacoes);
		
		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($('#mensagemView'));
		this._mensagemView.update(this._mensagem);
	}
	
	adiciona(event) {
		event.preventDefault();

		/*let data = new Date(...
			this._inputData.value
			    .split("-")
			    .map((item,indice) => return item - indice % 2 )
               
		);*/
        //let helper = new DateHelper();
		//let data = helper.textoParaData(this._inputData.value);
		//diaMesAno = helper.dataParaTexto(negociacao.data);
        
		//let negociacao =
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociacao adicionada com sucesso';
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();
        
		console.log(negociacao);
	}

	_criaNegociacao(){
        return new Negociacao(
           DateHelper.textoParaData(this._inputData.value),
           this._inputQuantidade.value,
           this._inputValor.value
		);
	}

	_limpaFormulario(){
		this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus(); 
	}
}