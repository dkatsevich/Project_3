
export default class Forms {
    constructor() {
        this.forms = document.querySelectorAll('form');
        this.ruBlocks = document.querySelectorAll('[data-eng]');
        this.phoneMasks = document.querySelectorAll('[data-mask]');
    }

    blockCyr() {
        this.ruBlocks.forEach(item => {
            item.addEventListener('keydown', (e) => {
                try {
                    if (e.key.match(/^[а-яё]/)) {
                        e.preventDefault();
                    }
                } catch (e) {}
            });
        })
    }

    // maskPhone() {
    //     this.phoneMasks.forEach(item => {
    //         item.
    //     })
    // }

    async postData(url, data) {
        const res = await fetch(url, {
            body: data,
            method: "POST"
        });

        return res.text();
    }
    
    init() {
        this.blockCyr();

        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const formData = new FormData(form);
                

                this.postData('assets/question.php', formData)
                .then(res => console.log(res))
                .catch()
                .finally(() => {
                    form.reset();
                });
            });
        })
    }
}