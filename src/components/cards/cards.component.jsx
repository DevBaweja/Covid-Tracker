import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectGlobalData } from '../../redux/global/global.selectors';
import { Card } from '../';

import { Grid } from '@material-ui/core';

import styles from './cards.module.scss';

const Cards = ({ globalData }) => {
    const renderCard = () => {
        const { lastUpdate, ...data } = globalData;
        const lines = ['cases of', 'cases from', 'caused by'];

        return Object.keys(data).map((key, index) => (
            <Card key={index} type={key} value={data[key].value} date={lastUpdate} text={lines[index]} />
        ));
    };

    return (
        <div className={styles.container}>
            <Grid container spacing={4} justify="center" styles={styles.container}>
                {renderCard()}
            </Grid>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    globalData: selectGlobalData,
});
export default connect(mapStateToProps)(Cards);
