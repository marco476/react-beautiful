import React, { PureComponent } from 'react';
import {bool, node, oneOfType, string} from 'prop-types';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Text from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

class AsideLayout extends PureComponent {
  state = {
    isOpen: this.props.isOpen
  };

  componentDidUpdate(prevProps) {
    const { isOpen, } = this.props;

    if (isOpen !== prevProps.isOpen) {
      this.setState({ isOpen });
    }
  }

  handleOpenAside = () => this.setState({ isOpen: true });
  handleCloseAside = () => this.setState({ isOpen: false });

  render() {
    const { aside, collapsible, children, className, openText, closeText } = this.props;
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
        <Grid spacing={16} container className={className}>
          {isOpen && (
            <Grid item xs={12} md={4} lg={3} xl={2}>
              <Grid container direction="column">
                {collapsible && (
                  <Grid item>
                    <IconButton onClick={this.handleCloseAside}>
                      <ChevronLeftIcon />
                      <Text variant="subtitle1" color="textSecondary">
                        {closeText}
                      </Text>
                    </IconButton>
                  </Grid>
                )}
                <Grid item>{aside}</Grid>
              </Grid>
            </Grid>
          )}
          <Grid item {...childrenBreakpoints}>
            <Grid container direction="column">
              {!isOpen && collapsible && (
                <Grid item>
                  <IconButton onClick={this.handleOpenAside}>
                    <ChevronRightIcon />
                    <Text variant="subtitle1" color="textSecondary">
                      {openText}
                    </Text>
                  </IconButton>
                </Grid>
              )}
            </Grid>
            <Grid item>{children}</Grid>
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
  collapsible: bool,
  openText: string,
  closeText: string
};

AsideLayout.defaultProps = {
  isOpen: true,
  collapsible: true,
  openText: "Open",
  closeText: "Close"
};

export default AsideLayout;
