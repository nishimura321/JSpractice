$(function() {
  // #back内のaタグがクリックされたときの処理
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});