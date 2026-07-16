fetch("header.html")
.then(response => {
    if (!response.ok) {
        throw new Error("header.html 読み込み失敗");
    }
    return response.text();
})
.then(data => {

    const header = document.getElementById("header");

    if(header){
        header.innerHTML = data;

        const menuBtn = document.getElementById("menuBtn");
        const menu = document.getElementById("menu");

        if(menuBtn && menu){
            menuBtn.onclick = () => {
                menu.classList.toggle("open");
            };
        }
    }

});


// BGM
const bgm = document.getElementById("bgm");
const playBtn = document.getElementById("playBtn");

if(bgm && playBtn){

    playBtn.onclick = () => {
        bgm.play();
    };

}