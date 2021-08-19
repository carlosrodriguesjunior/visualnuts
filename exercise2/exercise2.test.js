import assert from 'assert';
import {exercise2} from './exercise2.js';

describe('Exercise2 Tests', () => {

    describe('Validate Rules', () => {

        it('Must return correct number of countries in Json', () => {
            assert.equal(exercise2.countCountries(), 5);
        });

        it('Must return correct country by spoken language in Json', () => {
            assert.equal(exercise2.findCountriesBySpokenLanguage('de')[0].country, "BE");
            assert.equal(exercise2.findCountriesBySpokenLanguage('de')[1].country, "DE");
            assert.equal(exercise2.findCountriesBySpokenLanguage('es')[0].country, "ES");
        });

        it('Must return correct country with Highest Number of Official language in Json', () => {
            assert.equal(exercise2.findCountriesWithHighestNumberOfOfficialLanguages().country, "BE");
        });

        it('Must return correct most common Official language in Json', () => {
            assert.equal(exercise2.findMostCommonOfficialLanguagesOfAllCountries(), "de:2");
        });
        
    });
});