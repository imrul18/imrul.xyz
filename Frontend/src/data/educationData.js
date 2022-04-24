import axios from 'axios'
import { baseurl } from './baseurl';
export var educationData

axios.get(baseurl+'/educationData')
  .then((response) => {
    educationData = response.data;
  });

