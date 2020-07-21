import React from 'react';
import { Card as Component, CardContent, Typography, Grid } from '@material-ui/core';
import { uppercase, formatDate } from '../../utils/base.util';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './card.module.scss';
const Card = ({ type, value, date, text }) => {
    return (
        <Grid item component={Component} xs={12} md={3} className={cx(styles.card, styles[type])}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {uppercase(type)}
                </Typography>
                <Typography variant="h5" gutterBottom>
                    <CountUp start={0} end={value} duration={2.5} separator=","></CountUp>
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                    {formatDate(date)}
                </Typography>
                <Typography variant="body2">
                    # of {type} {text} people
                </Typography>
            </CardContent>
        </Grid>
    );
};
export default Card;
