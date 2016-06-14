 (function(){




 	var menu = $('#portada .icon-menu');
 	var menuOpen = $('.open-menu');
 	var identidad = $('#portada .titulo img'); 
 	var retroceder = $('#portada .portafolio .back');
 	var retroceder2 = $('#portada2 .portafolio .back');
 	var retroceder3 = $('#portada3 .portafolio .back');
 	var vremya = $('#portada2 img');
 	var planime = $('#portada3 img');

 	menu.on('click',function(){
 		var t = $(this);
 		t.parent().parent().toggleClass('menu');
 		menuOpen.toggleClass('open');

 	});
 	identidad.on('click',function(){
 		var t = $(this);
 		if(menuOpen.attr('class') === 'open-menu open'){
 			menuOpen.removeClass('open');
 			$(document).find('.home').removeClass('menu');
 		}
 		$(document).find('#portada .home').addClass('open');
 		$(document).find('#portada .portafolio').addClass('open');
 	});
 	retroceder.on('click',function(){
 		var t = $(this);
 		$(document).find('#portada .home').removeClass('open');
 		$(document).find('#portada .portafolio').removeClass('open');
 	});
 	vremya.on('click',function(){
 		var t = $(this);
 		$(document).find('#portada2 .portafolio').addClass('open');
 		$(document).find('.vremya').addClass('open');
 	});
 	retroceder2.on('click',function(){
 		var t = $(this);
 		$(document).find('#portada2 .portafolio').removeClass('open');
 		$(document).find('.vremya').removeClass('open');
 	});
 	planime.on('click',function(){
 		var t = $(this);
 		$(document).find('#portada3 .portafolio').addClass('open');
 		$(document).find('.planimetria').addClass('open');
 	});
 	retroceder3.on('click',function(){
 		var t = $(this);
 		$(document).find('#portada3 .portafolio').removeClass('open');
 		$(document).find('.planimetria').removeClass('open');
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
	 