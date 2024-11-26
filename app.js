
gsap.timeline({
    scrollTrigger: {
        x: 300,
        trigger: ".container",
        pin: true,
        start: "top top",
        end: "bottom top",
        scrub: true
    }
})
    .to(".box", {
        x: 200,
        duration: 2,
        stagger: 0.5,
        ease: "1",
        repeat: 1,
        yoyo: true
    })

   

    gsap.to(".hello", {
        x: 200,
        duration: 2,
        stagger: 0.5,
        ease: "1",
        repeat: 1,
        yoyo: true,
        scrollTrigger:{
            trigger:".container-2"
        },
    })
