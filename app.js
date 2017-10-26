$(document).ready(function(){
	$(window).scroll(function(){
		console.log($(this).scrollTop());
		if($(this).scrollTop() > 0){
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
	});
});
