
$(function () {

  $.ajax({

    method: "GET",
    url: "http://127.0.0.1:5103/api/headers",
    data: {

    },
    success: function(data) {
      $('#firstHeadersId').text(data[0].name);
      $('#secondHeaderId').text(data[1].name);

    },

    error: function(err){
      console.log("Error" + err);
    }

  });


  var mixer = mixitup(".directions__list ");

  $(".directions__filter-btn").on("click", function () {
    $(".directions__filter-btn").removeClass("directions__filter-btn--active");
    $(this).addClass("directions__filter-btn--active");
  });

  $(".team__slider").slick({
    arrows: false,
    slidesToShow: 4,
    draggable: false,
    infinite: true,
    dots:true,
    waitForAnimate: false,
    appendDots: $(".team__dots"),
    responsive:
    [
      {

        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          draggable: true,
        },
      }
    ]
  });

  $(".team__slider-prev").on("click", function (e) {
    e.preventDefault();
    $(".team__slider").slick("slickPrev");
  });

  $(".team__slider-next").on("click", function (e) {
    e.preventDefault();
    $(".team__slider").slick("slickNext");
  });

  $(".testimonials__slider").slick({
    arrows: false,
    dots: true,
    waitForAnimate: false,
    appendDots: $(".testimonials__dots"),
    responsive:
    [
      // {

      //   breakpoint: 700,
      //   settings: {
          
      //   },
      // }

    ]
  });

  $(".testimonials__prev").on("click", function (e) {
    e.preventDefault();
    $(".testimonials__slider").slick("slickPrev");
  });

  $(".testimonials__next").on("click", function (e) {
    e.preventDefault();
    $(".testimonials__slider").slick("slickNext");
  });

  $(".program__acc-link").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("program__acc-link--active");
    $(this).children(".program__acc-text").slideToggle();
  });

  $(".header__nav-list a, .header__top-btn, .footer__go-top , .footer__top-list a, .header__content-buttons a").on("click", function (e) {
    //отменяем стандартную обработку нажатия по ссылке
    e.preventDefault()
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top - 200
    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate({ scrollTop: top }, 800)
  })



    setInterval(() => {
      if($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false){
        $('.burger').addClass('burger--follow')
      } else{
        $('.burger').removeClass('burger--follow')
      }
    },0);
  $('.burger, .overlay, .header__top a').on('click', function(e){
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })


  $('.footer__top-title--slide').on('click', function(e){
    $(this).next().slideToggle()


  })

});
