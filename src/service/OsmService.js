class OsmService {
  constructor() {
    this.serviceURL = `https://nominatim.openstreetmap.org`;
    this.options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  search(query) {
    console.log('search', query);
    const url = encodeURI(`${this.serviceURL}/search?q=${query.query}&format=json&limit=1`);
   
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error('ERROR :-(', error));
  }

  details(osmId, osmtype) {
    let osmType = '';
    switch (osmtype) {
      case 'node':
        osmType = 'N';
        break;
      case 'way':
        osmType = 'W';
        break;
      case 'relation':
        osmType = 'R';
        break;
      default:
        osmType = 'W';
    }

    const url = encodeURI(`${this.serviceURL}/details?osmtype=${osmType}&osmid=${osmId}&format=json`);
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error('ERROR :-(', error));
  }

  addressLockup(osmId, osmtype) {
    let osmType = '';
    switch (osmtype) {
      case 'node':
        osmType = 'N';
        break;
      case 'way':
        osmType = 'W';
        break;
      case 'relation':
        osmType = 'R';
        break;
      default:
        osmType = 'W';
    }

    const url = encodeURI(`${this.serviceURL}/lookup?osm_ids=${osmType}${osmId}&format=json&extratags=1`);
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error('ERROR :-(', error));
  
  }
}

const osmService = new OsmService();

export { osmService }