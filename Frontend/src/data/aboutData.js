import axios from 'axios'
import { baseurl } from './baseurl';
export var aboutData

axios.get(baseurl+'/aboutData')
  .then((response) => {
    aboutData = response.data[0];
  });

