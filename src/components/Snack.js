import React from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const CustomSnack = styled(Snackbar)`
  && {
    > div {
      ${props => props.variant === 'success' && 'background-color: green;'}
      ${props => props.variant === 'fail' && 'background-color: red;'}
    }
  }
`;

const Snack = ({ onExited, ...rest }) => (
	<CustomSnack
		autoHideDuration={6000}
		anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
		onExited={onExited}
		action={[
			<IconButton
				key="close"
				color="inherit"
				onClick={onExited}
			>
				<CloseIcon />
			</IconButton>,
		]}
		{...rest}
	/>
);

Snack.propTypes = {
	onClose: func.isRequired,
};

export default Snack;
