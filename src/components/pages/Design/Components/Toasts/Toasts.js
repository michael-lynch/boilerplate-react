import React, { useState } from 'react';

// pages
import Docs from 'components/pages/Design/Components/Docs/Docs';
import Subtitle from 'components/pages/Design/Subtitle/Subtitle';

// layout
import Section from 'components/layout/Section/Section';
import Wrapper from 'components/layout/Wrapper/Wrapper';

// ui
import Button from 'components/ui/Button/Button';
import Code from 'components/ui/Code/Code';
import Toast from 'components/ui/Toast/Toast';
import Typography from 'components/ui/Typography/Typography';

// docs
import dataProps from './Toasts.props.js';

// code
import code from './Toasts.code.txt';

// styles
import './Toasts.css';

const Toasts = () => {
	// state
	const [isToastErrorOpen, setIsToastErrorOpen] = useState(false);
	const [isToastInfoOpen, setIsToastInfoOpen] = useState(false);
	const [isToastSuccessOpen, setIsToastSuccessOpen] = useState(false);
	const [isToastWarningOpen, setIsToastWarningOpen] = useState(false);

	return (
		<Section classes={['toasts']} id="toast">
			<Wrapper>
				<Subtitle component="h1">Toast</Subtitle>
				<Typography>
					Toasts are used to display feedback to a user after an action has been taken.
				</Typography>

				<div className="toasts__sections">
					<div>
						<Typography classes={['h4']} component="h3">
							Examples
						</Typography>
						<ul className="toasts__list">
							<li>
								<Toast
									action={{
										text: 'Action',
										onClick: () => {
											console.log('Toast action clicked');
										},
									}}
									classes={['toasts__toast']}
									text="Success"
									type="success"
								/>
							</li>
							<li>
								<Toast classes={['toasts__toast']} text="Warning" type="warning" />
							</li>
							<li>
								<Toast classes={['toasts__toast']} text="Error" type="error" />
							</li>
							<li>
								<Toast classes={['toasts__toast']} text="Info" type="info" />
							</li>
						</ul>
					</div>

					<ul className="toasts__list toasts__list--btns">
						<li>
							<Button mods={['full']} onClick={() => setIsToastSuccessOpen(true)} text="Success" />
							<Toast
								isOpen={isToastSuccessOpen}
								onClose={() => setIsToastSuccessOpen(false)}
								position="bottomRight"
								text="Success"
								type="success"
							/>
						</li>
						<li>
							<Button mods={['full']} onClick={() => setIsToastWarningOpen(true)} text="Warning" />
							<Toast
								isOpen={isToastWarningOpen}
								onClose={() => setIsToastWarningOpen(false)}
								position="topRight"
								text="Warning"
								type="warning"
							/>
						</li>
						<li>
							<Button mods={['full']} onClick={() => setIsToastErrorOpen(true)} text="Error" />
							<Toast
								isOpen={isToastErrorOpen}
								onClose={() => setIsToastErrorOpen(false)}
								position="bottomLeft"
								text="Error"
								type="error"
							/>
						</li>
						<li>
							<Button mods={['full']} onClick={() => setIsToastInfoOpen(true)} text="Info" />
							<Toast
								isOpen={isToastInfoOpen}
								onClose={() => setIsToastInfoOpen(false)}
								position="topLeft"
								text="Info"
								type="info"
							/>
						</li>
					</ul>

					<div>
						<Typography classes={['h4']} component="h3">
							Code
						</Typography>
						<Code code={code} />
					</div>

					<div>
						<Docs dataProps={dataProps} />
					</div>
				</div>
			</Wrapper>
		</Section>
	);
};

export default Toasts;
