import SeriesList from './index.html';
import './index.css';

export default class PumpkinSeriesListComponent {
    constructor(clickHandle) {
        this.clickHandle = clickHandle;
        this.$html = $(SeriesList)
    }

    createEl(el) {
        this.$html.click(this.clickHandle);
        $(el).find('.current-quality').after(this.$html);
    }
}