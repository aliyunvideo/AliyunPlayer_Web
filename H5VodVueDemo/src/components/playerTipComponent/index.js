import playerTipHtml from './index.html';
import './index.css';

export default class playerTipComponent {
    constructor(clickHandle) {
        this.$html = $(playerTipHtml);
    }

    createEl(el) {
        $(el).append(this.$html);
    }

    fadeOutTip() {
        this.$html.show();
        this.$html.fadeOut(1500);
    } 
}