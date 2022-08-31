window.addEventListener('DOMContentLoaded', function () {
    const rightslider = new Swiper('.right_slider', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })
})