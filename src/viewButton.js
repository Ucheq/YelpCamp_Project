"Use Strict"
//Animated text
let textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letters',
    scale: [3, 1],
    opacity:[0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

const viewCamp = document.getElementById("gotosearch");

viewCamp.addEventListener("click",
function() {
    window.location.href = "searchpage.html"
} 
)