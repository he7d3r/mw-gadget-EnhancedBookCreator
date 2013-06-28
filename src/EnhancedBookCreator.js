/**
 * @see: [[Tópico:Wikilivros:Diálogos comunitários/Aprimorando o Criador de livros]]
 * @author: [[User:Helder.wiki]]
 * @tracking: [[Special:GlobalUsage/User:Helder.wiki/Tools/EnhancedBookCreator.js]] ([[File:User:Helder.wiki/Tools/EnhancedBookCreator.js]])
 */
/*jshint browser: true, camelcase: true, curly: true, eqeqeq: true, immed: true, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: true, undef: true, unused: true, strict: true, trailing: true, maxlen: 120, evil: true, onevar: true */
/*global jQuery, mediaWiki */
( function ( mw, $ ) {
'use strict';

document.getElementById( 'book-creator-normal' ).style.display = 'none';
var i, texto, botao, r,
    aqui = document.getElementById( 'book-creator-melhorado' ),
	op = [
		document.getElementById( 'book-creator-op1' ),
		document.getElementById( 'book-creator-op2' )
	];
aqui.style.display = 'block';

for ( i=0; i < op.length; i++ ){
	op[i].style.display = 'none';
	botao = document.createElement( 'input' );
	botao.type = 'radio';
	botao.name = 'criar';
	botao.id = 'item_' + i;
	botao.value = i;

	if(i === 0) {
		botao.defaultChecked = true;
		botao.checked = true;
	}

	texto = document.createTextNode(op[i].innerHTML);

	r = document.createElement( 'label' );
	r.htmlFor = botao.id;
	r.appendChild(botao);
	r.appendChild(texto);

	aqui.appendChild(r);
	aqui.appendChild(document.createElement( 'br' ));
}

if ( mw.config.get( 'wgCanonicalSpecialPageName' ) === 'Book' ) {
	$(function () {
		var savebox = document.getElementById( 'coll-savebox' ),
			rightbox = savebox.parentNode,
			orderbox = rightbox.getElementsByTagName( 'div' )[0],
			downloadbox = rightbox.getElementsByTagName( 'div' )[3];
		// rightbox.style.display = 'none';
		orderbox.style.display = 'none';
		downloadbox.style.display = 'none';
		// savebox.style.display = 'none';
	});
}

}( mediaWiki, jQuery ) );