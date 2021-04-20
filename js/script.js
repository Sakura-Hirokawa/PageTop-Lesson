$(function(){
  $('#back a').on('click',function(event){ // #back内のaタグがクリックされたときの処理
    $('body,html').animate({  // ページ全体に対して処理を実行したいので'body,html'
      scrollTop:0  // scrollTopはスクロール位置を取得できるメソッド,0は「最上部に移動する」
    },800);　// アニメーションの動作時間
    event.preventDefault();  // aタグの機能を無効にするメソッド,今回はアニメーションを追加するため無効化
  });
});