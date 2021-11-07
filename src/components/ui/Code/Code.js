import React, { useState } from 'react';

// ui
import Box from 'components/ui/Box/Box';

// highlighter
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// styles
import './Code.css';

const Code = ({ code }) => {
	// state
	const [codeString, setCodeString] = useState('');

	// vars
	SyntaxHighlighter.registerLanguage('jsx', jsx);

	if (code) {
		fetch(code)
			.then((res) => {
				return res.text();
			})
			.then((text) => {
				setCodeString(text);
			});
	}

	if (!code) {
		return false;
	}

	return (
		<Box classes={['code']} mods={['dark', 'padding']}>
			<div>
				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{codeString}
				</SyntaxHighlighter>
			</div>
		</Box>
	);
};

export default Code;
