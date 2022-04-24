import axios from 'axios'
export var projectsData

axios.get('http://localhost:5000/projectData')
    .then((response) => {
        projectsData = response.data;
    });