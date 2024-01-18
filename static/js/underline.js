window.addEventListener("load", function() {

    const elements = document.getElementsByClassName("underline");

    function animate () {
        for (let i = 0; i < elements.length; i++) {
            setTimeout (() => {
                elements[i].classList.add("underline-hidden")
                setTimeout (() => {elements[i].classList.remove("underline-hidden")}, 300);
            }, i * 200);
        }
        setTimeout(animate, 4000);
    }

    animate();

});