import Accordion from "./modules/accordion";
import Download from "./modules/download";
import Forms from "./modules/form";
import VideoPlayer from "./modules/playVideo";
import LabelShow from "./modules/showLabels";
import MainSlider from "./modules/slider/slider_main";
import SliderMini from "./modules/slider/slider_mini";

window.addEventListener('DOMContentLoaded', () => {
    const sliderIndex = new MainSlider({container: '.page', btns: '.next'}).render();
    const sliderModules = new MainSlider({container: '.moduleapp', btns: '.sidecontrol__controls .next', prevs: '.module__info-controls .prev', nexts: '.module__info-controls .next'}).render();

    const showupSlider = new SliderMini({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        autoplay: true,
    }).init();

    const feedSlider = new SliderMini({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active',
        autoplay: false,
    }).init();
    const player = new VideoPlayer('.showup .play', '.overlay').init();

    const oldEdu = new LabelShow('.officerold').init();
    const newEdu = new LabelShow('.officernew').init();
    const forms = new Forms().init();

    const accord = new Accordion('.module__info-show').init();

    new Download('.download').init();
})