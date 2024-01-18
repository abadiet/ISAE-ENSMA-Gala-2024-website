window.addEventListener("load", function () {

    const tout = document.getElementById("menu-tout");
    const menu1 = document.getElementById("menu1");
    const menu2 = document.getElementById("menu2");

    const elem1 = document.getElementById("menu-elem1");
    const elem2 = document.getElementById("menu-elem2");
    const elem3 = document.getElementById("menu-elem3");
    const elem4 = document.getElementById("menu-elem4");
    const elem5 = document.getElementById("menu-elem5");

    tout.addEventListener("click",() => {
        tout.classList.add("active");
        menu1.classList.remove("active");
        menu2.classList.remove("active");

        elem1.classList.remove("show");
        elem1.classList.remove("hide");
        elem2.classList.remove("show");
        elem2.classList.remove("hide");
        elem3.classList.remove("show");
        elem3.classList.remove("hide");
        elem4.classList.remove("show");
        elem4.classList.remove("hide");
        elem5.classList.remove("show");
        elem5.classList.remove("hide");
    });

    menu1.addEventListener("click",() => {
        tout.classList.remove("active");
        menu1.classList.add("active");
        menu2.classList.remove("active");

        elem1.classList.add("show");
        elem2.classList.add("hide");
        elem3.classList.add("show");
        elem4.classList.add("hide");
        elem5.classList.add("show");

        elem1.classList.remove("hide");
        elem2.classList.remove("show");
        elem3.classList.remove("hide");
        elem4.classList.remove("show");
        elem5.classList.remove("hide");
    });

    menu2.addEventListener("click",() => {
        tout.classList.remove("active");
        menu1.classList.remove("active");
        menu2.classList.add("active");

        elem1.classList.add("hide");
        elem2.classList.add("show");
        elem3.classList.add("hide");
        elem4.classList.add("show");
        elem5.classList.add("show");

        elem1.classList.remove("show");
        elem2.classList.remove("hide");
        elem3.classList.remove("show");
        elem4.classList.remove("hide");
        elem5.classList.remove("hide");
    });
});
