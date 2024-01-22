"use strict"

window.onload = () => {
    const parallax = document.querySelector(".container");

    if (parallax) {
        const image = document.querySelector(".image");
        const greeting = document.querySelector(".greeting");
        const fog = document.querySelector("img[alt='fog']");
        const about = document.querySelector(".about__wrapper");

        // Coefficients
        const forImage = 16;
        const forGreeting = 12;
        const forFog = 50;
        const forAbout = 34;

        // Animation speed
        const speed = .5;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            image.style.cssText = `transform: translate(${positionX / forImage}%, ${positionY / forImage}%);`;
            greeting.style.cssText = `transform: translate(${positionX / forGreeting}%, ${positionY / forGreeting}%);`;
            fog.style.cssText = `transform: translate(${positionX / forFog}%, ${positionY / forFog}%);`;
            about.style.cssText = `transform: translate(${positionX / forAbout}%, ${positionY / forAbout}%);`;

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax.addEventListener("mousemove", e => {
            // Get width and height of the screen
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            // Track mouse relative to the screen middle
            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            // Calculate % how far mouse from the middle of the screen and update the values accordinly
            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        });

        // // Parallax during scrolling
        // let thresholdSet = [];
        // for (let i = 0; i <= 1.0; i += 0.005) {
        //     thresholdSet.push(i);
        // }

        // const callback = (entries, observer) => {
        //     const scrollTopProcent = window.scrollY / parallax.offsetHeight * 100;
        //     setParallaxItemStyle(scrollTopProcent);
        // }

        // const observer = new IntersectionObserver(callback, {
        //     threshold: thresholdSet,
        // });

        // observer.observe(document.querySelector(".content"));

        // function setParallaxItemStyle(scrollTopProcent) {
        //     content.style.cssText = `transform: translate(0%, -${scrollTopProcent}%)`;
        //     mountains.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 6}%);`;
        //     person.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 3}%);`;
        // }
    }
}
