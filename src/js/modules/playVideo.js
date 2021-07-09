export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.btns = document.querySelectorAll(triggers);
        this.popup = document.querySelector(overlay);
        this.closeBtn = this.popup.querySelector('.close');
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (document.querySelector('iframe#frame')) {
                    this.popup.style.display = 'flex';
                } else {
                    const path = btn.getAttribute('data-url');

                    this.createPlayer(path);
                }
            });
        });
    }

    bindClose() {
        this.closeBtn.addEventListener('click', () => {
            this.popup.style.display = 'none';
            this.player.stopVideo();
        })
        this.popup.addEventListener('click', (e) => {
            if (e.target === this.popup) {
                this.popup.style.display = 'none';
                this.player.stopVideo();
            }
        })
    }


    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: url,
        });

        this.popup.style.display = 'flex';
    }

    init() {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTriggers();
        this.bindClose();
    }
}