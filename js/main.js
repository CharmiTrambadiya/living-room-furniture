$(function() {
    
    "use strict";
    
    //===== Images Loaded
    
    $('#container').imagesLoaded( function() {
        // images have loaded
        
        //===== Isotope

        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1,
            }
        });

        // filter items on button click
        $(".case-menu ul").on( 'click', 'li', function() {
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({ filter: filterValue });
        });

        //for menu active class
        $(".case-menu ul li").on('click', function (event) {
            $(this).siblings(".active").removeClass("active");
            $(this).addClass("active");
            event.preventDefault();
        });
    
    });
    
});


