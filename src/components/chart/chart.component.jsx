import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Line } from 'react-chartjs-2';
import { selectDailyData } from '../../redux/daily/daily.selectors';
import { fetchDailyDataStart } from '../../redux/daily/daily.actions';
import styles from './chart.module.scss';

const Chart = ({ daily, fetchDailyDataStart }) => {
    useEffect(() => {
        // Mount
        fetchDailyDataStart();
        return () => {
            // Unmount
        };
    }, [fetchDailyDataStart]);

    // const createChartDataset = () => {}
    const total = 45;
    // 1.5 month
    const chartData = {
        labels: daily.slice(daily.length - total).map(({ date }) => date),
        datasets: [
            {
                data: daily.slice(daily.length - total).map(({ confirmed }) => confirmed),
                label: 'Confirmed',
                borderColor: 'rgb(0,0,255)',
                fill: true,
            },
            {
                data: daily.slice(daily.length - total).map(({ deaths }) => deaths),
                label: 'Deaths',
                borderColor: 'rgb(255,0,0)',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true,
            },
        ],
    };

    const lineChart = daily.length ? <Line data={chartData} /> : '';

    return <div className={styles.container}>{lineChart}</div>;
};
const mapStateToProps = createStructuredSelector({
    daily: selectDailyData,
});
const mapDispatchToProps = dispatch => bindActionCreators({ fetchDailyDataStart }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Chart);
