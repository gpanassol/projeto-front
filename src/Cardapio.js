import React,{Component} from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from 'jquery';

export default class Cardapio extends Component {

  constructor() {
    super();    
    this.state = {cardapio : []};
  }

	componentDidMount(){
    $.ajax({
        url:"http://localhost:8080/cardapio/todos",
        dataType: 'json',
        success:function(resposta){    
          //console.log(resposta);
          this.setState({cardapio:resposta});
        }.bind(this)
      } 
    );          
  }

	render(){

		return (

			<div>		
					<div className="header">
						<h1>Cardápio</h1>
					</div>
					<div className="content" id="content">     
						
							{
								this.state.cardapio.map(function(lanche){
									return (
										<div class="pure-g">
											<div class="pure-u-3-4">
												<p>{lanche.nome}</p>
											</div>
											<div class="pure-u-1-4">
												<p>
													{new Intl.NumberFormat('pt-BR', { 
															style: 'currency', 
															currency: 'BRL' 
													}).format(lanche.valorTotal)}
												</p>
											</div>
										</div>
									);
								})
							}
						</div>
					
			</div>
    );

	
	}
}