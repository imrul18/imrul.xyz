import axios from 'axios'
import { baseurl } from './baseurl';
export var experienceData

axios.get(baseurl+'/experienceData')
  .then((response) => {
    experienceData = response.data;
  });

