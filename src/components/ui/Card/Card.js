// ui
import Button from 'components/ui/Button/Button';
import Typography from 'components/ui/Typography/Typography';

// styles
import './Card.css';

const Card = ({ action, classes, content, img, mods, title }) => {
	// vars
	let classNames = '';
	let modNames = '';

	if (classes) {
		for (let i = 0; i < classes.length; i++) {
			classNames += `${classes[i]} `;
		}
	}

	if (mods) {
		for (let i = 0; i < mods.length; i++) {
			modNames += ` typography--${mods[i]}`;
		}
	}

	return (
		<div className={`${classNames}card${modNames}`}>
			<div>
				{img && <img alt={img.alt} className="card__img" src={img.src} />}
				<header className="card__header">
					<Typography classes={['card__title', 'h4']} component="h3">
						{title}
					</Typography>
				</header>
				<div className="card__content">
					<Typography>{content}</Typography>
				</div>
			</div>
			{action && (
				<div className="card__action">
					<Button mods={['full']} {...action} />
				</div>
			)}
		</div>
	);
};

export default Card;
