$(document).ready(function(){
	$('#select').on('change',function(){
		var selectValor = '#'+$(this).val();
		if (selectValor == '#todos') {
			$('#pai').children('div').show();	
		} else {
			$('#pai').children('div').hide();
			$('#pai').children(selectValor).show();
		}
	});
});

