let reversed = false;

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.recent');

  button.addEventListener('click', (e) => {
    e.preventDefault();

    const container = document.body;
    const items = Array.from(container.querySelectorAll('div[id]'));

    if (!reversed) {
      items.reverse();
    } else {
      items.sort((a, b) => Number(a.id) - Number(b.id));
    }

    items.forEach(item => container.appendChild(item));
    reversed = !reversed;

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  /* =========================
     🔥 여기부터 추가
  ========================= */

  const enBtn = document.getElementById('enBtn');
  const koBtn = document.getElementById('koBtn');
  const jpBtn = document.getElementById('jpBtn');

  let currentLang = localStorage.getItem('lang') || 'ko';

  function setLanguage(lang) {
    document.querySelectorAll('[data-' + lang + ']').forEach((el) => {
      el.innerHTML = el.dataset[lang];
    });

    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateButtons();
  }

  function updateButtons() {
    enBtn.style.opacity = '0.4';
    koBtn.style.opacity = '0.4';
    jpBtn.style.opacity = '0.4';

    if (currentLang === 'en') enBtn.style.opacity = '1';
    if (currentLang === 'ko') koBtn.style.opacity = '1';
    if (currentLang === 'jp') jpBtn.style.opacity = '1';
  }

  enBtn.addEventListener('click', () => setLanguage('en'));
  koBtn.addEventListener('click', () => setLanguage('ko'));
  jpBtn.addEventListener('click', () => setLanguage('jp'));

  setLanguage(currentLang);
});