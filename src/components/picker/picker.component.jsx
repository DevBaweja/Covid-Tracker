import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { fetchCountriesDataStart } from '../../redux/countries/countries.actions';
import { selectCountriesData } from '../../redux/countries/countries.selectors';

import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './picker.module.scss';

const Picker = ({ fetchCountriesDataStart, countries }) => {
    useEffect(() => {
        // Mount
        fetchCountriesDataStart();
        return () => {
            // Unmount
        };
    }, [fetchCountriesDataStart]);

    const renderOptions = () => {
        return countries.map((country, index) => (
            <option key={index} value={country}>
                {country}
            </option>
        ));
    };

    return (
        <div className="picker">
            <FormControl className={styles.formControl}>
                <NativeSelect>
                    <option value="global">Global</option>
                    {renderOptions()}
                </NativeSelect>
            </FormControl>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    countries: selectCountriesData,
});
const mapDispatchToProps = dispatch => bindActionCreators({ fetchCountriesDataStart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Picker);
