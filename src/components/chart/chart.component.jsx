import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Line, Bar } from 'react-chartjs-2';
import { selectDailyData } from '../../redux/daily/daily.selectors';
import { selectGlobalData, selectCountry } from '../../redux/global/global.selectors';
import { fetchDailyDataStart } from '../../redux/daily/daily.actions';
import { capitalize, nFormatter } from '../../utils/base.util';
import styles from './chart.module.scss';

const Chart = ({ daily, global, country, fetchDailyDataStart }) => {
    useEffect(() => {
        // Mount
        fetchDailyDataStart();
        return () => {
            // Unmount
        };
    }, [fetchDailyDataStart]);

    let lineChart, barChart;
    if (country && daily instanceof Object) {
        console.log('Bar');
        const { lastUpdate, ...data } = global;
        const chartData = {
            labels: Object.keys(data).map(label => capitalize(label)),
            datasets: [
                {
                    label: '# of people',
                    backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                    data: Object.keys(data).map(key => data[key].value),
                },
            ],
        };
        const options = {
            legend: { display: false },
            title: { display: true, text: `Current state in ${country}` },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            callback: function (value, index, values) {
                                return nFormatter(value);
                            },
                        },
                    },
                ],
            },
        };
        barChart = <Bar data={chartData} options={options} />;
    } else if (!country && daily instanceof Array) {
        console.log('Line');
        const chartData = {
            labels: daily.slice(daily.length - 30).map(({ date }) => date),
            datasets: [
                {
                    data: daily.slice(daily.length - 30).map(({ confirmed }) => confirmed),
                    label: 'Confirmed',
                    borderColor: 'rgb(0,0,255)',
                    fill: true,
                },
                {
                    data: daily.slice(daily.length - 30).map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'rgb(255,0,0)',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true,
                },
            ],
        };
        const options = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            callback: function (value) {
                                return nFormatter(value);
                            },
                        },
                    },
                ],
                xAxes: [
                    {
                        ticks: {
                            callback: function (value) {
                                const [, month, day] = value.split('-');
                                return day + '/' + month;
                            },
                        },
                    },
                ],
            },
        };
        lineChart = <Line data={chartData} options={options} />;
    }

    return (
        <div className={styles.container}>
            {lineChart}
            {barChart}
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    daily: selectDailyData,
    global: selectGlobalData,
    country: selectCountry,
});
const mapDispatchToProps = dispatch => bindActionCreators({ fetchDailyDataStart }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Chart);
