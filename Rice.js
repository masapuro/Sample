$(function () {
  $("#wrapper").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $("#introduce").slideDown();
    } else {
      $("#introduce").slideUp();
    }
  });
  $(".slick01").slick({
    autoplay: false, //「オプション名: 値」の形式で書く
    dots: true, //複数書く場合は「,」でつなぐ
    prevArrow: `<span><i class="fas fa-arrow-left"></i></span>`,
    nextArrow: `<span><i class="fas fa-arrow-right"></i></span>`
  });
  $(function(){
    // #で始まるリンクをクリックしたら実行されます
    $('a[href^="#"]').click(function() {
      // スクロールの速度
      var speed = 500; // ミリ秒で記述
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });
});
