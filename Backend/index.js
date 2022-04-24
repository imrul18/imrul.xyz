const express = require('express');
const headerDataRoutes = require('./routes/headerDataRoutes')
const aboutDataRoutes = require('./routes/aboutDataRoutes')
const educationDataRoutes = require('./routes/educationDataRoutes')
const skillsDataRoutes = require('./routes/skillsDataRoutes')
const experienceDataRoutes = require('./routes/experienceDataRoutes')
const serviceDataRoutes = require('./routes/serviceDataRoutes')
const projectDataRoutes = require('./routes/projectDataRoutes')
const achievementDataRoutes = require('./routes/achievementDataRoutes')
const contactDataRoutes = require('./routes/contactDataRoutes')
const sendMailRoutes = require('./routes/sendMailRoutes')
const cors = require('cors');

var app = express();

app.use(cors())
app.use(express.json());

app.use('/headerData', headerDataRoutes)
app.use('/aboutData', aboutDataRoutes)
app.use('/educationData', educationDataRoutes)
app.use('/skillsData', skillsDataRoutes)
app.use('/experienceData', experienceDataRoutes)
app.use('/serviceData', serviceDataRoutes)
app.use('/contactData', contactDataRoutes)
app.use('/projectData', projectDataRoutes)
app.use('/achievementData', achievementDataRoutes)
app.use('/sendMail', sendMailRoutes)

app.get('/', (req, res) => {
   res.send("Wellcome to Count Taka Application")
})

app.listen(5000)

