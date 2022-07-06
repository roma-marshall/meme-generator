let texttop, textbottom, img, generate, meme, ctx;

function createMemes(image, texttop, textbottom) {
  meme.width = image.width;
  meme.height = image.height;

  ctx.clearRect(0, 0, meme.width, meme.height);
  ctx.drawImage(image, 0, 0);

  let fontSize = meme.width / 12;
  ctx.font = fontSize + "px Impact";
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.lineWidth = fontSize / 12;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText(texttop, meme.width / 2, fontSize, meme.width);
}

(() => {
  texttop = document.querySelector("#text-top");
  textbottom = document.querySelector("#text-bottom");
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
      createMemes(image, texttop.value, textbottom.value);
    };
    file.readAsDataURL(img.files[0]);
  });
})();
