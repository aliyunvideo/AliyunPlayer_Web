import Getback from './index.html';
import './index.scss';
import { parseDom } from 'utils'

export default class GetBackComponent {
    constructor(clickHandle) {
        this.clickHandle = clickHandle;
        this.$html = $(Getback)
    }

    createEl(el) {
        this.$html.click(this.clickHandle);
        $(el).find('.prism-time-display').after(this.$html);
    }    
}