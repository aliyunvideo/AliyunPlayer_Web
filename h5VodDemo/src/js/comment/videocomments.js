const comment_row_template = '<div class="comment-row"><span class="comment-left"></span><span class="comment-right"></div>';
const comment_step= 25;
const container_max_rows= 20
const comment_name_colors= {
		'1': 'rgba(219,124,80,0.3)',
		'2': 'rgba(139,156,80,0.3)',
		'3': 'rgba(40,180,187,0.3)'
};
export default class VideoComments{
	constructor(wrapper) {
		this.createEl(wrapper);
		this._setupComment();
		this.maxTopRow = null;
		// let height = util.videoHeight($('.current-video')) - this.comments.height();
		// if (!util.isLargeScreen()) {
		// 	height = height - 80;
		// }
		// this.comments.css('top', height);
		this.colorIndex = 1;
	}

	createEl(wrapper) {
		this.comments = wrapper;
		this.container = this.comments.find('.comment-container');
	}

	clear()
	{
		this.comments.empty();
	}

	isFull() {
		return this.comments.find('.empty-comment-row').length == 0;
	}

	send(comment) {
		let emptyRows = this.comments.children('.comment-row'),
			firstEmptyRow;

		if (!comment) {
			return;
		}

		if (emptyRows.length > 0)
			firstEmptyRow = $(emptyRows[0]);
		else
			firstEmptyRow = this._createEmptyRow();

		this._assignValues(firstEmptyRow, comment);

		this._move(firstEmptyRow);
	}

	_move(currentRow) {
		currentRow.show();
		let that = this,
			commentsHeight = this.comments.height(),
			containerHeight = this.container.height(),
			step = currentRow.height();
		this.container.append(currentRow);
		let row = this.container.children().first();
		if (containerHeight - commentsHeight > row.height()) {
			this._removeClass(row.find('.comment-right'));
			row.hide();
			this.comments.append(row);
		}
	}

	_assignValues(row, comment) {
		var name = row.find('.comment-left');
		name.text(comment.name);
		var commentRight = row.find('.comment-right');
		commentRight.html(comment.comment);
		commentRight.addClass(this._getClass());
	}

	_createEmptyRow() {
		let row = $(comment_row_template);
		row.hide()
		this.comments.append(row);
		return row;
	}

	_setupComment() {
		for (let i = 0; i < container_max_rows; i++) {
			this._createEmptyRow();
		}
	}


	_getClass(type) {
		if(this.colorIndex >4)
		{
			this.colorIndex = 1;
		}
		let className = 'comment-color'+this.colorIndex;
		this.colorIndex ++;
		return className;
	}

	_removeClass(ele) {
		ele.removeClass('comment-color1');
		ele.removeClass('comment-color2');
		ele.removeClass('comment-color3');
		ele.removeClass('comment-color4');
	}
}
