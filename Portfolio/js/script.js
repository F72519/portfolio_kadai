// リロード時にTOPへジャンプ  ★入れるか入れないか検討
// $(function() {
//   $('html,body').animate({ scrollTop: 0 }, '1');
// });


// カルーセル　　★サイドの矢印が表示されない
$('.carousel').slick({
  infinite: true,  //画像ループ
  slidesToShow: 3,  //同時に表示させる数
  slidesToScroll: 1,  //一度のスクロールで流れる数
  speed: 5000,  //画像切替のアニメーション速度
  swipe: true,  //スワイプ操作の切り替えONOFF
  arrows: true,  //手動で切り替えるボタンの表示ONOFF
});
