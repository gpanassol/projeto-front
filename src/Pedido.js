import React, { Component } from 'react';
import $ from 'jquery';

export default class Pedido extends Component {

	constructor(props) {
		super(props);
		this.state = { value: '', lista: [], valorTotalCompra: 0, alface: '', bacon: '', hamburguer: '', ovo: '', queijo: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
		this.setState({ alface: '', bacon: '', hamburguer: '', ovo: '', queijo: '' });
		this.renderSwitch(event.target.value);
	}

	renderSwitch(param) {
		switch (param) {
			case 'xbacon':
				this.setState({ bacon: 1 });
				this.setState({ hamburguer: 1 });
				this.setState({ queijo: 1 });
				break;
			case 'xbuguer':
				this.setState({ hamburguer: 1 });
				this.setState({ queijo: 1 });
				break;
			case 'xegg':
				this.setState({ ovo: 1 });
				this.setState({ hamburguer: 1 });
				this.setState({ queijo: 1 });
				break;
			case 'xeggbacon':
				this.setState({ ovo: 1 });
				this.setState({ bacon: 1 });
				this.setState({ hamburguer: 1 });
				this.setState({ queijo: 1 });
				break;
			default:
				break;
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		
		var ingredientes = [];
		
		console.log('alface .:', this.state.alface);

		if(this.state.alface > 0) {
			ingredientes.push({ "nome": 'alface', "qtd": this.state.alface, "preco": 0 })
		}
		
		if(this.state.bacon > 0){
			ingredientes.push({ "nome": 'bacon', "qtd": this.state.bacon, "preco": 0 })
		} 
		
		if(this.state.hamburguer > 0){
			ingredientes.push({ "nome": 'hamburguer', "qtd": this.state.hamburguer, "preco": 0 })
		} 
		
		if(this.state.ovo > 0){
			ingredientes.push({ "nome": 'ovo', "qtd": this.state.ovo, "preco": 0 })
		}
		
		if(this.state.queijo > 0){
			ingredientes.push({ "nome": 'queijo', "qtd": this.state.queijo, "preco": 0 })
		}

		var lanche = { "nome" : this.state.value, "valorTotal" : 0,  ingredientes };

		console.log(lanche);

		$.ajax({
			type: 'POST',
			url: "http://localhost:8080/compra/lanche",
			crossDomain: true,
			data: JSON.stringify(lanche),
			contentType: "application/json; charset=utf-8",
			success: function (resposta) {
				
				$.ajax({
					url: "http://localhost:8080/compra/lanches",
					dataType: 'json',
					success: function (resposta) {
						this.setState({ lista: resposta.lanches });
						this.setState({ valorTotalCompra: resposta.valorTotalCompra });
		
					}.bind(this)
				}
				);

			}.bind(this)
		  });
		
	}

	handleInputChange (event, ingrediente) {

		switch (ingrediente) {
			case 'alface':
				this.setState({ value: 'personalizado', alface : event }); 
				break;
			case 'bacon':
				this.setState({ value: 'personalizado', bacon : event }); 
				break;
			case 'hamburguer':
				this.setState({ value: 'personalizado', hamburguer : event }); 
				break;
			case 'ovo':
				this.setState({ value: 'personalizado', ovo : event }); 
				break;
			case 'queijo':
				this.setState({ value: 'personalizado', queijo : event }); 
				break;
			default:
				break;
		}

		
	};

	componentDidMount() {
		$.ajax({
			url: "http://localhost:8080/compra/lanches",
			dataType: 'json',
			success: function (resposta) {
				this.setState({ lista: resposta.lanches });
				this.setState({ valorTotalCompra: resposta.valorTotalCompra });

			}.bind(this)
		}
		);
	}

	render() {
		return (
			<div>
				<div className="header">
					<h1>Pedido</h1>
				</div>
				<div className="content" id="content">
					<br />
					<div className="pure-g">
						<div className="pure-u-3-4">
							<div>
								<form onSubmit={this.handleSubmit}>
									<label>
										<div className="pure-g">
											<div className="pure-u-1-4">Tipo:</div>
											<select value={this.state.value} onChange={this.handleChange} >
												<option value="">Lanches</option>
												<option value="xbacon">X-Bacon</option>
												<option value="xbuguer">X-Burguer</option>
												<option value="xegg">X-Egg</option>
												<option value="xeggbacon">X-EggBacon</option>
												<option value="personalizado">Personalizado</option>
											</select>
										</div>
									</label>
									<label>
										<br />
										<div className="pure-g">
											<div className="pure-u-1-4">Alface</div>
											<input id="alface" type="text" onChange={ e => this.handleInputChange(e.target.value, "alface")} value={this.state.alface} />
										</div>
										<div className="pure-g">
											<div className="pure-u-1-4">Bacon</div>
											<input id="bacon" type="text" placeholder="" onChange={ e => this.handleInputChange(e.target.value, "bacon")} value={this.state.bacon} />
										</div>
										<div className="pure-g">
											<div className="pure-u-1-4">Hamburguer</div>
											<input id="hamburguer" type="text" placeholder="" onChange={ e => this.handleInputChange(e.target.value, "hamburguer")} value={this.state.hamburguer} />
										</div>
										<div className="pure-g">
											<div className="pure-u-1-4">Ovo</div>
											<input id="ovo" type="text" placeholder="" onChange={ e => this.handleInputChange(e.target.value, "ovo")} value={this.state.ovo} />
										</div>
										<div className="pure-g">
											<div className="pure-u-1-4">Queijo</div>
											<input id="queijo" type="text" placeholder="" onChange={ e => this.handleInputChange(e.target.value, "queijo")} value={this.state.queijo} />
										</div>
									</label>

									<br />
									<br />

									<div className="pure-g">
										<div className="pure-u-1-4"><input type="submit" value="Adicionar" /></div>
									</div>

									
								</form>
							</div>
						</div>
						<div className="pure-u-1-4">
							<table className="pure-table">
								<thead>
									<tr>
										<th>Lanche</th>
										<th>Valor</th>
									</tr>
								</thead>

								<tbody>
									{
										this.state.lista.map(function (lanche) {
											return (
												<tr>
													<td>{lanche.nome}</td>
													<td>
														{new Intl.NumberFormat('pt-BR', {
															style: 'currency',
															currency: 'BRL'
														}).format(lanche.valorTotal)}
													</td>
												</tr>
											);
										})
									}

								</tbody>
								<tfoot>
									<th>Total</th>
									<th>
										{new Intl.NumberFormat('pt-BR', {
											style: 'currency',
											currency: 'BRL'
										}).format(this.state.valorTotalCompra)}
									</th>
								</tfoot>
							</table>
						</div>
					</div>
				</div>
			</div>

		);
	}
}