$(function(){

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset =  $(window).scrollTop();

        // Header fixed
        checkScroll(scrollOffset);

    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset){
        if(scrollOffset >= introH ){
            header.addClass("fixed");
        }else{
            header.removeClass("fixed");
        }
    }

    // Smooth scroll

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockid = $this.data('scroll'),
            blockOffset = $(blockid).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);

    });


    // Menu nav taggle
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
    

    // Collaps
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();


        var $this = $(this),
        blockid = $this.data('collapse');


        $this.toggleClass("active");

    });

    // slider
    $("[data-slider]").slick({
        infinity: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1 
    });


});