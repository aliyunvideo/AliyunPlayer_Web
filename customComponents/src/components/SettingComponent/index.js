import Setting from './index.html';
import './index.scss';

export default class SettingComponent {
    constructor(clickHandle) {
        this.clickHandle = clickHandle;
        this.$html = $(Setting)
        console.log(this.$html,'设置--')
    }

    createEl(el) {
        console.log('设置00')
        this.$html.click(this.clickHandle);
        $(el).find('.current-quality').after(this.$html);
    }
}