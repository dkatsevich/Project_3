import VideoPlayer from "./modules/playVideo";
import MainSlider from "./modules/slider/slider_main";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({page: '.page', btns: '.next'}).render();
    const player = new VideoPlayer('.showup .play', '.overlay').init();
})