/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
//nav
function myFunction(x) {
    x.classList.toggle("change");
}

function mobilemenu() {
    var x = document.getElementById("topnav");
    // === must comfirm is topnav 
    if (x.className === "topnav") {
        x.className = x.className + " responsive";
    } else {
        x.className = "topnav"
    }
}

//alert box
document.getElementById("subscribe-button").addEventListener("click", subscribe);

function subscribe() {
    alert("You have subscribed.");

}



//accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


//animation text
var textWrapper = document.querySelector('.animationtext');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


anime.timeline()
    .add({
        targets: '.animationtext .letter',
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 30 * i
    })
