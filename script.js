const A = document.getElementById("videoA");
const B = document.getElementById("videoB");
const bgA = document.getElementById("bgA");
const bgB = document.getElementById("bgB");
const startBtn = document.getElementById("startBtn");

let running = false;

startBtn.onclick = () => {
  A.play();
  B.play();
  A.muted = false;
  B.muted = true;
  running = true;
  startBtn.style.display = "none";
};

function switchCam(cam){
  if(!running) return;

  const t = A.currentTime;
  A.currentTime = t;
  B.currentTime = t;

  if(cam === "A"){
    A.style.opacity = 1;
    B.style.opacity = 0;
    bgA.style.opacity = 1;
    bgB.style.opacity = 0;
    A.muted = false;
    B.muted = true;
  }else{
    A.style.opacity = 0;
    B.style.opacity = 1;
    bgA.style.opacity = 0;
    bgB.style.opacity = 1;
    A.muted = true;
    B.muted = false;
  }
}

document.addEventListener("keydown",(e)=>{
  if(e.key === "a") switchCam("A");
  if(e.key === "b") switchCam("B");
});

let oyuncuBtns = document.querySelectorAll("#oyuncular button");
let sahne = document.getElementById("sahne");

oyuncuBtns.forEach(function(b){
    b.onclick = function () {
        let yeniURL = b.getAttribute("data-img");

        if (yeniURL) {
            sahne.src = yeniURL;
        }
    };
});
