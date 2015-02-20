$(document).ready(function(){

	//Generate the nav menu
	$.getJSON('/api/nav.json', function(info){
		
		var lis = info;
		var output = '';
		output += '<a href="/"><img id="dLogo" src="images/huge-white.png" /></a>';
		output += '<ul>';
		for(var i = 0; i < lis.items.length; i++){
			var topNav = lis.items[i];
			output += '<li><a href="' + topNav.url + '">'; 
			output += topNav.label + '</a>';
			if( topNav.items.length ){
				output += '<ul class="sub">';
				for(var j = 0; j < topNav.items.length; j++){
					var subli = topNav.items[j];
					output += '<li><a href="' + subli.url + '">' + subli.label + '</a></li>';
				}
				output += '</ul>';
			}
			output += '</li>';
		}

		output += '</ul>';

		$('#nav').html(output);
		$('#resNav').html(output);
		$('#resNav').append('<div class="legal">&copy; 2015 Huge. All Rights Reserved.</div>');

	});

	//Handle responsive menu height
	var winHeight = $(window).height();

	$('#resNav').css('height', winHeight - 72 + 'px');

	$(window).on('resize', function(){
		var winHeight = $(window).height();
		$('#resNav').css('height', winHeight - 72 + 'px');
	});

	$('.menuToggle').click(function(){
		if( $('#resNav').hasClass('negMarg') ){
			$('#resNav').removeClass('negMarg');
		} else {
			$('#resNav').addClass('negMarg');
		}

		// if( $('#open').hasClass('fullopacity') ){
		// 	$('#open').removeClass('fullopacity');
		// 	$('#open').addClass('noopacity');
		// } else {
		// 	$('#open').addClass('fullopacity');
		// 	$('#open').removeClass('noopacity');
		// }

		// if( $('#close').hasClass('fullopacity') ){
		// 	$('#close').removeClass('fullopacity');
		// 	$('#close').addClass('noopacity');
		// } else {
		// 	$('#close').addClass('fullopacity');
		// 	$('#close').removeClass('noopacity');
		// }
		return false;
	});
	
});
