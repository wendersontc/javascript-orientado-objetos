class NegociacaoController{
	adiciona(event) {
		event.preventDefault();
        
        let $ = document.querySelector.bind(document);

		let inputQuantidade = document.querySelector('#quantidade');
		let inputData = documet.querySelector('#data');
		let inputValor = document.querySelector('#valor');

		console.log(inputData.value);
        console.log(inputQuantidade.value);
        console.log(inputValor.value);
	}
}