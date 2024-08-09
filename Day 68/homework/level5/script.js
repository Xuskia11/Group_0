const imgs = document.getElementsByTagName('img');
const btn = document.getElementById("btn");


btn.addEventListener("click", () => {
    for(let i = 0;i < imgs.length; i++){
        if(imgs[i].className === "first"){
            imgs[i].style.borderRadius = "50%"
            imgs[i].style.transition = "1s"
            imgs[i].style.filter = "drop-shadow(0 0 10px black)"
        } else if(imgs[i].className === "second"){
            imgs[i].style.borderRadius = "60%"
            imgs[i].style.transition = "1s"
            imgs[i].style.filter = "drop-shadow(0 0 10px black)"
        } else {
            imgs[i].style.borderRadius = "45%"
            imgs[i].style.transition = "1s"
            imgs[i].style.filter = "drop-shadow(0 0 10px black)"
        }
    }
})