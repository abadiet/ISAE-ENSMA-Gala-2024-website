const show_time = 3000;
const zIndex_offset = 90;
const scale_adjust = 3;

window.addEventListener("load", function() {

    document.querySelectorAll('.row-slidewshow-container').forEach(slideshow => {

        let cards_order;
    
        let cur_timeout;
        let cardWidth;
        let offsetOrder;
    
        function init() {
            cardWidth = slideshow.children[0].offsetWidth;
    
            // add some cards if needed
            let min_cards = 3;
            let right_border_first_card = cardWidth * (1 +  1 / 2) - cardWidth * scale_adjust / (1 + scale_adjust);
            while (right_border_first_card < window.innerWidth / 2) {
                min_cards += 2;
    
                const order = Math.ceil((Math.abs(min_cards) - 1) / 2);
                let translateX = 0;
                for (let j = 1; j <= order; j++) {
                    translateX += 1 / j;
                }
                translateX *= cardWidth;
    
                const cur_card_width = cardWidth * scale_adjust / (order + scale_adjust);
                right_border_first_card = translateX - cur_card_width;
            }

            const prev_len = slideshow.children.length;
            for (let i = 0; i < min_cards - prev_len; i++) {
                let ichild = i;
                while (ichild >= prev_len) ichild -= prev_len;
                slideshow.appendChild(slideshow.children[ichild].cloneNode(true));
            }
    
            // init the cards order
            cards_order = [];
            offsetOrder = Math.ceil((slideshow.children.length - 1) / 2);
            for (let i = 0; i < slideshow.children.length; i++) {
                cards_order.push(i - offsetOrder);
            }
        }
    
        function scroll(left) {
    
            for (let i = 0; i < slideshow.children.length; i++) {
                let direction = 1;
                if (left) direction = -1;
    
                cards_order[i] += direction;
                if (cards_order[i] < - offsetOrder) {
                    slideshow.children[i].classList.add('teleport');
                    setTimeout(() => {
                        slideshow.children[i].classList.remove('teleport');
                    }, 300);
                    cards_order[i] = slideshow.children.length - 1 - offsetOrder;
                } else {
                    if (cards_order[i] > slideshow.children.length - 1 - offsetOrder) {
                        slideshow.children[i].classList.add('teleport');
                        setTimeout(() => {
                            slideshow.children[i].classList.remove('teleport');
                        }, 300);
                        cards_order[i] = - offsetOrder;
                    }
                }
    
                let translateX;
                if (Math.abs(cards_order[i]) <= 1) {
                    translateX = cards_order[i] * cardWidth;
                } else {
                    translateX = 0;
                    for (let j = 1; j <= Math.abs(cards_order[i]); j++) {
                        translateX += 1 / j;
                    }
                    translateX *= cardWidth * cards_order[i] / Math.abs(cards_order[i]);
                }
    
                slideshow.children[i].style.transform = "translateX(" + translateX + "px) scale(" + scale_adjust / (Math.abs(cards_order[i]) + scale_adjust) + ")";
                slideshow.children[i].style.zIndex = -1 * Math.abs(cards_order[i]) + zIndex_offset;
                slideshow.children[i].style.filter = "blur(" + Math.abs(cards_order[i]) * 4 + "px)";
            }
        
            cur_timeout = setTimeout(() => {
                scroll(left);
            }, show_time);
        }
    
        let touchMoveStartX = 0;
        let touchMoveStartY = 0;
        function onScroll(event) {
            slideshow.removeEventListener("wheel", onScroll, options);
            slideshow.removeEventListener("touchmove", onScroll, options);
    
            let deltaX = 0;
            let deltaY = 0;
            try {
                deltaX = event.deltaX || (touchMoveStartX - event.touches[0].pageX);
                deltaY = event.deltaY || (touchMoveStartY - event.touches[0].pageY);
            } catch(err) {
    
            }
    
            if (deltaX !== 0 && 5 * Math.abs(deltaY) < Math.abs(deltaX)) {
    
                event.preventDefault();
    
                clearTimeout(cur_timeout);
                scroll((deltaX > 0));
    
                setTimeout(() => {
                    slideshow.addEventListener("wheel", onScroll, options);
                    slideshow.addEventListener("touchmove", onScroll, options);
                }, 200);
    
            } else {
                slideshow.addEventListener("wheel", onScroll, options);
                slideshow.addEventListener("touchmove", onScroll, options);
            }
        }
    
        init();
        scroll(true);
    
        let passiveSupported = false;
        try {
            const options = {
                get passive() {
                passiveSupported = true;
                return false;
                },
            };
            window.addEventListener("test", null, options);
            window.removeEventListener("test", null, options);
        } catch (err) {
            passiveSupported = false;
        }
        const options = passiveSupported ? { passive: false } : true;
    
        slideshow.addEventListener("wheel", onScroll, options);
        slideshow.addEventListener("touchstart", (event) => {
            touchMoveStartX = event.touches[0].pageX;
            touchMoveStartY = event.touches[0].pageY;
        }, options);
        slideshow.addEventListener("touchmove", onScroll, options);
    
        window.addEventListener('resize', init);
    
    });    

});
