class SunriseSunsetService {
  constructor() {
    this.serviceUrl = `https://api.sunrisesunset.io`;
  }

  getSunriseSunset(latitude, longitude) {
    const format = 'json';
    const url = `${this.serviceUrl}/${format}?lat=${latitude}&lng=${longitude}`;
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }
}

const sunriseSunsetService = new SunriseSunsetService();

export { sunriseSunsetService };