import './index.css';

export default class PlayerNextComponent {
    constructor(clickHandle) {
        this.clickHandle = clickHandle;
        this._html = document.createElement('div');
        this._html.setAttribute('class', 'player-olympic-player-next');
        let innerDiv = document.createElement('div');
        innerDiv.setAttribute('class', 'player-olympic-player-next-tip');
        innerDiv.textContent = "Next";
        this._html.appendChild(innerDiv);
    }

    createEl(el) {
        this._html.addEventListener('click', this.clickHandle);
        el.querySelector('.prism-play-btn').insertAdjacentElement('afterend', this._html);
    }    
}