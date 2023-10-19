// gsap
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    smooth: 3,
    smoothTouch: 0.1,
    effects: true,
    // ignoreMobileResize: true,
});

ScrollTrigger.normalizeScroll(true);
ScrollTrigger.config({
  limitCallbacks: true,
  ignoreMobileResize: true,
});

let leftTextElems = gsap.utils.toArray('.left-text');
leftTextElems.forEach(leftTextElem => {
    gsap.fromTo(leftTextElem, {opacity: 0}, {
        opacity: 1,
        scrollTrigger: {
            trigger: leftTextElem,
            start: 'bottom bottom',
            end: 'bottom top',
            scrub: true
        }
    });
});

let rightTextElems = gsap.utils.toArray('.right-text');
rightTextElems.forEach(rightTextElem => {
    gsap.fromTo(rightTextElem, {opacity: 0}, {
        opacity: 1,
        scrollTrigger: {
            trigger: rightTextElem,
            start: 'bottom bottom',
            end: 'bottom top',
            scrub: true
        }
    });
});

let rightImgElems = gsap.utils.toArray('.right-img');
rightImgElems.forEach(rightImgElem=> {
    gsap.fromTo(rightImgElem, {opacity: 0}, {
        opacity: 1,
        scrollTrigger: {
            trigger: rightImgElem,
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    });
});

gsap.fromTo('.left-img', {opacity: 0}, {
    opacity: 1,
    scrollTrigger: {
        trigger: '.left-img',
        start: 'top bottom',
        end: 'center center',
        scrub: true
    }
});

gsap.matchMedia().add('(min-width: 992px)', () => {
    let textBlocks = gsap.utils.toArray('.block__block-text');
    textBlocks.forEach(textBlock => {
        gsap.fromTo(textBlock, {y: -150}, {
            y: 0,
            scrollTrigger: {
                trigger: textBlock,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    leftTextElems.forEach(leftTextElem => {
        gsap.fromTo(leftTextElem, {x: -50}, {
            x: 0,
            scrollTrigger: {
                trigger: leftTextElem,
                start: 'bottom bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    rightTextElems.forEach(rightTextElem => {
        gsap.fromTo(rightTextElem, {x: 50}, {
            x: 0,
            scrollTrigger: {
                trigger: rightTextElem,
                start: 'bottom bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    rightImgElems.forEach(rightImgElem=> {
        gsap.fromTo(rightImgElem, {x: 50}, {
            x: 0,
            scrollTrigger: {
                trigger: rightImgElem,
                start: 'top bottom',
                end: 'center center',
                scrub: true
            }
        });
    });

    gsap.fromTo('.left-img', {x: -50}, {
        x: 0,
        scrollTrigger: {
            trigger: '.left-img',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    });
});
