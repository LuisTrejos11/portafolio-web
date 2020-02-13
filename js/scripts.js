$(function(){

	/*MODAL*/
	$('.galeria .contenedor-imagen').on('click', function(){
		$('#modal').modal;
		var ruta_imagen = ($(this).find('img').attr('src'));
		$('#imagen-modal').attr('src',ruta_imagen);
	});

	$('#modal').on('click',function(){
		$('#modal').modal('hide');
	});

	$('a[href=#portafolio]').click(function (event)
		{
		event.stopPropagation();
		var Position = jQuery('[id="seccion_1"]').offset().top;
		jQuery('html, body').animate({ scrollTop: Position }, 1100);
		return false;
		});

})


	/* SCROLL SUAVE */

