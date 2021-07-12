
export default class LabelShow {
    constructor(parent) {
        this.parent = document.querySelector(parent);
        this.labels = document.querySelectorAll(`${parent} .hide-item`);
        try {
            this.btn = this.parent.lastElementChild;
        } catch (error) {
            
        }
        this.checkIndex = 0;
    }

    addItem() {
        this.btn.addEventListener('click', () => {
            this.labels[this.checkIndex].style.display = 'flex';
            this.labels[this.checkIndex].classList.add('fadeInDown');
            this.checkIndex++;
            if (this.checkIndex === this.labels.length) {
                this.btn.remove();
            }
        })
    }

    init() {
        try {
            this.labels.forEach(item => {
                item.style.display = 'none';
                this.labels[this.checkIndex].classList.remove('fadeInDown');
            })
    
            this.addItem();
            
        } catch (error) {
            
        }
    }
}