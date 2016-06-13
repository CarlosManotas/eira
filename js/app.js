 (function(){

 	var menu = $('#portada .icon-menu');
 	var menuOpen = $('.open-menu');
 	var identidad = $('#portada .titulo img'); 

 	menu.on('click',function(){
 		var t = $(this);
 		t.parent().parent().toggleClass('menu');
 		menuOpen.toggleClass('open');
 	});
 	identidad.on('click',function(){
 		var t = $(this);
 		$(document).find('#portada .home').css('left','-100vw');
 	});
	$.getScript('https://cdn.jsdelivr.net/scrollreveal.js/3.1.4/scrollreveal.min.js', function()
	   {
	       window.sr = ScrollReveal();
	      sr.reveal(".aparecer-arriba",{duration:500,useDelay:"always"});
	      sr.reveal(".aparecer-derecha",{duration:500,useDelay:"always",origin:"left"});
	      sr.reveal(".aparecer-izquierda",{duration:500,useDelay:"always",origin:"right",delay:500,easing:'cubic-bezier(0.17, 0.67, 0.83, 0.67)'});
	      sr.reveal(".aparecer-abajo",{duration:500,useDelay:"always",origin:"top"});
	       sr.reveal(".aparecer-delay",{duration:500}, 50);
	   });




 })();
	 