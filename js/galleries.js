$(document).ready(function(){
    // === First Carousel ===
    var $owl1 = $(".carousel-1").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      items: 1
    });
  
    $(".prev-1").click(function() {
      $owl1.trigger('prev.owl.carousel');
    });
  
    $(".next-1").click(function() {
      $owl1.trigger('next.owl.carousel');
    });
  
    $(".carousel-1 .slide").eq(0).addClass("active-slide");
    $owl1.on("changed.owl.carousel", function(event) {
      var index = event.item.index;
      $(".carousel-1 .slide").removeClass("active-slide");
      $(".carousel-1 .slide").eq(index).addClass("active-slide");
    });
  
    // === Second Carousel ===
    var $owl2 = $(".carousel-2").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      items: 1
    });
  
    $(".prev-2").click(function() {
      $owl2.trigger('prev.owl.carousel');
    });
  
    $(".next-2").click(function() {
      $owl2.trigger('next.owl.carousel');
    });
  
    $(".carousel-2 .slide").eq(0).addClass("active-slide");
    $owl2.on("changed.owl.carousel", function(event) {
      var index = event.item.index;
      $(".carousel-2 .slide").removeClass("active-slide");
      $(".carousel-2 .slide").eq(index).addClass("active-slide");
    });
  });