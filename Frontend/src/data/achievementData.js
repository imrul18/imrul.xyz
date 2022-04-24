import axios from 'axios'
import { baseurl } from './baseurl';
export var achievementData = {
    bio: "Putting quantified achievements on a resume is great, but I just don’t work with hard numbers. I have no data to support the quality of my work. If you have lots of relevant experience, the heading statement of your resume will be a summary.",
    achievements : []
}

axios.get(baseurl+'/achievementData')
  .then((response) => {
    achievementData.achievements = response.data;
  });



// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/