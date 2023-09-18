window.addEventListener('DOMContentLoaded', (event) => {
  const loginForm = document.querySelector('form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();  // フォームのデフォルトの送信動作を停止
    alert('正しいメールアドレスとパスワードを入力してください。');  // エラーメッセージを表示
  });
});

// スライダー
/* スライダー */
// オプションで利用する固定値の設定
const cardWidth = 320;
const padding = 32;
const gap = 40;

// オプションの設定
const eventSlideOptions = {
  type: 'loop',
  gap: gap,
  width: cardWidth * 3 + padding * 2 + gap * 2,
  height: 275,
  perPage: 3,
  padding: {
    right: padding,
    left : padding,
  },
  pagination: false,
  breakpoints: {
    768: {
      height: 200,
      gap: 20,
      pagination: true,
      perPage: 2,
    }
  }
}

new Splide('#event_slide', eventSlideOptions).mount();