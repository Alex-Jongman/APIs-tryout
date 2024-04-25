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
}

const osmService = new OsmService();

export { osmService }