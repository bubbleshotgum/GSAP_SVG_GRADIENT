import gsap from "./node_modules/gsap"
import { ScrollTrigger} from "./node_modules/gsap/all"

gsap.registerPlugin(ScrollTrigger)

window.addEventListener('load', () => {
    [...document.querySelector('#Gradient').children].forEach(stop => {
        gsap.to(stop, {
            stopColor: 'hsla(359, 50%, 60%, 100%)',
            scrollTrigger: {
                start: 0,
                scrub: 1,
                end: "max"
            },
        })
    });
})