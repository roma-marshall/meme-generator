let texttop, textbottom, img, generate, meme, ctx;

function createMemes(image) {
    meme.widtch = image.widtch;
    meme.height = image.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0);
}

(() => {
  texttop = document.querySelector("#text-top");
  textbottom = document.querySelector("#text-bottom");
  img = document.querySelector("#img");
  create = document.querySelector("#generate");
  meme = document.querySelector("#meme");

  meme.widtch = meme.height = 0;

  create.addEventListener("click", () => {
    let file = new FileReader();
    file.onload = () => {
        let image = new Image;
        image.src = file.result;
        console.log(image.src);
        createMemes(image);
    }
    file.readAsDataURL(img.files[0]);
  });
})();
