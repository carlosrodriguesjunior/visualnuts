import { readFile } from "fs/promises";

class Exercise2{
    constructor (countriesInfo) {
        this.countries = countriesInfo;
    }

    countCountries () {
        return this.countries.length;
     };

     findCountriesBySpokenLanguege (language) {
        let result = [];
        this.countries.forEach(country => {
            if (country.languages.includes(language) )
                result.push(country);
        });
        return result;
     };

     findCountriesWithHighestNumberOfOfficialLanguages () {
        let result = null;
        this.countries.forEach(country => {
            
            if (!result)
                result = country;
            else
            {
                if (country.languages.length > result.languages.length)
                    result = country;
            }
            
        });
        return result;
     };

     findMostCommonOfficialLanguagesOfAllCountries () {
        let languages = {};
        this.countries.forEach(country => {
            
            country.languages.forEach(language => {
                if (!languages.hasOwnProperty(language))
                    languages[language] = 1
                else
                    languages[language]++;
            });
            
        });


        var result = [];
        for (var language in languages) {
            result.push([language, languages[language]]);
        }

        result.sort((a, b) =>{
            return a[1] - b[1];
        });

        return result.toString().split(',').join(':');
     };

}

const exercise2 = new Exercise2(JSON.parse(await readFile("./exercise2/countries.json")));

console.log(`Total of Countries ${exercise2.countCountries()}`);
console.log(`Countries that spoken 'de' ${JSON.stringify(exercise2.findCountriesBySpokenLanguege('de'))}`);
console.log(`Country with Highest Number Of Oficial Languages is ${exercise2.findCountriesWithHighestNumberOfOfficialLanguages().country}`);
console.log(`Most common offcial languages ${exercise2.findMostCommonOfficialLanguagesOfAllCountries()}`);

export {exercise2};
