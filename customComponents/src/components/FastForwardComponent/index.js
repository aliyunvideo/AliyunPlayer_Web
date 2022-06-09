import FastForward from './index.html';
import './index.scss';
import { parseDom } from 'utils'

export default class FastForwardComponent {
    constructor(clickHandle) {
        this.clickHandle = clickHandle;
        this.$html = $(FastForward)
    }

    createEl(el) {
        this.$html.click(this.clickHandle);
        $(el).find('.prism-time-display').after(this.$html);
    }    
}