window.addEventListener("load", function () {

function getPropertyValue (property, topbar) {
    if (topbar === null) topbar = document.body;
    return parseFloat(getComputedStyle(topbar).getPropertyValue(property));
}

const topbar = document.getElementById("topbar");
const topbarButton = document.getElementById('topbar-button');
const topbarContent = document.getElementById("topbar-content").children[0];

const elementsShowInterval = 12;
const barHeight = getPropertyValue('--topbar-bar-height', topbar)
const openDuration = getPropertyValue('--topbar-open-duration', topbar)


/* Animation Setup */

for (let i = 0; i < topbarContent.children.length; i++) {
    topbarContent.children[i].style.setProperty("--topbar-elem-delay", `${i * elementsShowInterval}ms`);
}


/* MAIN */

const html = document.querySelector("html");

function topbarButton_click() {
    if (topbarButton.classList.contains('open')) {
        topbarButton.classList.remove('open');
        topbarButton.classList.add('close');
    } else {
        if (topbarButton.classList.contains('close')) {
            topbarButton.classList.add('open');
            topbarButton.classList.remove('close');
        } else {
            topbarButton.classList.add('close');
        }
    }

    if (topbar.classList.contains('show')) {
        topbar.classList.remove('show');
        html.style.overflowY = 'unset';
        document.body.style.overflowY = 'unset';
    } else {
        topbar.classList.add('show');
        setTimeout(() => {
            html.style.overflowY = 'hidden'
            document.body.style.overflowY = 'hidden'
        }, openDuration);   
    }
}

topbarButton.addEventListener('click', topbarButton_click);


/* ON RESIZE */

function setBkgScale() {
    topbar.style.setProperty("--background-scale", window.innerHeight / barHeight);
}
setBkgScale();
window.addEventListener('resize', setBkgScale);

/* AFFICHE */

const affiche = document.getElementById("topbar-content").children[1];
//const gap = getPropertyValue("--gap", topbarContent);
function checkEnoughWidth() {
    /*window.removeEventListener("resize", checkEnoughWidth);
    const css = topbar.style.cssText;
    topbar.style.cssText = 'opacity: 0 !important';
    topbar.classList.add("show");

    setTimeout(() => {
        if (affiche.offsetLeft + affiche.offsetWidth > window.innerWidth - 3 * gap) {
            affiche.style.display = "none";
        } else {
            affiche.style.display = "block";
        }

        topbar.classList.remove("show");
        setTimeout(() => {
            topbar.style.cssText = css;
            window.addEventListener("resize", checkEnoughWidth);
        }, openDuration);
    }, openDuration);*/

    if (window.innerWidth < 800) {
        affiche.style.display = "none";
    }

}
checkEnoughWidth();
window.addEventListener("resize", checkEnoughWidth);

});
