import React from 'react';
import { func, array, bool } from 'prop-types';
import styled from 'styled-components';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

const CustomSnack = styled(Snackbar)`
  && {
    > div {
      ${props => props.variant === 'success' && `background-color: ${green[400]};`}
      ${props => props.variant === 'fail' && `background-color: ${red[400]};`}
    }
  }
`;

const Snack = ({ onExited, action = [], showClose, ...rest }) => (
	<CustomSnack
		onExited={onExited}
		action={[
      ...action,
      showClose &&
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
  onExited: func.isRequired,
  showClose: bool,
  action: array
};

export default Snack;
