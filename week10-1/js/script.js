// ボタンと文字のidを取得しましょう
const btn = document.getElementById('changeButton');
const text = document.getElementById('text');
// 取得した要素に .onclick で処理を追記しましょう
btn.onclick = () => {
    text.innerHTML = 'Hello, JavaScript!';
}
