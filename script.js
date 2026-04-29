let reversed = false;

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.recent');

  button.addEventListener('click', (e) => {
    e.preventDefault();

    const container = document.body;
    const items = Array.from(container.querySelectorAll('div[id]'));

    // 순서 뒤집기 / 원래대로
    if (!reversed) {
      items.reverse();
      button.textContent = '오래된 순으로 보기'; // 👈 여기
    } else {
      items.sort((a, b) => Number(a.id) - Number(b.id));
      button.textContent = '최근 순으로 보기'; // 👈 여기
    }

    // DOM 다시 붙이기
    items.forEach(item => container.appendChild(item));
    reversed = !reversed;

    // 맨 위로 스크롤
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});