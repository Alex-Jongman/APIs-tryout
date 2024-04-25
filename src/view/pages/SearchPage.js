import { osmService } from '../../service/OsmService';

const formElement = document.querySelector('#osm_search_form');

function submitHandler(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  osmService.search(data).then((result) => {
    console.log(result);
  });
}

formElement.addEventListener('submit', submitHandler);