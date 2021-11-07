export const createMarkup = (content) => {
	return {
		__html: content,
	};
}

export const cleanHtml = (content, el, classes) => {
	const Tag = el ? el : 'p';
	const opts = {};

	// if classes were passed
	if (classes) {
		let classNames = '';

		// loop through classes and construct string
		for (let i = 0; i < classes.length; i++) {
			classNames += `${classes[i]} `;
		}

		// add class attribute to options object
		opts.className = classNames;
	}

	return <Tag {...opts} dangerouslySetInnerHTML={createMarkup(content)} />;
}

export const toKebabCase = (str) => {
	if (!str) {
		return false;
	}

	return str.replace(/ /g, '-').toLowerCase();
};
