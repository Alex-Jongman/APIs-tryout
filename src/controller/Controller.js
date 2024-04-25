import { service } from '../service/Service';

class Controller {
  getData() {
    return service.getData();
  }
}

const controller = new Controller();

export { controller }