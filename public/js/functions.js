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
				output += '<div class="resSubDisp" href="#"><i class="fa fa-chevron-down"></i></div>';
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

	$('.resSubDisp').on('click', function(){
		alert('hi!');
	});

	//Handle responsive menu height
	var winHeight = $(window).height();

	$('#resNav').css('height', winHeight - 72 + 'px');

	$(window).on('resize', function(){
		var winHeight = $(window).height();
		$('#resNav').css('height', winHeight - 72 + 'px');
	});

	//handle the menu toggling
	$('.menuToggle').click(function(){
		var winWidth = $(window).width() - 72;
		$this = $(this);

		if( $('#resNav').hasClass('negMarg') ){
			$('#resNav').removeClass('negMarg');
		} else {
			$('#resNav').addClass('negMarg');
		}

		if($this.hasClass('open')){
			$this.removeClass('open');
			$this.children('#open').removeAttr('style', '-webkit-transform:translateX('+ winWidth +'px);');
			$this.children('#open').removeAttr('style', 'transform:translateX('+ winWidth +'px);');
			$this.children('#close').removeAttr('style', '-webkit-transform:translateX('+ winWidth +'px);');
			$this.children('#close').removeAttr('style', 'transform:translateX('+ winWidth +'px);');
		} else {
			$this.addClass('open');
			$this.children('#open').attr('style', '-webkit-transform:translateX('+ winWidth +'px);');
			$this.children('#open').attr('style', 'transform:translateX('+ winWidth +'px);');
			$this.children('#close').attr('style', '-webkit-transform:translateX('+ winWidth +'px);');
			$this.children('#close').attr('style', 'transform:translateX('+ winWidth +'px);');
		}

		return false;
	});


	
});
