// idを取得しましょう
const btn = document.getElementById('colorButton')
// 取得した要素に addEventListener('click', function() {}) で処理を追記しましょう
btn.addEventListener('click', function() {
  if (btn.innerHTML === '青') {
    btn.innerHTML = '赤';
    btn.classList.replace('blue','red');
  } else {
    btn.innerHTML = '青';
    btn.classList.replace('red','blue');
  }
})