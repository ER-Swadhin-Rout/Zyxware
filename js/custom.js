// home slider 
var owl = $('.owl-carousel.home-slider');
owl.owlCarousel({
	items :1,
	loop : true,
	margin: 0,
    // animateOut: 'fadeOut',
    // animateIn: 'flipInX',
    dots:false,
    nav:false,
	autoplay: true,
	autoplayTimeout:6000,
	autoplayHoverpause:false,
	responsive :{
		0:{
			dots:false,
			nav:false,
		},
		600:{
			dots:false,
			nav:false,
		},
		1000:{
			dots:true,
		}
	}
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});
// testimonial slider 
var owl = $('.owl-carousel.home-testimonial');
owl.owlCarousel({
	items :1,
	loop : true,
	margin: 0,
    // animateOut: 'fadeOut',
    // animateIn: 'flipInX',
    dots:true,
    nav:false,
	autoplay: true,
	autoplayTimeout:4000,
	autoplayHoverpause:false,
	responsive :{
		0:{
			dots:false,
			nav:false,
		},
		600:{
			dots:false,
			nav:false,
		},
		1000:{
			dots:true,
		}
	}
});

// accrodion 
$('.accrodion-head').on('click', function(){
       if($(this).hasClass('active')){
		   $(this).removeClass('active');
		   $(this).next('.accrodion-content').slideUp(200);
		   $(this).find('i').removeClass('fa-solid fa-minus').addClass('fa-solid fa-plus');
	   }
	   else{
		$('.accrodion-head').removeClass('active');
		$('.accrodion-content').slideUp(200);
		$('.accrodion-head .icon i').removeClass('fa-solid fa-minus').addClass('fa-solid fa-plus');
		  $(this).addClass('active');
		  $(this).next('.accrodion-content').slideDown(300);
		  $(this).find('i').removeClass('fa-solid fa-plus').addClass('fa-solid fa-minus');
	   }
});

// award slider 
// testimonial slider 
var owl = $('.owl-carousel.award');
owl.owlCarousel({
	items :5,
	loop : true,
	margin: 50,
    // animateOut: 'fadeOut',
    // animateIn: 'flipInX',
    dots:true,
    nav:false,
	autoplay: true,
	autoplayTimeout:4000,
	autoplayHoverpause:false,
	responsive :{
		0:{
	        margin: 20,
	        items :2,
			dots:false,
			nav:false,
		},
		600:{
	        margin: 30,
 	        items :5,
			dots:false,
			nav:false,
		},
		1000:{
	        items :5,
			dots:true,
		}
	}
});