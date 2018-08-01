import playerNextHtml from './index.html';
import './index.css';

export default class playerNextComponent {
    constructor(clickHandle) {
        this.clickHandle = clickHandle;
        this.$html = $(playerNextHtml);
    }

    createEl(el) {
        this.$html.click(this.clickHandle);
        $(el).find('.prism-play-btn').after(this.$html);
    }    
}