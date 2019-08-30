import React, { PureComponent } from 'react';
import { bool, node, oneOfType, string } from 'prop-types';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';

class AsideLayout extends PureComponent {
  state = {
    isOpen: this.props.isOpen
  };

  componentDidUpdate(prevProps) {
    const { isOpen } = this.props;

    if (isOpen !== prevProps.isOpen) {
      this.setState({ isOpen });
    }
  }

  handleOpenAside = () => this.setState({ isOpen: true });
  handleCloseAside = () => this.setState({ isOpen: false });

  render() {
    const { aside, collapsible, children, className } = this.props;
    const { isOpen } = this.state;

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
      <React.Fragment>
        <Grid spacing={3} container className={className}>
          {isOpen && (
            <Grid item xs={12} md={4} lg={3} xl={2}>
              <Grid container direction='column'>
                {collapsible && (
                  <Grid item xs={12}>
                    <Grid container justify='flex-end'>
                      <Grid item>
                        <IconButton onClick={this.handleCloseAside}>
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
            </Grid>
          )}
          <Grid item {...childrenBreakpoints}>
            <Grid container direction='column'>
              {!isOpen && collapsible && (
                <Grid item xs={12}>
                  <IconButton onClick={this.handleOpenAside}>
                    <MenuIcon />
                  </IconButton>
                </Grid>
              )}
              <Grid item xs={12}>
                {children}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
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
