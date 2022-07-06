let texttop, textbottom, img, generate, meme;

function createMemes() {}

(() => {
  texttop = document.querySelector("#text-top");
  textbottom = document.querySelector("#text-bottom");
  img = document.querySelector("#img");
  create = document.querySelector("#generate");
  meme = document.querySelector("#meme");

  meme.widtch = meme.height = 0;

  create.addEventListener("click", () => {
    let file = new FileReader();

    file.readAsDataURL(img.files[0]);
  });
})();
