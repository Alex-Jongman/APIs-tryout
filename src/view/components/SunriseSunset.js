import { sunriseSunsetController } from '../../controller/SunriseSunsetController';

const SUNRISE_SUNSET_TEMPLATE = '#sunrise-sunset-template'

export default class SunriseSunset {
  constructor(renderElement) {
    this.renderElement = renderElement;
    this.sunrise = '';
    this.sunset = '';
    this.getSunriseSunset();
  }

  getSunriseSunset() {
    const lat=52.084491;
    const lng=5.175848;
    sunriseSunsetController.getSunriseSunset(lat, lng)
      .then((data) => {
        this.sunrise = data.results.sunrise;
        this.sunset = data.results.sunset;
        console.log(data);
        this.render();
      });
  }

  render() {
    // TODO: Render
    const sunriseSunsetElement = document.querySelector(SUNRISE_SUNSET_TEMPLATE).content.cloneNode(true);
    sunriseSunsetElement.querySelector('.sunrise').textContent = this.sunrise;
    sunriseSunsetElement.querySelector('.sunset').textContent = this.sunset;
    this.renderElement.appendChild(sunriseSunsetElement)
  }
}