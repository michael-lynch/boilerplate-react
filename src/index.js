import React from 'react';
import ReactDOM from 'react-dom';

// styles
import './index.css';

// components
import App from './App';

// vitals
import reportWebVitals from './reportWebVitals';

// Axe accessibilty testing
if (process.env.NODE_ENV !== 'production') {
	const axeConfig = {
		runOnly: {
			type: 'tag',
			values: ['wcag2a', 'wcag2aa', 'wcag21aa'],
		},
	};

	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000, axeConfig);
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
