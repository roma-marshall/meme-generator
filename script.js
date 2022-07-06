let texttop, textbottom, img, generate, meme, ctx;

function createMemes(image) {
  meme.width = image.width;
  meme.height = image.height;

  ctx.clearRect(0, 0, meme.width, meme.height);
  ctx.drawImage(image, 0, 0);
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
      createMemes(image);
    };
    file.readAsDataURL(img.files[0]);
  });
})();
