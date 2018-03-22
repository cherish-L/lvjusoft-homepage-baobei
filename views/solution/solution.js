$(function() {
	
	$('.section-wrapper-mobile .mobile-nav li').click(function() {
		var this_index = $(this).index()
		$(this).addClass('select').siblings().removeClass('select')
		$(this).append('<i></i>').siblings().find('i').remove()
		$('.section-wrapper-mobile .mobile-content li').eq(this_index).css('display', 'block').siblings().css('display', 'none')
	})
})