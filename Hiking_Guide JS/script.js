// gsap
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    smooth: 1,
    smoothTouch: 0.1,
    effects: true,
    normalizeScroll: true,
});
