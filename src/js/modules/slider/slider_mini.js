import Slider from "./slider";

export default class SliderMini extends Slider {
    constructor(container, prev, next, activeClass, autoplay) {
        super(container, prev, next, activeClass, autoplay);
    }

    decorizeSlide() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
        })

        this.slides[0].classList.add(this.activeClass);
    }

    removeBtns() {
        this.slides.forEach((slide, i) => {
            if (slide.nodeName === "BUTTON") {
                this.slides.splice(i,1);
            }
        })
    }

    inTime() {
        this.container.appendChild(this.slides[0]);
        this.decorizeSlide();
    }

    bindTriggers() {
        this.next.addEventListener('click', () => {
            this.inTime();
        });


        this.prev.addEventListener('click', () => {
            this.container.insertBefore(this.slides[this.slides.length - 1], this.slides[0]);
            this.decorizeSlide();
        });


    }

    

    init() {
        try {
            this.container.style.cssText = `
                display: flex;
                flex-wrap: wrap;
                overflow: hidden;
                align-items: flex-start;
            `;

            this.bindTriggers();
            this.decorizeSlide();

            if (this.autoplay) {
                setInterval(() => {
                    this.inTime();
                }, 2000);
            }
        } catch (error) {
            
        }

    }
}