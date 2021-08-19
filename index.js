import {exercise1} from './exercise1/exercise1.js';
import {exercise2} from './exercise2/exercise2.js';

console.log("Executing Exercise 1");
console.log("=====================");
exercise1.print(1,100);
console.log("=====================");
console.log("");
console.log("Executing Exercise 2");
console.log("=====================");
console.log(`Total of Countries ${exercise2.countCountries()}`);
console.log(`Countries that spoken 'de' ${JSON.stringify(exercise2.findCountriesBySpokenLanguage('de'))}`);
console.log(`Country with Highest Number Of Oficial Languages is ${exercise2.findCountriesWithHighestNumberOfOfficialLanguages().country}`);
console.log(`Most common offcial languages ${exercise2.findMostCommonOfficialLanguagesOfAllCountries()}`);
