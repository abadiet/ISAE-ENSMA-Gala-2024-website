window.addEventListener("load", function() {

    /* BLUR AROUND */

    document.querySelectorAll(".picture-container.blur-around").forEach(container => {
        const image_url = container.querySelector("img");
        if (image_url !== null) container.style.setProperty('--image-url', `url(${image_url.src})`);
    });

});