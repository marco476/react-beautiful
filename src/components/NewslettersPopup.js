import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { isEmail } from 'validator';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';

import Dialog from './Dialog';
import Snack from './Snack';

class NewslettersPopup extends PureComponent {
	state = {
		email: '',
		isSuccess: false,
		isFailed: false,
	};

	handleChangeEmail = e => this.setState({ email: e.target.value });

	resetResultState = () => this.setState({ isSuccess: false, isFailed: false });

	handleSubmit = () => {
		const { onClose, onFinish, onSubmit } = this.props;
		const { email } = this.state;

		this.setState({ isProcessing: true });

		onSubmit(email)
			.then(() => {
				onFinish(email);
				this.setState({ isSuccess: true, isFailed: false });
			})
			.catch(() => this.setState({ isSuccess: false, isFailed: true }))
			.finally(() => {
				this.setState({ isProcessing: false });
				onClose();
			});
	};

	render() {
		const { onClose, ...rest } = this.props;
		const { email, isSuccess, isFailed, isProcessing } = this.state;

		const canSubmit = email && isEmail(email) && !isProcessing;
		const fieldError = email && !isEmail(email);
		let snackVariant;

		if (isSuccess) {
			snackVariant = 'success';
		} else if (isFailed) {
			snackVariant = 'fail';
		}

		return (
			<React.Fragment>
				<Snack
					variant={snackVariant}
					open={isSuccess || isFailed}
					onExited={this.resetResultState}
					message={(
						<div className="flex middle-xs">
							{isSuccess
							&& (
								<React.Fragment>
									<CheckCircleIcon className="m-r-8" />
									<span>Iscrizione effettuata con successo!</span>
								</React.Fragment>
							)
							}
							{isFailed
							&& (
								<React.Fragment>
									<ErrorIcon className="m-r-8" />
									<span>Errore imprevisto, si prega di riprovare più tardi</span>
								</React.Fragment>
							)}
						</div>
					)}
				/>
				<Dialog
					title="Iscriviti alla newsletter"
					description={<span>Rimani aggiornato sugli <strong>sviluppi</strong> del portale e sulle <strong>novità</strong> in arrivo. Avrai modo di <strong>disdire quando desideri</strong> con il link presente in ogni email che riceverai.</span>}
					onClose={onClose}
					footer={(
						<React.Fragment>
							<Button className="m-r-8" onClick={onClose} color="default">
								Cancella
							</Button>
							<Button onClick={this.handleSubmit} color="primary" disabled={!canSubmit}>
								Iscriviti
							</Button>
						</React.Fragment>
					)}
					{...rest}
				>
					<TextField
						className="m-t-8 full-width"
						label="Inserisci email"
						placeholder="example@provider.it"
						error={fieldError}
						helperText={fieldError && "L'email inserita non è valida"}
						onChange={this.handleChangeEmail}
					/>
				</Dialog>
			</React.Fragment>
		);
	}
}

NewslettersPopup.propTypes = {
	onClose: func.isRequired,
	onSubmit: func.isRequired,
	onFinish: func,
};

NewslettersPopup.defaultProps = {
	onFinish: () => {},
};

export default NewslettersPopup;
