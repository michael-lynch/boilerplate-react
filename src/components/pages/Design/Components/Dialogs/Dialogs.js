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
import Dialog from 'components/ui/Dialog/Dialog';
import Typography from 'components/ui/Typography/Typography';

// forms
import FormLogin from 'components/forms/FormLogin/FormLogin';

// docs
import dataProps from './Dialogs.props.js';
import dataMods from './Dialogs.mods.js';

// code
import code from './Dialogs.code.txt';

// styles
import './Dialogs.css';

const Dialogs = () => {
	// state
	const [isDialogFormOpen, setIsDialogFormOpen] = useState(false);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isDialogLargeOpen, setIsDialogLargeOpen] = useState(false);
	const [isDialogSmallOpen, setIsDialogSmallOpen] = useState(false);

	return (
		<Section classes={['dialogs']} id="dialog">
			<Wrapper>
				<Subtitle component="h1">Dialog</Subtitle>
				<Typography>Dialogs are used to display supplementary data in an overlay box.</Typography>

				<div className="dialogs__sections">
					<div>
						<Typography classes={['h4']} component="h3">
							Examples
						</Typography>
						<ul className="dialogs__list">
							<li>
								<Button onClick={() => setIsDialogOpen(true)} text="Basic Dialog" />
								<Dialog
									btns={[
										{
											text: 'Take Action',
											href: 'https://google.com',
											target: '_blank',
										},
										{
											text: 'Close',
											mods: ['secondary'],
											onClick: () => {
												setIsDialogOpen(false);
											},
										},
									]}
									content="The dialog component allows you to define a <strong>title</strong> and some <strong>content</strong>. You can also pass in an array of <strong>btns</strong> that you'd like to display in the bottom right corner and of course, you can control what those buttons do with <string>onClick</strong> or <strong>href</strong> props. You can also pass in an <strong>hasOverlayClose</strong> boolean prop to define whether or not clicking the overlay closes the dialog. This is helpful when you want to force the user to make a decision."
									handleClose={() => setIsDialogOpen(false)}
									hasOverlayClose={true}
									isOpen={isDialogOpen}
									title="Basic Dialog"
								/>
							</li>
							<li>
								<Button onClick={() => setIsDialogSmallOpen(true)} text="Small Dialog" />
								<Dialog
									btns={[
										{
											text: 'Take Action',
											href: 'https://google.com',
											target: '_blank',
										},
										{
											text: 'Close',
											mods: ['secondary'],
											onClick: () => {
												setIsDialogSmallOpen(false);
											},
										},
									]}
									content="Mercedem aut nummos unde unde extricat, amaras. Hi omnes lingua, institutis, legibus inter se differunt."
									handleClose={() => setIsDialogSmallOpen(false)}
									hasOverlayClose={true}
									mods={['sm']}
									isOpen={isDialogSmallOpen}
									title="Small Dialog"
								/>
							</li>
							<li>
								<Button onClick={() => setIsDialogLargeOpen(true)} text="Large Dialog" />
								<Dialog
									btns={[
										{
											text: 'Take Action',
											href: 'https://google.com',
											target: '_blank',
										},
										{
											text: 'Close',
											mods: ['secondary'],
											onClick: () => {
												setIsDialogLargeOpen(false);
											},
										},
									]}
									handleClose={() => setIsDialogLargeOpen(false)}
									hasOverlayClose={true}
									mods={['lg']}
									isOpen={isDialogLargeOpen}
									title="Large Dialog">
									<div style={{ columnCount: 3 }}>
										<Typography>
											Praeterea iter est quasdam res quas ex communi. Ab illo tempore, ab est sed
											immemorabili. Me non paenitet nullum festiviorem excogitasse ad hoc. At nos
											hinc posthac, sitientis piros Afros. A communi observantia non est recedendum.
										</Typography>
										<Typography>
											Prima luce, cum quibus mons aliud consensu ab eo. Donec sed odio operae, eu
											vulputate felis rhoncus. Non equidem invideo, miror magis posuere velit
											aliquet. Quae vero auctorem tractata ab fiducia dicuntur. Etiam habebis sem
											dicantur magna mollis euismod.
										</Typography>
										<Typography>
											Unam incolunt Belgae, aliam Aquitani, tertiam. Tityre, tu patulae recubans sub
											tegmine fagi dolor. Integer legentibus erat a ante historiarum dapibus. Cum
											sociis natoque penatibus et magnis dis parturient.
										</Typography>
									</div>
								</Dialog>
							</li>
							<li>
								<Button onClick={() => setIsDialogFormOpen(true)} text="Form Dialog" />
								<Dialog
									btns={[
										{
											text: 'Submit',
											type: 'submit',
											form: 'form-login',
										},
										{
											text: 'Close',
											mods: ['secondary'],
											onClick: () => {
												setIsDialogFormOpen(false);
											},
										},
									]}
									handleClose={() => setIsDialogFormOpen(false)}
									hasOverlayClose={true}
									isOpen={isDialogFormOpen}
									mods={['sm']}
									title="Form Dialog">
									<FormLogin hasSubmit={false} />
								</Dialog>
							</li>
						</ul>
					</div>

					<div>
						<Typography classes={['h4']} component="h3">
							Code
						</Typography>
						<Code code={code} />
					</div>

					<div>
						<Docs dataMods={dataMods} dataProps={dataProps} />
					</div>
				</div>
			</Wrapper>
		</Section>
	);
};

export default Dialogs;
