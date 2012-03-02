/*Framework de Otimização de Desenvolvimento Javascript para Liferay, INC. 
* Codiname : Rogers.js
* @autor Paulo H. Pires -> about.me/paulohp e Gustavo Perdigão -> twitter.com/gugaperdigao
* versão: 1.0.0
* data: 01/02/2012
* GNU - Open-Source | É livre a ultilização, modificação e distribuição.
*/
$(document).ready(function(){

	//Metodo que Muda link do Título e do da Notícia em Destaque/Manchete
	function rogerMudarLinkManchete(idPortletInicial, idPortletFinal, idPortletReplaceInicial, idPortletReplaceFinal){
		var link = $("#+idPortletInicial").find(".asset-abstract").find(".asset-title").find("a").attr("href").replace("idPortletReplaceInicial","idPortletReplaceFinal");
			$("#+idPortletInicial").find(".asset-abstract").find(".asset-title").find("a").attr("href",link);
			$("#+idPortletInicial").find(".asset-abstract").find(".asset-more").find("a").attr("href",link);
	}
	
	//Metodo que muda link da lista de titulos
	function rogerMudaLinkLista(idPortletInicial, idPortletReplaceInicial, idPortletReplaceFinal){
		var lista = $("#+idPortletInicial").find(".title-list").find("a");
			for(i=0;i<lista.length;i++){
				var lnk = $(lista[i]).attr("href").replace("idPortletReplaceInicial","idPortletReplaceInicial");
				$(lista[i]).attr("href",lnk)
			}
	}
	
	//Metodo que retira img dos titulos
	function rogerRetiraImagensTitulos(tag){
		if($("tag")!=null)
			$("tag").find("img").attr("style","display:none");
	}

	//Metodo que esconde leia mais
	function rogerEsconderLeiaMais(idPortlet){
		$("#+idPortlet").find(".asset-more").hide()
	}

	//Metodo que abre qualquer img de 1 portlet selecionado com facebox
	function rogerTransformaFacebox(idPortlet){
		var divs=new Array(); 
			divs[0]="#+idPortlet";       

			for(j=0;j<divs.length;j++){
				var imagens = $(divs[j]).find(".journal-content-article").find("img")
				var novo_html = "";
				

				for(i=0;i<imagens.length;i++){
				  
				   var src =  $(imagens[i]).attr("src");
				   novo_html = novo_html + "<div id='img_facebox'><img src='"+src+"' alt='"+$(imagens[i]).attr("alt")+"' title='"+$(imagens[i]).attr("alt")+"'/><a href='"+src+"' rel='facebox' class='bt_ampliar'>Ampliar</a></div>" 
				}

				$(divs[j]).find(".journal-content-article").html("<p>"+novo_html+"</p>")
				novo_html = ""
			}
			$('a[rel*=facebox]').facebox()
	}

	//Metodo que abre qualquer img de VARIOS portlets selecionados
	function rogerAbreImagensFacebox (idPortlet1, idPortlet2, idPortlet3){
		var divs=new Array(); 
			divs[0]="#+idPortlet1";       
			divs[1]="#+idPortlet2";
			divs[2]="#+idPortlet3";

			for(j=0;j<divs.length;j++){
				var imagens = $(divs[j]).find(".journal-content-article").find("img")
				var novo_html = "";
				

				for(i=0;i<imagens.length;i++){
				  
				   var src =  $(imagens[i]).attr("src");
				   novo_html = novo_html + "<div id='img_facebox'><img src='"+src+"' alt='"+$(imagens[i]).attr("alt")+"' title='"+$(imagens[i]).attr("alt")+"'/><a href='"+src+"' rel='facebox' class='bt_ampliar'>Ampliar</a></div>" 
				}

				$(divs[j]).find(".journal-content-article").html("<p>"+novo_html+"</p>")
				novo_html = ""
			}
			$('a[rel*=facebox]').facebox()
	}

	//Metodo que retira informações desnecessarias do resultado da busca
	function rogerHideResultadoBusca(){
		//retira img do botão de pesquisa;
		$("#_77_search").attr("src","");

		//retira opcao de busca no resultado da pesquisa
		var valor_pesquisado = $("#column-1").find(".aui-field-element ").find("input").attr("value");
		$("#column-1").find(".aui-field-element ").html("");
		$("#_77_keywords").attr("value",valor_pesquisado)
		$("#portlet_77").find("header").hide()
		$(".col-2").html("");
		$(".col-1").html("");
		$(".col-4").html("");
		$("th").hide();
	}

	//Metodo que retira link de menu-pai em submenus
	function rogerHideLinkMenuPai(txtDoMenu, posicaoDoMenu){
		var li = $("#navigation").find("ul").find("li").find("a");
			if($(li[posicaoDoMenu]).text().trim()==txtDoMenu){  
				$(li[txtDoMenu]).attr("href","#")
		    } 
	}
	//Metodo que passa data para extenso
	function rogerRetiraZerosEsquerda(sStr){
	    var i;
	    for(i=0;i<sStr.length;i++)
	    	if(sStr.charAt(i)!='0')
	   		return sStr.substring(i);
	    	return sStr;
	}
	function rogerRetornaMesExtenso(mes){
	    mes = retiraZerosEsquerda(mes);
	    	var meses=["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
	    	var aux = (parseInt(mes));
	    	var indice = aux -1; 
	    return meses[indice];
	}

	//Metodo que muda a data de acordo com o browser
	function rogerMudaDataBrowser(){
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
 * Troca link em listas Autor: Gustavo Perdigão lista = Lista de elementos do
 * tipo <a> atual = identificação do portlet de atualização novo = identificação
 * do novo portlet de visuzlização
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
 * Insere Div em asset-summary Autor: Gustavo Perdigão id_portlet = id do
 * portlet para fazer a inserção
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
 * Função responsável por acertar a agenda para que fique seja possível
 * estilizar mês e dia Autor: Gustavo Perdigão id_portlet = id do portlet para
 * fazer a inserção
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
 * Retorna mês por extenso de acordo com um número inteiro passado por parêmetro
 * Autor: Gustavo Perdigão id_portlet = id do portlet para fazer a inserção
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
 * Valida e-mails Autor: Gustavo Perdigão str = Endereço de e-mail
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
 * Perdigão array = Array de registros registro = elemento procurado
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
 * Perdigão array = Array de registros registro = elemento procurado
 * 
 ******************************************************************************/

function validaForm(id_form,campos_a_validar,tipo_de_validacaoordem_web_form){

	var aux;
	var inputs = $("#"+id_form+" input");
	var campo="";
	var a_validar = campos_a_validar.split("-");
	var tp_validacao = tipo_de_validacao.split("-");
	for(i=0;i<=inputs.length;i++){
	    alert(contemRegistro(i,campos_a_validar))
	}
	
	
}

});
