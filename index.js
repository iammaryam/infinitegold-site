
function showcaseBClicked(whichButton) {
    const showcaseElement = document.querySelectorAll(".showcase-div");
    if(whichButton === "firstButton") {
        document.getElementById("showcase-buttons-s-one").style.display = "block";
        document.getElementById("showcase-buttons-s-two").style.display = "none";
        document.getElementById("showcase-buttons-s-three").style.display = "none";
        for (let x in showcaseElement) {
            showcaseElement[x].style = "transform: translateX(0px);";
        }
    }else if (whichButton === "secondButton") {
        document.getElementById("showcase-buttons-s-two").style.display = "block";
        document.getElementById("showcase-buttons-s-one").style.display = "none";
        document.getElementById("showcase-buttons-s-three").style.display = "none";
        for (let x in showcaseElement) {
            showcaseElement[x].style = "transform: translateX(-1700px);";
        }
    }else if(whichButton === "thirdButton") {
        document.getElementById("showcase-buttons-s-three").style.display = "block";
        document.getElementById("showcase-buttons-s-one").style.display = "none";
        document.getElementById("showcase-buttons-s-two").style.display = "none";
        for (let x in showcaseElement) {
            showcaseElement[x].style = "transform: translateX(-3400px);";
        }
    }
}
