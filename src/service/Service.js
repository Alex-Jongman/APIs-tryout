class Service {
  constructor() {
    // this.serviceURL = `https://stallingsnet.nl/api/1/parkingcount/utrecht`;
    this.serviceURL = `https://image-charts.com/chart?chs=700x190&chd=t:60,40&cht=p3&chl=Hello%7CWorld&chan&chf=ps0-0,lg,45,ffeb3b,0.2,f44336,1|ps0-1,lg,45,8bc34a,0.2,009688,1`;
  }

  getData() {
    return fetch(this.serviceURL)
      .then((response) => response.json())
      .catch((error) => console.error('ERROR :-(', error));
  }
}

const service = new Service();

export { service }