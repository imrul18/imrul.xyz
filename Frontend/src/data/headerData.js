import resume from '../assets/pdf/resume.pdf'
import axios from 'axios'
import { baseurl } from './baseurl';

export var headerData

axios.get(baseurl+'/headerData')
  .then((response) => {
    headerData = response.data[0];
    headerData = {...headerData, resumePdf: resume}
  });

