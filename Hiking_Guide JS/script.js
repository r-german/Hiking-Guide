// gsap
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.registerPlugin(ScrollSmoother);
ScrollSmoother.create({
    smooth: 3,
    effects: true,
    smoothTouch: 0.1,
    ignoreMobileResize: true,
});
