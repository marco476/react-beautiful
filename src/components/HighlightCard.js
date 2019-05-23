import React from 'react';
import { node, oneOfType, string, shape } from 'prop-types';
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import isString from 'lodash.isstring';

const Text = styled(Typography)`&& {color: white;}`;

const valueSizes = {
  'large': 'h5',
  'normal': 'h6',
  'small': 'subtitle1'
};

const labelSizes = {
  'large': 'h6',
  'normal': 'subtitle1',
  'small': 'body1'
};

const HighlightCard = ({ className, size, color, icon, value, label }) =>
  <Card style={{ backgroundColor: color && (color[800] || color) }} className={className}>
    <Grid container alignItems="center" spacing={8}>
      {icon &&
        <Grid item xs={12} md={3}>
          <Grid container justify="center">
            {icon}
          </Grid>
        </Grid>
      }
      <Grid
        item
        xs={12}
        md={icon ? 9 : 12}
        style={{ backgroundColor: color && (color[600] || color) }}
      >
        <CardContent>
          {value && (
            isString(value)
              ? <Text variant={valueSizes[size]} gutterBottom={!!label}>{value}</Text>
              : value
          )}
          {label && (
            isString(label)
              ? <Text variant={labelSizes[size]}>{label}</Text>
              : label
          )}
        </CardContent>
      </Grid>
    </Grid>
  </Card>;

HighlightCard.propTypes = {
  color: oneOfType([shape({}), string]),
  icon: node,
  value: oneOfType([node, string]),
  label: oneOfType([node, string]),
  size: string,
  className: string
};

HighlightCard.defaultProps = {
  size: 'normal'
};

export default HighlightCard;
