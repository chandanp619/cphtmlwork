jQuery(function(){
    jQuery(window).on('scroll', function(){
        if(jQuery(document).scrollTop() >= 500){
            jQuery('header').addClass('sticky');
        }else{
            jQuery('header').removeClass('sticky');
        }
    });


    jQuery('.section-three').waypoint(function(direction){
    jQuery('.item.from-right').fadeIn('slow');
    jQuery('.item.from-left').fadeIn('slow');

    },{offset:'10%'});


    jQuery('.section-four').waypoint(function(direction){
        jQuery('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }, {offset: '20%'})

    jQuery('.reviews').owlCarousel({
        loop:true,
        arrows:false,
        dots:false,
        autoplay:true,
        responsive:{
            325:{
                items:1
            },
            768: {
                items:1
            },
            1024:{items:1}
        }
    });


})