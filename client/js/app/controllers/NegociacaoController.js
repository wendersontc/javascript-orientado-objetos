class NegociacaoController{

	constructor(){
        let $ = document.querySelector.bind(document);

		this._inputQuantidade = document.querySelector('#quantidade');
		this._inputData = documet.querySelector('#data');
		this._inputValor = document.querySelector('#valor');
		this._listaNegociacoes = new ListaNegociacoes();
	}
	
	adiciona(event) {
		event.preventDefault();

		/*let data = new Date(...
			this._inputData.value
			    .split("-")
			    .map((item,indice) => return item - indice % 2 )
               
		);*/
        let helper = new DateHelper();
		let data = helper.textoParaData(this._inputData.value);
		diaMesAno = helper.dataParaTexto(negociacao.data);
        
		//let negociacao =
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());
		console.log(negociacao);
	}

	_criaNegociacao(){
        return new negociacao(
           data,
           this._inputQuantidade.value,
           this._inputValor.value
		);
	}

	_limpaFormulario(){
		this._inputData.value = '';
		this._inputValor.value = '';
	}
}