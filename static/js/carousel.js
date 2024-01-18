const INTERVAL_MS = 4000;

window.addEventListener("load", function() {
    
    const carousels = document.querySelectorAll(".carousel-container");
    
    carousels.forEach(carousel => {

        // hide content
        for (let i = 1; i < carousel.children.length; i++) {
            carousel.children[i].classList.add("carousel-hide");
        }

        let iCurrent = 0;
        function run() {
            carousel.children[iCurrent].classList.add("carousel-hide");
            iCurrent ++;
            if (iCurrent >= carousel.children.length) iCurrent = 0;
            carousel.children[iCurrent].classList.remove("carousel-hide");

            setTimeout(run, INTERVAL_MS);
        }
        setTimeout(run, INTERVAL_MS);

    });

});