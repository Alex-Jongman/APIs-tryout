import { sunriseSunsetService } from '../service/SunriseSunsetService';

class SunriseSunsetController {

  // eslint-disable-next-line class-methods-use-this
  getSunriseSunset(latitude, longitude) {
    return sunriseSunsetService.getSunriseSunset(latitude, longitude);
  }
}

const sunriseSunsetController = new SunriseSunsetController();

export { sunriseSunsetController };