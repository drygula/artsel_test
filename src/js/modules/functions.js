export function isWebp() {
  function testWebp(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 9);
    };
    webP.src =
      "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAAAQAwCdASoMAAkAAUAmJagBTB1gP4B+ADsAP0ABSMYBpAAA/v8Sep//WKD/6c//4ADI//8iv/w9S/df/ghf8U/+HqX7r/8EL//8iv/w9S/df/ghf8U/+HqX7r/8AAAA";
  }

  testWebp(function (support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
}
