import axios from 'axios'
import { baseurl } from './baseurl';

export var contactsData
axios.get(baseurl+'/contactData')
  .then((response) => {
    contactsData = response.data[0];
    contactsData = {...contactsData, sheetAPI: baseurl+'/sendMail'}
  });
