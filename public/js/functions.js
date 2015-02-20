$(document).ready(function(){
	$.getJSON('/api/nav.json', function(info){
		
		var lis = info;
		var output = '';
		output += '<a href="/"><img id="dLogo" src="images/huge-white.png" /></a>';
		output += '<ul>';
		output += 	'<li class="logo"></li>';
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

			// if( item.items.length ){
			// 	output += '<ul class="sub">';
			// 	for(var i = 0; i < item.items.length; i++){
			// 		var subli = item.items[i];
			// 		output += '<li><a href="' + subli.url + '">' + subli.label + '</a></li>';
			// 	}
			// 	output += '</ul>';
			// }
		}

		output += '</ul>';

		$('#nav').html(output);
		$('#resNav').html(output);
	});
});