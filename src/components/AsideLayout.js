import React, { useEffect, useState } from 'react';
import { bool, node, oneOfType, string } from 'prop-types';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';

function AsideLayout({ isOpen: open, aside, collapsible, children, className }) {
  const [isOpen, changeIsOpen] = useState(open);

  useEffect(() => {
    if (open !== isOpen) {
      changeIsOpen(open);
    }
  }, [open]);

  let childrenBreakpoints = { xs: 12 };

  if (isOpen) {
    childrenBreakpoints = {
      ...childrenBreakpoints,
      md: 8,
      lg: 9,
      xl: 10
    };
  }

  return (
    <>
      <Grid spacing={3} container className={className}>
        {isOpen && (
          <Grid item xs={12} md={4} lg={3} xl={2} container direction='column'>
            {collapsible && (
              <Grid item xs={12}>
                <Grid container justify='flex-end'>
                  <Grid item>
                    <IconButton onClick={() => changeIsOpen(false)}>
                      <ChevronLeftIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            )}
            <Grid item xs={12}>
              {aside}
            </Grid>
          </Grid>
        )}
        <Grid item {...childrenBreakpoints} container direction='column'>
          {!isOpen && collapsible && (
            <Grid item xs={12}>
              <IconButton onClick={() => changeIsOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Grid>
          )}
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

AsideLayout.propTypes = {
  className: string,
  aside: oneOfType([node, string]),
  children: oneOfType([node, string]),
  isOpen: bool,
  collapsible: bool
};

AsideLayout.defaultProps = {
  isOpen: true,
  collapsible: true
};

export default AsideLayout;
