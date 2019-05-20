import React from 'react';
import { node, oneOfType, string, shape } from 'prop-types';
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Text = styled(Typography)`&& {color: white;}`;

const HighlightCard = ({ color, icon, value, label }) =>
  <Card style={{ backgroundColor: color && (color[800] || color) }}>
    <Grid container alignItems="center" spacing={8}>
      <Grid item xs={12} md={3}>
        <Grid container justify="center">
          {icon}
        </Grid>
      </Grid>
      <Grid item xs={12} md={9} style={{ backgroundColor: color && (color[600] || color) }}>
        <CardContent>
          <Text variant="h6" gutterBottom>
            {value}
          </Text>
          <Text variant="subtitle1">
            {label}
          </Text>
        </CardContent>
      </Grid>
    </Grid>
  </Card>;

HighlightCard.propTypes = {
  color: oneOfType([shape({}), string]),
  icon: node,
  value: oneOfType([node, string]),
  label: oneOfType([node, string])
};

export default HighlightCard;
