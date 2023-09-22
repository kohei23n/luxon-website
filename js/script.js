window.addEventListener('DOMContentLoaded', (event) => {
  const loginForm = document.querySelector('form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // フォームのデフォルトの送信動作を停止
    alert('正しいメールアドレスとパスワードを入力してください。'); // エラーメッセージを表示
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
    left: padding,
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

// モーダル

// モーダル要素の参照を取得
var modal = document.getElementById('eventModal');
var modalContent = document.querySelector('.modal_content');
var modalImage = modalContent.querySelector('img');
var modalTitle = document.getElementById('modalTitle');
var modalDescription = document.getElementById('modalDescription');

// クローズボタンの参照を取得
var closeModal = document.querySelector('.close');

// イベントアイテムの参照を取得
var eventItems = document.querySelectorAll('.event_item');

eventItems.forEach(function (item) {
  item.addEventListener('click', function () {
    // イベントアイテムから画像と文章を取得
    var imageSrc = item.querySelector('.event_image img').src;
    var title = item.querySelector('.event_name').textContent;
    var description = item.querySelector('.event_description').textContent;

    // モーダルウィンドウに画像と文章を設定
    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    // モーダルウィンドウを表示
    modal.style.display = "block";

    // モーダルコンテンツにmodal_activeクラスを追加
    if (window.innerWidth <= 768) {
      modalTitle.classList.add('modal_active_text');
    }
  });
});

// クローズボタンをクリックしたときの処理
closeModal.addEventListener('click', function () {
  modal.style.display = "none";
  modalTitle.classList.remove('modal_active_text');
});

// モーダルの外側をクリックしたときも閉じる
window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// タブ切り替え

function openIndustry(evt, openIndustry) {
  let i, tabcontent, tablinks;

  // tab_content クラスを持つ要素をすべて非表示にする
  tabcontent = document.getElementsByClassName("tab_content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // tab_links クラスを持つ要素の active クラスをすべて削除する
  tablinks = document.getElementsByClassName("tab_links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // クリックされたタブのみを表示する
  document.getElementById(openIndustry).style.display = "block";
  evt.currentTarget.className += " active";
}

// デフォルトで開いておくタブを指定
document.getElementById("defaultOpen").click();