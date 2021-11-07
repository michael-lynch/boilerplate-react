import React, { useCallback, useEffect } from 'react';

// layout
import Section from 'components/layout/Section/Section';
import Wrapper from 'components/layout/Wrapper/Wrapper';

// ui
import Button from 'components/ui/Button/Button';
import Typography from 'components/ui/Typography/Typography';

// icons
import { ReactComponent as IconClear } from 'icons/material/clear.svg';

// utils
import { cleanHtml, toKebabCase } from 'utils';

// styles
import './Dialog.css';

const Dialog = ({
	btns,
	children,
	classes,
	content,
	handleClose,
	hasCloseBtn = true,
	hasOverlayClose,
	isOpen,
	mods,
	title,
}) => {
	// vars
	const overlayProps = {};
	const slug = title ? toKebabCase(title) : '';

	let classNames = '';
	let modNames = '';

	const handleEsc = useCallback(
		(e) => {
			if (e.keyCode === 27) {
				if (handleClose) {
					handleClose();
				}
			}
		},
		[handleClose]
	);

	const renderBtns = () => {
		return btns.map((btn) => {
			const btnProps = {};

			let btnMods = ['sm'];

			if (btn.form) {
				btnProps.form = btn.form;
			}

			if (btn.href) {
				btnProps.href = btn.href;
			}

			if (btn.mods) {
				btnMods = btnMods.concat(btn.mods);
			}

			if (btn.onClick) {
				btnProps.onClick = btn.onClick;
			}

			if (btn.target) {
				btnProps.target = btn.target;
			}

			return (
				<li key={`dialog-btn-${toKebabCase(btn.text)}`}>
					<Button mods={btnMods} text={btn.text} type={btn.type || 'button'} {...btnProps} />
				</li>
			);
		});
	};

	if (classes) {
		for (let i = 0; i < classes.length; i++) {
			classNames += `${classes[i]} `;
		}
	}

	if (mods) {
		for (let i = 0; i < mods.length; i++) {
			modNames += ` dialog--${mods[i]}`;
		}
	}

	if (hasOverlayClose && handleClose) {
		overlayProps.onClick = handleClose;
	}

	if (isOpen) {
		document.body.style.overflowY = 'hidden';
		modNames += ' dialog--open';
	} else {
		document.body.style.overflowY = 'auto';
	}

	useEffect(() => {
		document.addEventListener('keydown', handleEsc);

		return () => {
			window.removeEventListener('keydown', handleEsc);
		};
	}, [handleEsc]);

	return (
		<dialog
			aria-labelledby={`dialog-title-${slug}`}
			aria-describedby={`dialog-content-${slug}`}
			className={`${classNames}dialog${modNames}`}>
			<div className="dialog__overlay" {...overlayProps}></div>
			<div className="dialog__mask">
				<div className="dialog__flex">
					<Section>
						<Wrapper>
							<div className="dialog__card">
								<header className="dialog__header">
									<Typography
										classes={['dialog__title']}
										component="h3"
										id={`dialog-title-${slug}`}>
										{title}
									</Typography>
									{hasCloseBtn && (
										<Button
											ariaLabel="Close"
											icon={<IconClear />}
											mods={['icon', 'transparent']}
											onClick={handleClose}
										/>
									)}
								</header>
								<div id={`dialog-content-${slug}`} className="dialog__content">
									{content ? cleanHtml(content) : children}
								</div>
								{btns && <ul className="dialog__actions">{renderBtns()}</ul>}
							</div>
						</Wrapper>
					</Section>
				</div>
			</div>
		</dialog>
	);
};

export default Dialog;
