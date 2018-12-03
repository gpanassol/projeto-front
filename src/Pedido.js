import React,{Component} from 'react';

export default class Pedido extends Component {

	constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
	}
	
	handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

	render(){
		return (
	      <div>		
	          <div className="header">
	            <h1>Pedido</h1>
	          </div>
	          <div className="content" id="content"> 
							<br/>
							<div class="pure-g">
								<div class="pure-u-3-4">
									<div>
									<form onSubmit={this.handleSubmit}>
										<label>
											Tipo:
											<select value={this.state.value} onChange={this.handleChange} >
												<option value="">Lanches</option>
												<option value="xbacon">X-Bacon</option>
												<option value="xbuguer">X-Burguer</option>
												<option value="xegg">X-Egg</option>
												<option value="xeggbacon">X-EggBacon</option>
												<option value="personalizado">Personalizado</option>
											</select>
										</label>
										<br/>
										<br/>
										<input type="submit" value="Adicionar" />
									</form>
									</div>
									<div>
										<form onSubmit={this.handleSubmit}>
											<br/>
											<div class="pure-g">
												<div class="pure-u-1-4"><input name="alface" type="checkbox"/>Alface</div>
												<input type="text" placeholder="quantidade"/>
											</div>
											<div class="pure-g">
												<div class="pure-u-1-4"><input name="bacon" type="checkbox"/>Bacon</div>
												<input type="text" placeholder="quantidade"/>
											</div>
											<div class="pure-g">
												<div class="pure-u-1-4"><input name="hamburguer" type="checkbox"/>Hamburguer</div>
												<input type="text" placeholder="quantidade"/>
											</div>
											<div class="pure-g">
												<div class="pure-u-1-4"><input name="ovo" type="checkbox"/>Ovo</div>
												<input type="text" placeholder="quantidade"/>
											</div>
											<div class="pure-g">
												<div class="pure-u-1-4"><input name="queijo" type="checkbox"/>Queijo</div>
												<input type="text" placeholder="quantidade"/>
											</div>

											<br/>
											<br/>
											<input type="submit" value="Adicionar" />
										</form>
									</div>
								</div>
								<div class="pure-u-1-4">
									<table class="pure-table">
										<thead>
												<tr>
														<th>Lanche</th>
														<th>Valor</th>
												</tr>
										</thead>

										<tbody>
												<tr>
														<td>X-Bacon</td>
														<td>													
															{new Intl.NumberFormat('pt-BR', { 
																style: 'currency', 
																currency: 'BRL' 
															}).format(6.5)}
														</td>
												</tr>
												<tr>
														<td>X-Burguer</td>
														<td>													
															{new Intl.NumberFormat('pt-BR', { 
																style: 'currency', 
																currency: 'BRL' 
															}).format(4.5)}
														</td>
												</tr>
												<tr>
														<td>Personalizado</td>
														<td>													
															{new Intl.NumberFormat('pt-BR', { 
																style: 'currency', 
																currency: 'BRL' 
															}).format(12.5)}
														</td>
												</tr>
										</tbody>
										<tfoot>
											<th>Total</th>
											<th>
												{new Intl.NumberFormat('pt-BR', { 
													style: 'currency', 
													currency: 'BRL' 
												}).format(12.5)}
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