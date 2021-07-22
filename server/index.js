import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import adSpotsRoutes from './routes/adSpots.js';
import campaignsRoutes from './routes/campaigns.js';
import designRoutes from './routes/design.js';
import logInRoutes from './routes/logIn.js';
import partnersRoutes from './routes/partners.js';
import reviewRoutes from './routes/review.js';
import signUpRoutes from './routes/signUp.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/adSpots', adSpotsRoutes);
app.use('/campaigns', campaignsRoutes);
app.use('/design', designRoutes);
app.use('/logIn', logInRoutes);
app.use('/partners', partnersRoutes);
app.use('/review', reviewRoutes);
app.use('/signUp', signUpRoutes);

const CONNECTION_URL = 'mongodb+srv://vpopa27:vpopa27@ura-app.pq49f.mongodb.net/FirstDB?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
mongoose.set('useFindAndModify', false);