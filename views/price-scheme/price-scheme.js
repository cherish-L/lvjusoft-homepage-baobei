$(function() {

	var mySwiper = new Swiper('.price-card-mobile', {
		centeredSlides: true, ///设定为true时，active slide会居中，而不是默认状态下的居左。
		slidesPerView: 1.25,
		centeredSlides: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		on: {
			progress: function(progress) { ///progress(进度、进程),也就是说通过回调函数来判断每个slide的progress值得变化对于slide的progress属性，活动的那个为0，其他的依次减1。
				///例：如果一共有6个slide，活动的是第三个，从第一个到第六个的progress属性分别是：2、1、0、-1、-2、-3。
				for(i = 0; i < this.slides.length; i++) {
					var slide = this.slides.eq(i);
					var slideProgress = this.slides[i].progress; ///获取每个slide的progress值
					scale = 1 - Math.abs(slideProgress) / 8;
					scale_o = 1 - Math.abs(slideProgress) / 3;
					slide.transform('scale(' + scale + ')');
					slide.css('opacity', scale_o);
					if(Math.abs(slideProgress) > 3) {
						slide.css('opacity', 0);
					}
				}
			},
			setTransition: function(transition) {
				for(var i = 0; i < this.slides.length; i++) {
					var slide = this.slides.eq(i)
					slide.transition(transition);
				}
			}
		}
	})
})