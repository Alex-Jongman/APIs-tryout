import { osmService } from '../../service/OsmService';

const formElement = document.querySelector('#osm_search_form');

function submitHandler(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  osmService.search(data).then((result) => {
    console.log(result);
    osmService.details(result[0].osm_id, result[0].osm_type).then((details) => {
      console.log(details);
    });
    osmService.addressLockup(result[0].osm_id, result[0].osm_type).then((address) => {
      console.log(address);
    });
  });
}

formElement.addEventListener('submit', submitHandler);
