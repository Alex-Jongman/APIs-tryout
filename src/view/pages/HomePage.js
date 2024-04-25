import SunriseSunset from '../components/SunriseSunset';
import Data from '../components/Data';

const element = document.querySelector('.sunrise');
const sunriseSunsetElement = new SunriseSunset(element);

const data = new Data(null);

export { sunriseSunsetElement, data };