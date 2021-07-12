export default class Download {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
    }

    downloadItem(path) {
        const link = document.createElement('a');
        link.setAttribute('href', path);
        link.setAttribute('download', '');
        link.style.display = 'none';

        document.body.append(link);
        link.click();
        link.remove();
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.downloadItem(btn.getAttribute('data-download'));
            });
        })
    }
}