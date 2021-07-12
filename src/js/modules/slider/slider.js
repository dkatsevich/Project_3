export default class Slider {
    constructor({container = null, btns = null, prevs = null, nexts = null, activeClass, autoplay} = {}) {
        this.container = document.querySelector(container);
        this.btns = document.querySelectorAll(btns);
        try {
            this.slides = this.container.children;
        } catch (error) {
            
        }
        this.prevs = document.querySelectorAll(prevs);
        this.nexts = document.querySelectorAll(nexts);
        this.activeClass = activeClass;
        this.autoplay = autoplay;
        this.slideIndex = 1;
    }
    
}