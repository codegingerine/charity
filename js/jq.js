$(document).ready(function(){

	/* ===== FULLPAGE.JS PLUGIN ===== */

	$('#fullpage').fullpage({
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['#WeCanHelp', 'Brief', 'Helpers', 'Mechanism', 'HelpThem'],
		showActiveTooltip:true,
		autoScrolling: false,
		sectionsColor: ['#000000', '#ffffff', '#000000', '#def3ff', '#f4f9fc'],
		responsiveWidth: 992
	});


	/* ===== BRIEF SECTION ===== */

	/* Trigger typing effect when text container is scrolled to */ 
	var briefClaimWrap =  $('.brief').find('.claim-wrap');
	var briefClaim =  briefClaimWrap.find('.claim');
	
	$(window).scroll( function(){
		// Check the location of text container - bottom position
		var briefClaimWrapPos = briefClaimWrap.offset().top + briefClaimWrap.outerHeight();
		var windowPos = $(window).scrollTop() + $(window).height();
		// When text container is  visible in the window, display text
		if( windowPos > briefClaimWrapPos ){
			briefClaim.css({
				"display": "block"
			});
		};
	});

	/* ===== AUDIENCE SECTION ===== */

	/* Clone items (20 items within one block) */
	var userBlock =  $('.users').find('.icons-block');
	var userCloneTo = userBlock.find('.clonte-to');
	var userCloneToLast = $('.users').find('.icons-block-2 .clonte-to');
	for (var i = 0; i < 19; i++) {
	  userCloneTo.first().clone().removeClass('clonte-to').appendTo(userBlock);
	}
	for (var i = 0; i < 16; i++) {
	  userCloneToLast.first().clone().removeClass('clonte-to').insertAfter(userCloneToLast);
	}

	/* fadeIn items one by one when items wrap is scrolled to */ 
	var userImg = $('.users').find('img');
	var userBlocks =  $('.users').find('div[class^="icons-block"]');

	$(window).scroll( function(){
		if (document.documentElement.clientWidth > 768) {
			/* === Animate icons === */
			// Check the location of wraps with user icons
			userBlocks.each( function(i){
				// bottom position
				var userBlockSinglePos = $(this).offset().top + $(this).outerHeight();
				var windowPos = $(window).scrollTop() + $(window).height();
				// When wrap with icons is completely visible in the window, fade items in
				if( windowPos > userBlockSinglePos ){
					userImg.each(function(i) {
						$(this).delay(15 * i).fadeIn(0.03);
					});
				};
			});
		} else {
			/* === Display icons on small screens (without animation) === */
			userImg.css({
				"display": "block"
			})
		}
	});

	/* ===== MECHANISM SECTION ===== */

	/* FadeIn items one by one when items wrap is scrolled to */ 
	var stepBlocks =  $('.mechanism').find('.step');
	var stepImg = stepBlocks.find('img');
	
	$(window).scroll( function(){
		if (document.documentElement.clientWidth > 768) {
			/* === Animate icons === */
			// Check the location of wraps with icons
			stepBlocks.each( function(i){
				// bottom position
				var stepBlockSinglePos = $(this).offset().top + $(this).outerHeight();
				var windowPos = $(window).scrollTop() + $(window).height();
				// When wrap with icons is completely visible in the window, fade items in
				if( windowPos > stepBlockSinglePos ){
					stepImg.each(function(i) {
						$(this).delay(500 * i).fadeIn(1500);
					});
				};
			});
		} else {
			/* === Display icons on small screens (without animation) === */
			stepImg.css({
				"display": "block"
			})
		}
	});

});
