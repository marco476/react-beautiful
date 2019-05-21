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
      ${props => props.variant === 'success' && `background-color: ${green[600]};`}
      ${props => props.variant === 'fail' && `background-color: ${red[600]};`}
    }
  }
`;

const Snack = ({ onClose, action = [], showClose, ...rest }) => (
	<CustomSnack
    onClose={onClose}
		action={[
      ...action,
      showClose &&
        <IconButton
          key="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>,
		]}
		{...rest}
	/>
);

Snack.propTypes = {
  onClose: func.isRequired,
  showClose: bool,
  action: array
};

export default Snack;
