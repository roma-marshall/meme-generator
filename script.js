let texttop, textbottom, img, generate, meme, ctx, topSize, bottomSize;

function createMemes(image, texttop, textbottom, topSize, bottomSize) {
  let fontSize;

  // set default width & height
  meme.width = image.width;
  meme.height = image.height;

  // meme output
  ctx.clearRect(0, 0, meme.width, meme.height);
  ctx.drawImage(image, 0, 0);

  // set default text styling
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.textAlign = "center";

  // topSize
  fontSize = meme.width * topSize;
  ctx.font = fontSize + "px Impact";
  ctx.lineWidth = fontSize / 12;

  // toptext
  ctx.textBaseline = "top";
  ctx.fillText(texttop, meme.width / 2, fontSize, meme.width);
  ctx.strokeText(texttop, meme.width / 2, fontSize, meme.width);

  // bottomSize
  fontSize = meme.width * bottomSize;
  ctx.font = fontSize + "px Impact";
  ctx.lineWidth = fontSize / 12;

  // bottomtext
  ctx.textBaseline = "bottom";
  ctx.fillText(textbottom, meme.width / 2, meme.height, meme.width);
  ctx.strokeText(textbottom, meme.width / 2, meme.height, meme.width);
}

(() => {
  texttop = document.querySelector("#text-top");
  textbottom = document.querySelector("#text-bottom");
  topSize = document.querySelector("#top-size");
  bottomSize = document.querySelector("#bottom-size");
  img = document.querySelector("#img");
  create = document.querySelector("#generate");
  meme = document.querySelector("#meme");

  ctx = meme.getContext("2d");

  meme.width = meme.height = 0;

  create.addEventListener("click", () => {
    let file = new FileReader();
    file.onload = () => {
      let image = new Image();
      image.src = file.result;
      // console.log(image.src);
      createMemes(
        image,
        texttop.value,
        textbottom.value,
        topSize.value,
        bottomSize.value
      );
    };
    file.readAsDataURL(img.files[0]);
  });
})();

// download canvas
// click event
let convertBtn = document.querySelector("#convert");
convertBtn.addEventListener("click", () => {
  // convert table to image
  let resultDiv = document.querySelector("#result");
  html2canvas(document.querySelector("#meme"), {
    onrendered: function (canvas) {
      let img = canvas.toDataURL("image/png");
      result.innerHTML += result.innerHTML =
        '<a download="result.png" href="' + img + '">PNG</a>&nbsp;';
      result.innerHTML += result.innerHTML =
        '<a download="result.jpg" href="' + img + '">JPG</a>&nbsp;';
      result.innerHTML += result.innerHTML =
        '<a download="result.gif" href="' + img + '">GIF</a>';
    },
  });
});
