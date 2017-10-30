/*esto encontre en mi investigacion, no lo sé utilizar bien pero resulto*/
$(document).ready(function(){
	/*para cuando el scroll baja*/
	function changeMenuByScroll(){
		if($(this).scrollTop() > 100){
			$('.interno-1').addClass('header2');
		} else{
			$('.interno-1').removeClass('header2');
		}
		if($(this).scrollTop() > 760 & $(this).scrollTop() < 1600){
			$('.port').addClass('fondo-verde');
		} else{
			$('.port').removeClass('fondo-verde');
		}
		if($(this).scrollTop() > 1600 & $(this).scrollTop() < 2300){
			$('.about').addClass('fondo-verde');
		} else{
			$('.about').removeClass('fondo-verde');
		}
		if($(this).scrollTop() > 2300){
			$('.contact').addClass('fondo-verde');
		} else{
			$('.contact').removeClass('fondo-verde');
		}

	}
	/*llamo a la funcion cuando empieza el programa y coloca el header
	dependiendo del lugar en cual esta*/
	changeMenuByScroll();
	/*cada ves que se mueve el scroll*/
	$(window).scroll(function(){
		changeMenuByScroll();
	});


});
