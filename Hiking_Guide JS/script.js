// gsap
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    smoothTouch: 0.1,
    effects: true,
    normalizeScroll: true,
});
