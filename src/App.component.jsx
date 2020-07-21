import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Cards, Chart, Picker } from './components';
import { fetchGlobalDataStart } from './redux/global/global.actions';
import covid from './img/covid.png';
import styles from './App.module.scss';

const App = ({ fetchGlobalDataStart }) => {
    useEffect(() => {
        // Mount
        fetchGlobalDataStart();

        return () => {
            // Unmount
        };
    }, [fetchGlobalDataStart]);

    return (
        <div className={styles.container}>
            <img src={covid} alt="COVID-19" className={styles.image} />
            <Cards />
            <Picker />
            <Chart />
        </div>
    );
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchGlobalDataStart }, dispatch);
export default connect(null, mapDispatchToProps)(App);
