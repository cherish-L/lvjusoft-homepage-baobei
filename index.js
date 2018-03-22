$(function() {
	//首页banner轮播图，带animate.css延迟动画
	var mySwiper	 = new Swiper('.swiper-container-PC', {
		direction: 'vertical',
		mousewheel: {
		    releaseOnEdges: true,
		},
		autoplay: {
		    delay: 5000,//5秒切换一次
		},
		pagination: {
		    el: '.swiper-pagination',
		    clickable :true
		},
		on: {
		    slideChangeTransitionStart: function(){
				var slide_index = this.activeIndex
				$('.swiper-container-PC .swiper-slide').find('.animate-img').removeClass('fadeInLeft')
				$('.swiper-container-PC .swiper-slide').find('.swiper-slide-txt').children().removeClass('fadeInRight')
				$('.swiper-container-PC .swiper-slide').eq(slide_index).find('.animate-img').addClass('fadeInLeft')
				$('.swiper-container-PC .swiper-slide').eq(slide_index).find('.swiper-slide-txt').children().addClass('fadeInRight')
				$(window).scrollTop('0')
		    },
		}
	})
	//首页banner轮播图，带animate.css延迟动画
	var mySwiper = new Swiper('.swiper-container-mobile', {
		autoplay: {
		    delay: 5000,
		},
		pagination: {
		    el: '.swiper-pagination',
		    clickable :true
		},
	})
	
	//banner轮播组件锚点按钮，点击上滑一屏
	var header_h=$('.header').height()
	$('.home-banner-wrapper .scrolled-banner').click(function() {
		var Sposition = $('.home-section-wrapper').offset().top - header_h;
		$("html,body").animate({
			scrollTop: Sposition
		}, 1000);
	})
	
	//banner轮播组件的高度
	var windowH = $(window).height() - header_h
	$('.home-banner').height(windowH)

	
	//专为行业办公场景设计：鼠标经过出现黑三角箭头
	$('.office-design-list li').hover(function() {
		$(this).find('.num-title i').css('display', 'block')
		$(this).siblings().find('.num-title i').css('display', 'none')
	})
})