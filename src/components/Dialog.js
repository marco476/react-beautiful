import React, { PureComponent } from 'react';
import {
	bool,
	func,
	string,
	node,
	oneOfType,
} from 'prop-types';
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import withMobileDialog from '@material-ui/core/withMobileDialog';

const CustomDialog = styled(Dialog)`
  && {
    &::-webkit-scrollbar {
      width: 6px;
    }
  
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: #F5F5F5;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: #3f51b5;
    }
  }
`;

const FabClose = styled(Fab)`
  && {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 999;
  }
`;

const Close = styled(CloseIcon)`&& { fill: white; }`;

class DialogModal extends PureComponent {
	render() {
		const {
			className,
			contentClassName,
			titleClassName,
			footerClassName,
			isOpen,
			onClose,
			title,
			description,
			footer,
			children,
			fullScreen,
			...rest
		} = this.props;

		return (
			<CustomDialog
		className={className}
		open={isOpen}
		onClose={onClose}
		fullScreen={fullScreen}
		{...rest}
	>
		{title
		&& (
		<DialogTitle className={titleClassName}>
			{title}
			</DialogTitle>
		)
		}
	<DialogContent className={contentClassName}>
			<FabClose onClick={onClose} color="primary" size="small">
			<Close />
			</FabClose>
		{description
		&& (
		<DialogContentText>
		{description}
		</DialogContentText>
		)
		}
		{children}
	</DialogContent>
		{footer && <DialogActions className={footerClassName}>{footer}</DialogActions>}
			</CustomDialog>
		);
	}
}

DialogModal.propTypes = {
	className: string,
	contentClassName: string,
	titleClassName: string,
	footerClassName: string,
	isOpen: bool,
	onClose: func.isRequired,
	title: oneOfType([string, node]),
	description: oneOfType([string, node]),
	footer: oneOfType([string, node]),
	children: node,
	fullScreen: bool.isRequired,
};

DialogModal.defaultProps = {
	className: '',
	titleClassName: '',
	footerClassName: '',
	contentClassName: '',
	title: '',
	description: '',
	isOpen: false,
	footer: null,
	children: null,
};

export default withMobileDialog()(DialogModal);
