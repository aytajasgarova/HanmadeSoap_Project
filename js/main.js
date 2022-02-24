//header
let navBar = document.querySelector('.nav_bar');
let barIcon = document.querySelector('.menu-bar');

barIcon.onclick = ()=> {
    barIcon.classList.toggle('fa-times');
    navBar.classList.toggle('active')
}


//products
$('.slick_slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    speed: 800,
    prevArrow: '<i class="fas fa-angle-left left_arrow">',
    nextArrow: '<i class="fas fa-angle-right right_arrow">',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
       ]
  });



  $('.comment-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow:false
  })