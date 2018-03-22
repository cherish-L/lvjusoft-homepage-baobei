$(function() {
	//header响应式样式
	$(document).ready(function() {
		var a, b, c;
		a = $(window).height();
		$(window).scroll(function() {
			var b = $(this).scrollTop();
			if(b >= 1) {
				$('.header').addClass('scroller')
				$('.header-wrapper').addClass('scroller')
			} else {
				$('.header').removeClass('scroller')
				$('.header-wrapper').removeClass('scroller')
			}
		});
	});
	
	//Floating_wrap下的子元素动画延迟时间逐步递增
	$('.Floating_wrap').children().each(function() {
		var li_index = $(this).index() + 1
		$(this).css('animation-delay', li_index / 8 + 's')
		$(this).css('-webkit-animation-delay', li_index / 8 + 's')
	})
	//Floating_wrap元素滑至距离顶部某距离执行函数
	$(document).ready(function() {
		var dataA, dataB, dataC;
		dataA = $(window).height();
		$(window).scroll(function() {
			var dataB = $(this).scrollTop();
			$('.Floating_wrap').each(function() {
				dataC = $(this).offset().top;
				if(dataA * 0.9 + dataB > dataC) {
					$(this).children().addClass("fadeInUp");
				}
			})
		})
	});
	
	var scrollTag=$('.scroll')
	//点击移动端菜单按钮加护效果
	$('#mobile-list-btn').click(function(){
		scrollTag.addClass('scrollOut')
		$('body').addClass('noScroll')
		if(scrollTag.hasClass('scrollOut')){
			$('.header-nav-mobile .nav-title-mobile .close').click(function(){
				scrollTag.removeClass('scrollOut')
				$('body').removeClass('noScroll')
			})
			$('.section').on('touchstart',function(){
				scrollTag.removeClass('scrollOut')
				$('body').removeClass('noScroll')
			})
		}
	})
	var windowH=$(window).height()
	$('.header-nav-mobile').height(windowH)
})