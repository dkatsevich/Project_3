import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(container, btns, prevs, nexts) {
        super(container, btns, prevs, nexts)
    }

    showSlides(n) {
        try {
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
        } catch (error) {
            
        }
    }

    plusSlide(n) {
        this.showSlides(this.slideIndex += n);
    }

    clickingOn(trigger, value) {
        trigger.addEventListener('click', (e) => {
            console.log(e.target);
            this.plusSlide(value);
        });

        trigger.parentElement.previousElementSibling.addEventListener('click', (e) => {
            if (e.target.closest('.sidecontrol')) {
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            }
        })
    }

    render() {
        try {
            try {
                this.hanson = document.querySelector('.hanson');
            } catch (e) {}
    
            this.btns.forEach(btn => {
                this.clickingOn(btn, 1)
            })
            this.prevs.forEach(prev => {
                this.clickingOn(prev, -1)
            })
            this.nexts.forEach(next => {
                this.clickingOn(next, 1)
            })

    
            this.showSlides(this.slideIndex);
        } catch (error) {
            
        }

        
    }
}