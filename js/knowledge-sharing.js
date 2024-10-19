// 手機版 Swiper
const swiperGoodBooks = new Swiper(".swiper-good-books", {
  slidesPerView: 2.25165,
  spaceBetween: 8,

  breakpoints: {
    375: {
      slidesPerView: 2.45695,
    },

    412: {
      slidesPerView: 2.70198,
    },

    456: {
      slidesPerView: 2.99337,
    },

    500: {
      slidesPerView: 3.28477,
    },

    540: {
      slidesPerView: 3.54968,
    },

    576: {
      slidesPerView: 3.7086,
    },

    610: {
      slidesPerView: 3.93377,
    },

    768: {
      slidesPerView: 4.98014,
    },

    860: {
      slidesPerView: 5.5894,
    },
  },
});

// 電腦版 Swiper
const swiperGoodBooksLg = new Swiper(".swiper-good-books-lg", {
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    nextEl: ".swiper-book-next",
    prevEl: ".swiper-book-prev",
  },
});

/*
  // 選取所有含有 .book-intro-text 類的元素
  const bookIntros = document.querySelectorAll(".book-intro-text");

  // 遍歷每個元素，對它們進行操作
  bookIntros.forEach(function (bookIntro) {
    // 取得每個元素的文字內容，並去除多餘空白
    let text = bookIntro.textContent.trim().replace(/\s+/g, "");

    // 將每16字元加上 <br>
    let formattedText = text.replace(/(.{16})/g, "$1<br>");

    // 更新 HTML 內容，插入 <br>
    bookIntro.innerHTML = formattedText;
  });
*/
