function respondToVisibility(element, callback) {
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback();
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
    observer.observe(element);

}

window.addEventListener("load", function() {

    const slideLeft = document.getElementsByClassName("reveal-slideLeft");
    for (let i = 0; i < slideLeft.length; i++) {
        const elements = slideLeft[i].children;
        respondToVisibility (slideLeft[i], () => {
            for (let ielem = 0; ielem < elements.length; ielem++) {
                setTimeout(() => {
                    elements[ielem].style.transform = "translateX(0)";
                    elements[ielem].style.opacity = "1";
                }, ielem * 30);
            }
        });
    }

    const slideRight = document.getElementsByClassName("reveal-slideRight");
    for (let i = 0; i < slideRight.length; i++) {
        const elements = slideRight[i].children;
        respondToVisibility (slideRight[i], () => {
            for (let ielem = 0; ielem < elements.length; ielem++) {
                setTimeout(() => {
                    elements[ielem].style.transform = "translateX(0)";
                    elements[ielem].style.opacity = "1";
                }, ielem * 70 + 200);
            }
        });
    }

    const slideUp = document.getElementsByClassName("reveal-slideUp");
    for (let i = 0; i < slideUp.length; i++) {
        const elements = slideUp[i].children;
        respondToVisibility (slideUp[i], () => {
            for (let ielem = 0; ielem < elements.length; ielem++) {
                setTimeout(() => {
                    elements[ielem].style.transform = "translateY(0)";
                    elements[ielem].style.opacity = "1";
                }, ielem * 70 + 400);
            }
        });
    }

    const bkgColor = document.getElementsByClassName("reveal-bkg-color");
    for (let i = 0; i < bkgColor.length; i++) {
        respondToVisibility (bkgColor[i], () => {
            setTimeout(() => {bkgColor[i].classList.add("revealed")}, 400);
        });
    }

});

