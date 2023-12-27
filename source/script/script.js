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

containerVideo.addEventListener('click', async (e) => {
  if(e.target.classList.contains('divClick')){
    const urlVideo = await findUrl(e.target.id)
    displayVideo(urlVideo)
  }
})

const findUrl = async (token) => {
  try {
    const url = `https://api-doodsearch-js.vercel.app/video/?token=${token}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error();
    }

    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.error("Error:", error);
  }
}

const displayVideo = (url) => {
  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.allow = "fullscreen";
  containerVideo.innerHTML = "";
  containerVideo.appendChild(iframe);
}