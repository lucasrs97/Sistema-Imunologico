$(document).ready(function(){

    $('.titulo')
    	.hide()
		.delay(500)
		.fadeIn(1000);

	$(window).scroll(function(){
		var topo = $(window).scrollTop();
			if(topo>800) {
				$('.imagens_primarios').fadeOut('1000');
			} else {
				$('.imagens_primarios').fadeIn('1000');
			}
		});

	var corSite1 = $('.titulo');
	var corSite2 = $('.introducao');
	var corSite3 = $('.rodape');
	var corSite4 = $('.texto1');

	$('#cor_vermelha').click(function(){
		corSite1.css("background","#7a1818");
		corSite2.css("background","#7a1818");
		corSite3.css("background","#7a1818");
		corSite4.css("background","#7a1818");
	});

	$('#cor_preta').click(function(){
		corSite1.css("background","#222");
		corSite2.css("background","#222");
		corSite3.css("background","#222");
		corSite4.css("background","#222");
	});

});