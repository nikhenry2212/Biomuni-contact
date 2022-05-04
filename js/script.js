document.querySelector(".hamburguer").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("show-menu");

});
 
const button = document.querySelector("button");
button.addEventListener("click", () => {
  const audio = document.querySelector("audio");
  audio.play();

})
