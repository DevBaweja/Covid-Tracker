import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { fetchCountriesDataStart } from '../../redux/countries/countries.actions';
import { changeCountry } from '../../redux/global/global.actions';
import { selectCountriesData } from '../../redux/countries/countries.selectors';

import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './picker.module.scss';

const Picker = ({ countries, fetchCountriesDataStart, changeCountry }) => {
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

    const handleChange = event => {
        const country = event.target.value;
        changeCountry(country);
    };
    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={handleChange}>
                    <option value="">Global</option>
                    {renderOptions()}
                </NativeSelect>
            </FormControl>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    countries: selectCountriesData,
});
const mapDispatchToProps = dispatch => bindActionCreators({ fetchCountriesDataStart, changeCountry }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Picker);
