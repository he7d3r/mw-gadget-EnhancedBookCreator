/**
 * @see: [[Tópico:Wikilivros:Diálogos comunitários/Aprimorando o Criador de livros]]
 */
document.getElementById( 'book-creator-normal' ).style.display = 'none';
var aqui = document.getElementById( 'book-creator-melhorado' );
aqui.style.display = 'block';

var op = [ document.getElementById( 'book-creator-op1' ),
          document.getElementById( 'book-creator-op2' ) ];

for ( var i=0; i < op.length; i++ ){
	op[i].style.display = 'none';
	var botao = document.createElement( 'input' );
	botao.type = 'radio';
	botao.name = 'criar';
	botao.id = 'item_' + i;
	botao.value = i;

	if(i == 0) {
		botao.defaultChecked = true;
		botao.checked = true;
	}

	var texto = document.createTextNode(op[i].innerHTML);

	var r = document.createElement( 'label' );
	r.htmlFor = botao.id;
	r.appendChild(botao);
	r.appendChild(texto);

	aqui.appendChild(r);
	aqui.appendChild(document.createElement( 'br' ));
}





if ( 'Especial:Livro' === mw.config.get( 'wgPageName' ) ) {
	$(function () {
		var savebox = document.getElementById( 'coll-savebox' );
		var rightbox = savebox.parentNode;
		var orderbox = rightbox.getElementsByTagName( 'div' )[0];
		var downloadbox = rightbox.getElementsByTagName( 'div' )[3];
		//rightbox.style.display = 'none';
		orderbox.style.display = 'none';
		downloadbox.style.display = 'none';
		//savebox.style.display = 'none';
	});
}