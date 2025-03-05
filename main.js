import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

// 導覽列手機版 ↓
// 點擊放大鏡圖示，顯示搜尋框
$(".search-icon").click(function (event) {
  $(".search-form").toggleClass("d-none");
});

$(document).click(function (event) {
  // 如果點擊的目標不在搜尋框或放大鏡內
  if (!$(event.target).closest(".search-form, .search-icon").length) {
    // 隱藏搜尋框
    $(".search-form").addClass("d-none");
  }
});

// 頁面連結收合
$(".modal-link-1").click(function (event) {
  $(this).next(".modal-link-1ist").toggleClass("d-none");
  $(this).find(".modal-link-arrow").toggleClass("rotate");

  if ($(".modal-link-1").not($(this)).next(".modal-link-1ist").not(".d-none")) {
    $(".modal-link-1").not($(this)).next(".modal-link-1ist").addClass("d-none");
    $(".modal-link-1")
      .not($(this))
      .find(".modal-link-arrow")
      .addClass("rotate");
  }
});
// 導覽列手機版 ↑

// 登入 登出
$(document).ready(function () {
  // 點擊登入
  $(".login-link").on("click", function (e) {
    e.preventDefault(); // 阻止預設行為

    // 隱藏「註冊」與「登入」，顯示「購物車」與「登出」
    $(".login-link, .register-link").addClass("d-none");
    $(".logout-link, .provile-link, .cart-link-circle").removeClass("d-none");
  });

  // 點擊登出
  $(".logout-link").on("click", function (e) {
    e.preventDefault(); // 阻止預設行為

    // 顯示「註冊」與「登入」，隱藏「購物車」與「登出」
    $(".login-link, .register-link").removeClass("d-none");
    $(".logout-link, .provile-link, .cart-link-circle").addClass("d-none");
  });
});
