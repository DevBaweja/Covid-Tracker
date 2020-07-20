import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Cards, Chart, Picker } from './components';
import { fetchGlobalDataStart } from './redux/global/global.actions';
import styles from './App.module.scss';

class App extends React.Component {
    componentWillMount() {
        this.props.fetchGlobalDataStart();
    }
    render() {
        console.log(styles);
        return (
            <div className={styles.container}>
                <Cards />
                <Picker />
                <Chart />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchGlobalDataStart }, dispatch);
export default connect(null, mapDispatchToProps)(App);
