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

jssor_1_slider_init = function () {

            var jssor_1_options = {
                $AutoPlay: 1,
                $DragOrientation: 2,
                $PlayOrientation: 2,
                $BulletNavigatorOptions: {
                    $Class: $JssorBulletNavigator$,
                    $Orientation: 2
                }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            /*#region responsive code begin*/

            var MAX_WIDTH = 980;

            function ScaleSlider() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                    jssor_1_slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        };
