
export default class Accordion {
    constructor(triggers = null) {
        this.triggers = document.querySelectorAll(triggers);
    }

    init() {
        this.triggers.forEach(btn => {
            const hideContent = btn.nextElementSibling;

            btn.addEventListener('click', (e) => {
                if (btn.classList.contains('showing_acc_b')) {
                    btn.classList.remove('showing_acc_b');
                    hideContent.style.maxHeight = "0px";

                } else {
                    btn.classList.add('showing_acc_b');
                    hideContent.style.maxHeight = hideContent.scrollHeight + "px";
                }
            })
        })
    }
}