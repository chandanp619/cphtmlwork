jQuery( function(){
    
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
    
})