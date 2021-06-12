const elInputYoutubeDebugCode = document.getElementById('input-youtube-debug-code');
const elAdvertisingUrl = document.getElementById('advertising-url');
const elInfo = document.getElementById('info');
const elReadButton = document.getElementById('read-button')

elReadButton.addEventListener('click', () => {
  const youtubeDebugCode = (() => {
    try {
      return JSON.parse(elInputYoutubeDebugCode.value);
    } catch {
      return {};
    }
  })();

  // 一度リセットする
  elInfo.innerText = '';
  elAdvertisingUrl.href = '';
  elAdvertisingUrl.innerText = '';

  if (youtubeDebugCode.addocid) {
    const url = `https://youtube.com/watch?v=${youtubeDebugCode.addocid}`;
    elAdvertisingUrl.href = url;
    elAdvertisingUrl.innerText = url;
    return
  }
  elInfo.innerText = 'YouTube広告IDが読み取れませんでした。';
})
