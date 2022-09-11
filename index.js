const swiper = new Swiper('.swiper1', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    effect: "fade",
    speed: 1000,
    
    autoplay: {
      delay: 4000,
      disableOnInteraction: true
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  
const swiper2 = new Swiper('.swiper2', {

  loop: true,  //ループ可能（ループモードを有効に）
  slidesPerView:2,  //スライドを2つ（分）表示
  centeredSlides : true,  //アクティブなスライドを中央に表示
  effect: 'coverflow',  //スライドのエフェクトを coverflow に
  
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  });