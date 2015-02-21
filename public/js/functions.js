$(document).ready(function(){

	//Generate the nav menu
	$.getJSON('/api/nav.json', function(info){
		
		var lis = info;
		var output = '';
		output += '<a href="/"><img class="logoPull" id="dLogo" src="images/huge-white.png" /></a>';
		output += '<ul>';
		for(var i = 0; i < lis.items.length; i++){
			var topNav = lis.items[i];
			output += '<li><a class="prime" href="' + topNav.url + '">'; 
			output += topNav.label + '</a>';
			if( topNav.items.length ){
				output += '<a class="resSubDisp" href="#"><i class="fa fa-chevron-down"></i></a>';
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
		$('#resNav').append('<div id="legal">&copy; 2015 Huge. All Rights Reserved.</div>');
		$('#legal').addClass('abs');

		function menuLinks(){
			if($(window).width() > 769){
				$("#nav li:has(ul)").hover(function () {
				    $(this).children(".prime").click(function () {
				    	$('.sub').removeClass('open');
				    	$(this).siblings('ul').addClass('open');
				    	$('.mask').fadeIn();
				       	event.preventDefault();
				    });
				});
			}	
		}

		menuLinks();

		$(window).resize(function(){
			menuLinks();
		});		

		//check height of responsive menu and handle the legal copy
		function resMenuHeightCheck(){
			var navHeight = $('#resNav ul').height();
			var currentWinHeight = $(window).height() - 72;
			//alert('navigation: ' + navHeight + '. window: ' + currentWinHeight);
			if (winHeight > navHeight){
				$('#legal').addClass('rel');
				$('#legal').removeClass('abs');
			} else {
				$('#legal').addClass('abs');
				$('#legal').removeClass('rel');
			}
		}

		//flip the chevron on click
		$('.resSubDisp').on('click', function(){

			if($(this).hasClass('flip')){
				$(this).removeClass('flip');
			} else {
				$(this).addClass('flip');
			}
			$(this).siblings('ul').slideToggle('fast', resMenuHeightCheck() );
			
		});

	});


	//Handle responsive menu height

	var winHeight = $(window).height();

	$('#resNav').css('height', winHeight - 72 + 'px');

	$(window).on('resize', function(){
		var winHeight = $(window).height();
		$('#resNav').css('height', winHeight - 72 + 'px');
	});

	function handleNav(){
		var winWidth = $(window).width() - 72;
		$this = $(this);

		if( $('#resNav').hasClass('negMarg') ){
			$('#resNav').removeClass('negMarg');
		} else {
			$('#resNav').addClass('negMarg');
		}

		if( $('#dLogo').hasClass('logoPull') ){
			$('#dLogo').removeClass('logoPull');
		} else {
			$('#dLogo').addClass('logoPull');
		}

		if($('.menuToggle').hasClass('open')){
			$('.menuToggle').removeClass('open');
			$('.menuToggle').children('#open').removeAttr('style', '-webkit-transform:translateX('+ winWidth +'px);');
			$('.menuToggle').children('#open').removeAttr('style', 'transform:translateX('+ winWidth +'px);');
			$('.menuToggle').children('#close').removeAttr('style', '-webkit-transform:translateX('+ winWidth +'px);');
			$('.menuToggle').children('#close').removeAttr('style', 'transform:translateX('+ winWidth +'px);');
		} else {
			$('.menuToggle').addClass('open');
			$('.menuToggle').children('#open').attr('style', '-webkit-transform:translateX('+ winWidth +'px);');
			$('.menuToggle').children('#open').attr('style', 'transform:translateX('+ winWidth +'px);');
			$('.menuToggle').children('#close').attr('style', '-webkit-transform:translateX('+ winWidth +'px);');
			$('.menuToggle').children('#close').attr('style', 'transform:translateX('+ winWidth +'px);');
			$('.mask').fadeIn(300);
		}

		//shift body over if responsive
		if($(window).width() < 769){
			if($('.page').hasClass('bodyMove')){
				$('.page').removeClass('bodyMove');
			} else {
				$('.page').addClass('bodyMove');
			}
		}
	} // end handleNav()

	//handle the menu toggling
	$('.menuToggle').click(function(){
		handleNav();

		return false;
	});


	//close the menu and move body back if page is clicked
	$('.page').click(function(){
		$('.page').removeClass('bodyMove');
		$('#resNav').addClass('negMarg');
		$('#dLogo').addClass('logoPull');
		$('.menuToggle').removeClass('open');
		$('.menuToggle').children('#open').removeAttr('style', '-webkit-transform:translateX('+ winWidth +'px);');
		$('.menuToggle').children('#open').removeAttr('style', 'transform:translateX('+ winWidth +'px);');
		$('.menuToggle').children('#close').removeAttr('style', '-webkit-transform:translateX('+ winWidth +'px);');
		$('.menuToggle').children('#close').removeAttr('style', 'transform:translateX('+ winWidth +'px);');
		$('.sub').removeClass('open');
		$('.mask').fadeOut(300);

	});


	
});
