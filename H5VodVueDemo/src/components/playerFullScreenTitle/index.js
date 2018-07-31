import playerFullScreenTitleHtml from './index.html';
import './index.css';

export default class playerFullScreenTitle {
    constructor() {
        this.$html = $(playerFullScreenTitleHtml);
    }

    createEl(el) {
        $(el).append(this.$html);
    }



    fullScreenHandle(title) {
        this.$html.text(title);
        this.$html.show();
    }

    cancelFullScreenHandle() {
        this.$html.hide();
    }
}