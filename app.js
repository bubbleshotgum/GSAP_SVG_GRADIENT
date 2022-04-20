import gsap from "./node_modules/gsap"
import { ScrollTrigger} from "./node_modules/gsap/all"

gsap.registerPlugin(ScrollTrigger)

window.addEventListener('load', () => {
    const stops = [...document.querySelector('#Gradient').children]
    gsap.to(stops[0], {
        stopColor: 'hsla(54, 89%, 62%, 92%)',
        scrollTrigger: {
            start: 0,
            scrub: 1,
            end: "max"
        },
    })
    gsap.to(stops[1], {
        stopColor: 'hsla(4, 100%, 50%, 100%)',
        scrollTrigger: {
            start: 0,
            scrub: 1,
            end: "max"
        },
    })
})