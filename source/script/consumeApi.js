const search = document.getElementById("search");

search.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchVideos();
  }
});

async function fetchApi(searchInput) {
  try {
    const url = `http://192.168.192.30:5000/?search=${searchInput}`;
    const header = {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const response = await fetch(url, header);

    if (!response.ok) {
      throw new Error();
    }
    const results = await response.json();
    const data = results.videos
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function displayData(searchInput) {
  const data = await fetchApi(searchInput)
  containerVideo.innerHTML = ""
  if(data === null){
    const tidakAda = document.createElement('h1')
    tidakAda.classList.add('text-white', 'text-3xl', 'font-medium', 'font-nunito', 'my-5')
    tidakAda.innerHTML = "Tidak ada video yang ditemukan"

    containerVideo.appendChild(tidakAda)
  }

  data.forEach((item) => {
    const warp = document.createElement("div");
    warp.classList.add('divClick','flex', 'flex-col', 'items-center', 'justify-center', 'hover:cursor-pointer', 'w-full', 'h-fit')
    warp.id = item.tok

    const warpImg = document.createElement("div");
    warpImg.classList.add('divClick','w-full', 'h-[56.25%]', 'flex', 'justify-center', 'hover:scale-105', 'transition-all', 'duration-500', 'bg-black', 'rounded-lg')
    warpImg.id = item.tok

    const imgThu = document.createElement("img");
    imgThu.classList.add('divClick','h-full', 'w-full', 'rounded-lg')
    imgThu.alt = 'No Image'
    imgThu.src = `${item.thu}`
    imgThu.id = item.tok

    const judul = document.createElement("h1");
    judul.classList.add('divClick','font-nunito', 'text-white', 'font-medium', 'mt-2', 'text-left')
    const maxTitleLength = Math.floor((containerVideo.clientWidth) / 6 + 5);
    const limitJudul = item.ft.length > maxTitleLength ? item.ft.substring(0, maxTitleLength - 3) + '...' : item.ft
    judul.innerText = limitJudul
    judul.id = item.tok

    const informasi = document.createElement("p");
    informasi.classList.add('text-gray-400', 'text-sm', 'text-left', 'font-nunito')
    const newCr = item.cr == 0 ? 'today': `${item.cr} day ago`
    informasi.innerText = `${item.fs} - ${item.fd} - ${newCr}`


    warpImg.appendChild(imgThu)
    warp.appendChild(warpImg)
    warp.appendChild(judul)
    warp.appendChild(informasi)
    containerVideo.appendChild(warp)
  });
}

const searchVideos = async () => {
  if (search.value) {
    const searchInput = search.value;
    console.log(searchInput)
    await displayData(searchInput);
  }
};
