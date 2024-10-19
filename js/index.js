
// 首頁課程照片swiper開始
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 8000,
    autoplay: {
        delay: 0, // 自動播放間隔（3秒）
        disableOnInteraction: false, // 點擊後繼續撥放
        },
    freeMode: true, // 無縫滾動模式
    // .一次可以看到三個 swiper-slide
    slidesPerView: 2.2,
    // wiper-slide 左右間距為 24px
    spaceBetween: 8,
    breakpoints: {
        // when window width is >= 992px
        768: {
            slidesPerView: 2.8,
            spaceBetween: 20,
          },
        // when window width is >= 992px
        992: {
          slidesPerView: 3.5,
          spaceBetween: 32,
        }
      }
});
    
// 首頁課程照片swiper結束