jQuery( function(){

    jQuery(window).on('scroll', function(){
        if(jQuery(document).scrollTop() >= 500){
            jQuery('header').addClass('sticky');
        }else{
            jQuery('header').removeClass('sticky');
        }
    });
    
    jQuery('.tab-buttons li a').on('click', function(){
        jQuery('.tab-buttons li').removeClass('active');
        jQuery(this).parent().addClass('active');
    });


    var grid = jQuery('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
        percentPosition: true,
      });

      jQuery('.section-two').waypoint(function(direction){
        grid.isotope('layout');
        grid.isotope('arrange');
        grid.isotope('shuffle');
        console.log('applying...');
        },{offset:'10%'});
    
        jQuery('.slick').slick({
            autoplay:true,
            responsive: true,
            fade: true,
            dots:false,
            speed:200,
            pauseOnHover:false,
            adaptiveHeight: true,
            arrows: false
        });

        jQuery('input[type="range"]').on('input', function(){
           // alert(jQuery(this).val());
          jQuery('.price-range-value').html('0 - '+jQuery(this).val());
        })

        var pslider = jQuery('#price-slider')[0];
        noUiSlider.create(pslider, {
            start: [20000000, 80000000],
            connect: true,
            step: 10000,
            range: {
                'min': 0,
                'max': 100000000
            },

        });
        pslider.noUiSlider.on('update', function (values, handle) {
            console.log(handle);
            jQuery('.price-range-value').html( values[0]+' - '+ values[1]);
        });
})