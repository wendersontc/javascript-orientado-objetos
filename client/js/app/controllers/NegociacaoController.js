class NegociacaoController{

	constructor(){
        let $ = document.querySelector.bind(document);

		this._inputQuantidade = document.querySelector('#quantidade');
		this._inputData = documet.querySelector('#data');
		this._inputValor = document.querySelector('#valor');
	}
	
	adiciona(event) {
		event.preventDefault();

		let data = new Date(...
			this._inputData.value
			    .split("-")
			    .map((item,indice) => return item - indice % 2 )
               
		);
        
		let negociacao = new negociacao(
           data,
           this._inputQuantidade.value,
           this._inputValor.value
		);

		console.log(negociacao);
	}
}