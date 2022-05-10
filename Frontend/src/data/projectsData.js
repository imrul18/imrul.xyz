import axios from 'axios'
import { baseurl } from './baseurl';
export var projectsData

axios.get(baseurl+'/projectData')
    .then((response) => {
        projectsData = response.data;
    });