import { controller } from '../../controller/Controller';

export default class Data {
  constructor(renderElement) {
    this.renderElement = renderElement;
    this.getData();
  }

  getData() {
    controller.getData()
      .then((data) => {
        console.log(data);
      })
  }
}