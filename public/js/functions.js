$(document).ready(function(){
	$.getJSON('/api/nav.json', function(info){
		
		var lis = info;
		var output = '';

		output += '<ul>';
		
		for(var i = 0; i < lis.items.length; i++){
			var item = lis.items[i];
			output += '<li><a href="' + item.url + '">' + item.label + '</a></li>';

			if( item.items.length ){
				output += '<ul class="sub">';
				for(var i = 0; i < item.items.length; i++){
					var subli = item.items[i];
					output += '<li><a href="' + subli.url + '">' + subli.label + '</a></li>';
				}
				output += '</ul>';
			}
		}

		output += '</ul>';

		$('#nav').html(output);
	});
});