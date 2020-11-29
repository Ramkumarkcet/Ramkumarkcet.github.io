$(document).ready(function () {
    // document.addEventListener("touchstart", handler, {passive:true})
    const mynav = document.querySelector("nav");
    console.log(mynav)
    window.addEventListener("scroll", function () {
        mynav.classList.toggle("after-scroll", scrollY > 10)
    }, {passive: true})

    $(".owl-carousel").owlCarousel({

        // autoplay: true,
        // autoplayTimeout: 1000,
        // autoplayHoverPause: true,
        loop: true,
        margin: 10,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });

})