import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(page, btns) {
        super(page, btns)
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        this.slides.forEach(slide => {
            slide.classList.add('animated', 'fadeOut');
            slide.classList.remove('fadeIn');
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
        this.slides[this.slideIndex - 1].classList.remove('fadeOut');
        this.slides[this.slideIndex - 1].classList.add('fadeIn');

        try {
            this.hanson.style.cssText = `
                transition: all 1s ease;
                transform: translateY(100%);
            `;
            if (n === 3) {
                setTimeout(() => {
                    this.hanson.style.cssText = `
                        transition: all 1s ease;
                        transform: translateY(0);
                    `;
                }, 3000);
            }
        } catch (e) {}
    }

    plusSlide(n) {
        this.showSlides(this.slideIndex += n);
    }

    

    render() {
        try {
            this.hanson = document.querySelector('.hanson');
        } catch (e) {}

        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlide(1);
            });

            btn.parentElement.previousElementSibling.addEventListener('click', (e) => {
                if (e.target.closest('.sidecontrol')) {
                    this.slideIndex = 1;
                    this.showSlides(this.slideIndex);
                }
            })
        })

        this.showSlides(this.slideIndex);

        
    }
}