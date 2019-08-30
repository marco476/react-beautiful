import React from 'react';
import { bool, func, string, node, oneOfType } from 'prop-types';
import styled from 'styled-components';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import CloseIcon from '@material-ui/icons/Close';

const CustomDialog = styled(Dialog)`
  && {
    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
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

const Close = styled(CloseIcon)`
  && {
    fill: white;
  }
`;

function DialogModal({ contentClassName, titleClassName, descriptionClassName, footerClassName, onClose, title, description, footer, children, showClose, ...rest }) {
  return (
    <CustomDialog onClose={onClose} {...rest}>
      {title && <DialogTitle className={titleClassName}>{title}</DialogTitle>}
      <DialogContent className={contentClassName}>
        {showClose && onClose && (
          <FabClose onClick={onClose} color='primary' size='small'>
            <Close />
          </FabClose>
        )}
        {description && <DialogContentText className={descriptionClassName}>{description}</DialogContentText>}
        {children}
      </DialogContent>
      {footer && <DialogActions className={footerClassName}>{footer}</DialogActions>}
    </CustomDialog>
  );
}

DialogModal.propTypes = {
  className: string,
  contentClassName: string,
  titleClassName: string,
  descriptionClassName: string,
  footerClassName: string,
  showClose: bool,
  onClose: func.isRequired,
  title: oneOfType([string, node]),
  description: oneOfType([string, node]),
  footer: oneOfType([string, node]),
  children: node,
  fullScreen: bool.isRequired // By withMobileDialog HOC, thanks Material.
};

export default withMobileDialog()(DialogModal);
