$(function () {
    for (let index = 1; index < 8; index++) {
        $("body").append('<span class="emoji"><img src="./images/icon/img0' + index + '.png"></span>');
    }
    $('body').click(function (e) {
        gsap.set('.emoji', {
            x: e.clientX,
            y: e.clientY,
        });

        let motion = gsap.timeline({});
        motion.addLabel("a1")
            .to(".emoji", { opacity: 1 }, "a1")
            .to('.emoji', 0.5, {
                x: "random(" + (e.clientX - 100) + "," + (e.clientX + 100) + ")",
                y: "random(" + (e.clientY - 100) + "," + (e.clientY + 100) + ")",
            }, "a1")
            .to(".emoji", { opacity: 0 });
        // motion.kill();
        motion.restart();
    });

    // sc_intro 
    let motion01 = gsap.timeline({});

    motion01.fromTo(".sc_intro h2", 0.3, {
        opacity: 1
    }, {
        opacity: 0,
        "filter": "blur(16px)"
    });
    ScrollTrigger.create({
        animation: motion01,
        trigger: ".sc_intro",
        start: "20% top",
        end: "+=100%",
        // markers: true,
        scrub: 0,
    });

    // sc_introduce
    let motion2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".chat_wrap",
            start: "top 70%",
            end: "bottom top",
            // markers: true,
            scrub: 0.1,
        }
    });
    motion2
        .addLabel("m1")
        .to(".chat1", { x: -30, y: -100, rotate: 10 }, "m1")
        .to(".chat2", { x: 30, y: -100, rotate: 10 }, "m1")
        .to(".chat3", { x: -150, rotate: 20 }, "m1")
        .to(".chat4", { x: 130, rotate: 20 }, "m1")
        .to(".chat5", { x: -200, rotate: -50 }, "m1")
        .to(".chat6", { x: 100, rotate: -50 }, "m1");

    // sc_works
    let gauge = gsap.to(".gauge, .curr", { width: 100 + '%' });
    ScrollTrigger.create({
        trigger: "body",
        animation: gauge,
        start: "top top",
        end: "bottom bottom",
        // markers: true,
        scrub: 1,
    });

    // back_top 버튼
    $('.back_top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });
});
