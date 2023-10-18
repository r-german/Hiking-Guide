// gsap
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.registerPlugin(ScrollSmoother);
ScrollSmoother.create({
    smooth: 3,
    effects: true,
    normalizeScroll: true,
});
