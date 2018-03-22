$(function() {
	$('.section-wrapper-nav-list li').click(function() {
		var this_index = $(this).index()
		$(this).addClass('select').siblings().removeClass('select')
		$('.section-wrapper-content .module-list').eq(this_index).show().siblings().hide()
	})
	//鼠标经过出现黑三角箭头
	$('.office-design-list li').hover(function() {
		$(this).find('.num-title i').css('display', 'block')
		$(this).siblings().find('.num-title i').css('display', 'none')
	})

})