//=require jquery/dist/jquery.min.js
//=require bootstrap-sass/assets/javascripts/bootstrap.min.js
//=require extention/menuzord.js
//=require slick-carousel/slick/slick.min.js
//=require jssor-slider/js/jssor.slider.min.js

;(function($) {

  'use strict';

  // document ready
  $(document).ready(function() {

    // Slideshow
    if ($('#jssor_1').length) {
      var jssor_1_SlideshowTransitions = [
        {$Duration:1200,x:0.2,y:-0.1,$Delay:20,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InWave,$Top:$Jease$.$InWave,$Clip:$Jease$.$OutQuad},$Outside:true,$Round:{$Left:1.3,$Top:2.5}},
        {$Duration:1500,x:0.3,y:-0.3,$Delay:20,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.1,0.9],$Top:[0.1,0.9]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Outside:true,$Round:{$Left:0.8,$Top:2.5}},
        {$Duration:1500,x:0.2,y:-0.1,$Delay:20,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InWave,$Top:$Jease$.$InWave,$Clip:$Jease$.$OutQuad},$Outside:true,$Round:{$Left:0.8,$Top:2.5}},
        {$Duration:1500,x:0.3,y:-0.3,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Outside:true,$Round:{$Left:0.8,$Top:2.5}},
        {$Duration:1800,x:1,y:0.2,$Delay:30,$Cols:10,$Rows:5,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2050,$Easing:{$Left:$Jease$.$InOutSine,$Top:$Jease$.$OutWave,$Clip:$Jease$.$InOutQuad},$Outside:true,$Round:{$Top:1.3}},
        {$Duration:1000,$Delay:30,$Cols:8,$Rows:4,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2049,$Easing:$Jease$.$OutQuad},
        {$Duration:1000,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$SlideOut:true,$Easing:$Jease$.$OutQuad},
        {$Duration:1000,y:-1,$Cols:12,$Formation:$JssorSlideshowFormations$.$FormationStraight,$ChessMode:{$Column:12}},
        {$Duration:1000,x:-0.2,$Delay:40,$Cols:12,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:260,$Easing:{$Left:$Jease$.$InOutExpo,$Opacity:$Jease$.$InOutQuad},$Opacity:2,$Outside:true,$Round:{$Top:0.5}},
        {$Duration:2000,y:-1,$Delay:60,$Cols:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Easing:$Jease$.$OutJump,$Round:{$Top:1.5}}
      ];

      var jssor_1_options = {
        $AutoPlay: true,
        $SlideshowOptions: {
          $Class: $JssorSlideshowRunner$,
          $Transitions: jssor_1_SlideshowTransitions,
          $TransitionsOrder: 1
        },
        $ArrowNavigatorOptions: {
          $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
          $Class: $JssorBulletNavigator$
        }
      };

      var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
      
      //responsive code begin
      //remove responsive code if you don't want the slider scales
      //while window resizing
      function ScaleSlider() {
        var parentWidth = $('#jssor_1').parent().width();
        if (parentWidth) {
          jssor_1_slider.$ScaleWidth(parentWidth);
        }
        else
          window.setTimeout(ScaleSlider, 30);
      }
      
      //Scale slider after document ready
      ScaleSlider();
                      
      //Scale slider while window load/resize/orientationchange.
      $(window).bind("load", ScaleSlider);
      $(window).bind("resize", ScaleSlider);
      $(window).bind("orientationchange", ScaleSlider);
      //responsive code end
    }

    // Menu sticky
    if ($('.menu-sticky').length) {
      $(window).bind('scroll', function() {
        var navHeight = 1;
        var $menu_sticky = $('.menu-sticky');
        ($(window).scrollTop() > 70) ? $menu_sticky.addClass('sticking') : $menu_sticky.removeClass('sticking');
      });
    }

    // Product gallery
    if ($('.product-photo').length) {
      
      $('.product-photo').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-thumbs',
        autoplay: true
      });

      $('.product-thumbs').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-photo',
        dots: false,
        centerMode: true,
        focusOnSelect: true
      });

    }

    jQuery("#menuzord").menuzord({
      indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
      indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
    });
  });
})(jQuery);
