const btnMenu = document.getElementById("btnMenu");
const menuMob = document.getElementById("menuMob");
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");

btnMenu.addEventListener("click", () => {
  menuMob.classList.toggle("-translate-x-36");
  span1.classList.toggle("rotate-45");
  span1.classList.toggle("-translate-y-1");
  span2.classList.toggle("scale-0");
  span3.classList.toggle("-rotate-45");
});

const containerVideo = document.getElementById("containerVideo");

containerVideo.addEventListener('click', (e) => {
  if(e.target.classList.contains('divClick')){
    window.location.href = `https://doodstream.com/dl?token=${e.target.id}&op=view_vdo&_=0`;
  }
})