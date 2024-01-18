const baniere = document.getElementById("baniere");
setTimeout(() => {
    baniere.style.setProperty("--baniere-translation", (window.innerHeight - baniere.offsetHeight) / 2 + "px")
}, 100);    /* dirty */

window.addEventListener("load", () => {
    document.body.style.animation = "noScrollOpening var(--opening-duration) linear forwards";
    document.querySelector("html").animation = "noScrollOpening var(--opening-duration) linear forwards";
    const hello = document.getElementById("hello-container");
    hello.style.animation = "helloContainerOpening var(--opening-duration) ease-in-out forwards";
    hello.children[0].style.animation = "hellobaniereOpening var(--opening-duration) ease-out forwards";
    hello.children[2].style.display = "none";
    hello.children[3].style.animation = "helloCarouselOpening var(--opening-duration) ease-in-out forwards";
    hello.children[4].style.animation = "helloCarouselOpening var(--opening-duration) ease-in-out forwards";
    document.getElementById("topbar").style.animation = "topbarOpening var(--opening-duration) linear forwards";
});