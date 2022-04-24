import axios from 'axios'
import { baseurl } from './baseurl';
export var servicesData

axios.get(baseurl+'/serviceData')
  .then((response) => {
    servicesData = response.data;
  });

