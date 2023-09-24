/**
 * ハンバーガーメニュー
 *
 * @description 
 */

// ヘッダー・ボタンの要素を取得
const header = document.getElementById("header");
const button = document.getElementById("headerButton");
const menuLinks = document.querySelectorAll('.header_menuLink');

// ボタンをクリックした時の処理
button.addEventListener("click", () => {
  header.classList.toggle("is-open");
});

// メニューの各リンクをクリックしたときの処理
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('is-open');
  });
});

/**
 * ヘッダーの透過
 *
 * @description スクロールしてメインビジュアルを過ぎる時にヘッダーにクラスを付与する
 */


// メインビジュアルの要素を取得
const mainVisual = document.getElementById("mainVisual");

// スクロールした時の処理
window.addEventListener("scroll", () => {
  // [スクロールした分の高さ] が [メインビジュアルの高さ - ヘッダーの高さ] より大きい時
  if (window.scrollY > mainVisual.clientHeight - header.clientHeight) {
    header.classList.remove("is-transparent");
  } else {
    header.classList.add("is-transparent");
  }
});

// スライダー
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

function setupModal(modalId, itemSelector, contentSelectors) {
  const modal = document.getElementById(modalId);
  const items = document.querySelectorAll(itemSelector);
  const closeModalButton = modal.querySelector('.close');

  items.forEach(function (item) {
    item.addEventListener('click', function () {
      for (let key in contentSelectors) {
        const selector = contentSelectors[key];
        const contentElement = modal.querySelector(selector);
        if (contentElement) {
          if (contentElement.tagName.toLowerCase() === 'img') {
            contentElement.src = item.querySelector(key).src;
          } else {
            contentElement.textContent = item.querySelector(key).textContent;
          }
        }
      }
      modal.style.display = "block";
      if (window.innerWidth <= 768 && modal.querySelector('h2')) {
        modal.querySelector('h2').classList.add('modal_active_text');
      }
    });
  });

  closeModalButton.addEventListener('click', function () {
    modal.style.display = "none";
    if (modal.querySelector('h2')) {
      modal.querySelector('h2').classList.remove('modal_active_text');
    }
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

// コアコンピテンスモーダル
setupModal('featureModal', '.feature_card', {
  '.feature_name': '#featureModalTitle',
  '.feature_description': '#featureModalDescription'
});

// サービス内容モーダル
setupModal('serviceModal', '.service_detail', {
  '.service_image': '.service_modal img',
  '.service_name': '#serviceModalTitle',
  '.service_description': '#serviceModalDescription'
});

// イベントモーダル
setupModal('eventModal', '.event_item', {
  '.event_image img': '.event_modal img',
  '.event_name': '#eventModalTitle',
  '.event_description': '#eventModalDescription'
});

// イベント：タブ切り替え

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


// ログインの処理

window.addEventListener('DOMContentLoaded', (event) => {
  const loginForm = document.querySelector('form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // フォームのデフォルトの送信動作を停止
    alert('正しいメールアドレスとパスワードを入力してください。'); // エラーメッセージを表示
  });
});