/**
 * @description       Framework Javascript for fast development based in AlloyUI
 * @subdescription    Features in javascript to avoid repetitive codes.
 * @package           rogers.js
 * @version           0.2
 * @subpackage        rogers.min.js
 * @author            Paulo Henrique Pires -> usklandestinos.com .
 * @copyright         2012, Paulo Henrique Pires Araujo.
 * @license           GNU.
 */
YUI().use('node', 'rogers', function (Y) {

	/*!
	 * @functionname    changeLink
	 * @description     Function to Change Title link and the content.
	 * @param1 type     idPortletInicial = ID of the portlet you want to change
	 * @return type     O que ser� retornado.
	 */
	function changeLink(idPortletInicial, idPortletFinal, idPortletReplaceInicial, idPortletReplaceFinal){
		var link = Y.one("#+idPortletInicial").all(".asset-abstract").all(".asset-title").all("a").setAttribute("href").replace("idPortletReplaceInicial","idPortletReplaceFinal");
			Y.one("#+idPortletInicial").all(".asset-abstract").all(".asset-title").all("a").setAttribute("href",link);
			Y.one("#+idPortletInicial").all(".asset-abstract").all(".asset-more").all("a").setAttribute("href",link);
	}

	//Metodo que muda link da lista de titulos
	function changeLinkList(idPortletInicial, idPortletReplaceInicial, idPortletReplaceFinal){
		var lista = Y.one("#+idPortletInicial").all(".title-list").all("a");
			for(i=0;i<lista.length;i++){
				var lnk = Y.one(lista[i]).setAttribute("href").replace("idPortletReplaceInicial","idPortletReplaceInicial");
				$(lista[i]).setAttribute("href",lnk)
			}
	}
	
	//Metodo que retira img dos titulos
	function hideTitleImages(tag){
		if(Y.one("tag")!=null)
			Y.one("tag").all("img").setAttribute("style","display:none");
	}

	//Metodo que esconde leia mais
	function hideReadMore(idPortlet){
		Y.one("#+idPortlet").all(".asset-more").hide()
	}

	//Metodo que abre qualquer img de 1 portlet selecionado com facebox
	function addFacebox(idPortlet){
		var divs=new Array(); 
			divs[0]="#+idPortlet";       

			for(j=0;j<divs.length;j++){
				var imagens = Y.all(divs[j]).all(".journal-content-article").all("img")
				var novo_html = "";
				

				for(i=0;i<imagens.length;i++){
				  
				   var src =  Y.one(imagens[i]).getAttribute("src");
				   novo_html = novo_html + "<div id='img_facebox'><img src='"+src+"' alt='"+$(imagens[i]).attr("alt")+"' title='"+$(imagens[i]).setAttribute("alt")+"'/><a href='"+src+"' rel='facebox' class='bt_ampliar'>Ampliar</a></div>" 
				}

				$(divs[j]).all(".journal-content-article").html("<p>"+novo_html+"</p>")
				novo_html = "";
			}
			$('a[rel*=facebox]').facebox()
	}

	//Metodo que abre qualquer img de VARIOS portlets selecionados
	function openFacebox (idPortlet1, idPortlet2, idPortlet3){
		var divs=new Array(); 
			divs[0]="#+idPortlet1";       
			divs[1]="#+idPortlet2";
			divs[2]="#+idPortlet3";

			for(j=0;j<divs.length;j++){
				var imagens = Y.all(divs[j]).all(".journal-content-article").all("img")
				var novo_html = "";
				

				for(i=0;i<imagens.length;i++){
				  
				   var src =  Y.all(imagens[i]).getAttribute("src");
				   novo_html = novo_html + "<div id='img_facebox'><img src='"+src+"' alt='"+$(imagens[i]).attr("alt")+"' title='"+$(imagens[i]).attr("alt")+"'/><a href='"+src+"' rel='facebox' class='bt_ampliar'>Ampliar</a></div>" 
				}

				Y.all(divs[j]).all(".journal-content-article").html("<p>"+novo_html+"</p>")
				novo_html = "";
			}
			Y.all('a[rel*=facebox]').facebox();
	}

	//Metodo que retira informa��es desnecessarias do resultado da busca
	function hideResultFind(){
		//retira img do bot�o de pesquisa;
		Y.all("#_77_search").setAttribute("src","");

		//retira opcao de busca no resultado da pesquisa
		var valor_pesquisado = Y.all("#column-1").all(".aui-field-element ").all("input").getAttribute("value");
		Y.one("#column-1").all(".aui-field-element ").html("");
		Y.one("#_77_keywords").setAttribute("value",valor_pesquisado);
		Y.one("#portlet_77").all("header").hide()
		Y.one(".col-2").html("");
		Y.one(".col-1").html("");
		Y.one(".col-4").html("");
		Y.one("th").hide();
	}

	//Metodo que retira link de menu-pai em submenus
	function hideLinkMainMenu(txtDoMenu, posicaoDoMenu){
		var li = Y.one("#navigation").all("ul").all("li").all("a");
			if(Y.one(li[posicaoDoMenu]).text().trim()==txtDoMenu){  
				Y.one(li[txtDoMenu]).setAttribute("href","#");
		    } 
	}
	//Metodo que passa data para extenso
	function rmZeroLeft(sStr){
	    var i;
	    for(i=0;i<sStr.size;i++)
	    	if(sStr.charAt(i)!='0')
	   		return sStr.substring(i);
	    	return sStr;
	}
	function months(mes){
	    mes = retiraZerosEsquerda(mes);
	    	var meses=["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
	    	var aux = (parseInt(mes));
	    	var indice = aux -1; 
	    return meses[indice];
	}

	//Metodo que muda a data de acordo com o browser
	function changeDateBrowser(){
		var objetos = $(".metadata-publish-date");
		var divs = $(".metadata-publish-date").closest("div");
		for(i=0;i<objetos.length;i++){
		    data = $(objetos[i]).text().replace(/^\s+|\s+$/g,""); 
		    aux = data.split("/");
		    if($.browser.mozilla){
				aux = "<span class='mes'>"+retornaMes(aux[1])+"</span><span class='dia'>"+aux[0]+"</span>"; 
		    }else{
				aux = "<span class='mes'>"+retornaMes(aux[1])+"</span><span class='dia'>"+aux[0]+"</span>";  
		    }
		    $(divs[i]).html(aux); 
		}
	}
	
	/*************************************** Acerta texto sem bloco no banner *********************************/

	function rogerAcertaImagensEResumos(id_portlet){
		var portlet = $("#"+id_portlet);
		var sum = $(portlet).find('div.asset-summary');
		var small = $(portlet).find("div.asset-small-image");
		var textos = new Array();
		// Captura textos
		for (i=0;i<=sum.length;i++){
		
			textos[i] = $(sum[i]).contents().filter(function(){ return this.nodeType == 3; }).text();
		}
		
		$(portlet).find('div.asset-summary').contents().filter(function(){ return this.nodeType == 3; }).remove();
		$(portlet).find(".asset-more").remove();
		 
		//Apenda div
		for (i=0;i<=sum.length;i++){
			$(sum[i]).append("<div id='div-exclusiva-texto_"+i+"'></div>");
			var dv_txt = $("#div-exclusiva-texto_"+i);
			$(dv_txt).append(textos[i]);
			$(sum[i]).append(dv_txt);
		}
	}
	/*******************************************************************************
 * 
 * Troca link em listas Autor: Gustavo Perdig�o lista = Lista de elementos do
 * tipo <a> atual = identifica��o do portlet de atualiza��o novo = identifica��o
 * do novo portlet de visuzliza��o
 * 
 ******************************************************************************/

function trocaStringEmListasDeLinks(lista, atual, novo) {

	$(lista).each(function() {
		aux = $(this).attr("href");
		aux = aux.replace(atual, novo);
		$(this).attr("href", aux);

	});

}

/*******************************************************************************
 * 
 * Insere Div em asset-summary Autor: Gustavo Perdig�o id_portlet = id do
 * portlet para fazer a inser��o
 * 
 ******************************************************************************/

function acertaImagensEResumos(id_portlet) {

	var portlet = $("#" + id_portlet);
	var sum = $(portlet).find('div.asset-summary');
	var small = $(portlet).find("div.asset-small-image");
	var textos = new Array();
	// Captura textos
	for (i = 0; i <= sum.length; i++) {

		textos[i] = $(sum[i]).contents().filter(function() {
			return this.nodeType == 3;
		}).text();
	}

	$(portlet).find('div.asset-summary').contents().filter(function() {
		return this.nodeType == 3;
	}).remove();
	$(portlet).find(".asset-more").remove();

	// Apenda div
	for (i = 0; i <= sum.length; i++) {
		$(sum[i]).append("<div id='div-exclusiva-texto_" + i + "'></div>");
		var dv_txt = $("#div-exclusiva-texto_" + i);
		$(dv_txt).append(textos[i]);
		$(sum[i]).append(dv_txt);
	}
}

/*******************************************************************************
 * 
 * Fun��o respons�vel por acertar a agenda para que fique seja poss�vel
 * estilizar m�s e dia Autor: Gustavo Perdig�o id_portlet = id do portlet para
 * fazer a inser��o
 * 
 ******************************************************************************/

function acertaAgendaIndex(id_portlet) {

	var texto = $("#" + id_portlet + " .asset-summary").contents().filter(
			function() {
				return this.nodeType == 3;
			}).text();
	var data = texto.split(":")
	var aux = data[1].split("/")
	$("#" + id_portlet + " .asset-summary").contents().filter(function() {
		return this.nodeType == 3;
	}).remove()
	var conteudo = "<div id='dia_agenda'>" + aux[0] + "</div>"
			+ "<div id='mes_agenda'>" + retornaMesPorExtenso(aux[1]) + "</div>"
	$("#" + id_portlet + " .asset-summary p").after(conteudo);

}

/*******************************************************************************
 * 
 * Retorna m�s por extenso de acordo com um n�mero inteiro passado por par�metro
 * Autor: Gustavo Perdig�o id_portlet = id do portlet para fazer a inser��o
 * 
 ******************************************************************************/

function retornaMesPorExtenso(mes) {

	var aux = parseInt(mes);

	var meses = new Array();
	meses[1] = "Jan";
	meses[2] = "Fev";
	meses[3] = "Mar";
	meses[4] = "Abr";
	meses[5] = "Mai";
	meses[6] = "Jun";
	meses[7] = "Jul";
	meses[8] = "Ago";
	meses[9] = "Set";
	meses[10] = "Out";
	meses[11] = "Nov";
	meses[12] = "Dez";

	return meses[aux];

}

/*******************************************************************************
 * 
 * Valida e-mails Autor: Gustavo Perdig�o str = Endere�o de e-mail
 * 
 ******************************************************************************/

function ehMailValido(str) {

	var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	if (filter.test(str))
		valido = true;
	else {

		valido = false;
	}
	return valido;
}

/*******************************************************************************
 * 
 * Verifica se existe um determinado registro em um array Autor: Gustavo
 * Perdig�o array = Array de registros registro = elemento procurado
 * 
 ******************************************************************************/

function contemRegistro(registro, campos) {
	
	var array = campos.split("-");
	
	var reg = String(registro);
	for (i = 0; i <= array.length; i++) {
		if ($.trim(reg) == $.trim(array[i])) {
			return true;
		}
	}

	return false;

}

/*******************************************************************************
 * 
 * Verifica se existe um determinado registro em um array Autor: Gustavo
 * Perdig�o array = Array de registros registro = elemento procurado
 * 
 ******************************************************************************/

function validaForm(id_form,campos_a_validar,tipo_de_validacaoordem_web_form){

	var aux;
	var inputs = Y.all("#"+id_form+" input");
	var campo="";
	var a_validar = campos_a_validar.split("-");
	var tp_validacao = tipo_de_validacao.split("-");
	for(i=0;i<=inputs.length;i++){
	    alert(contemRegistro(i,campos_a_validar))
	}
	
	
}

});
