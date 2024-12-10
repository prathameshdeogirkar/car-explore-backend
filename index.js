import express from 'express';
import cors from 'cors'


import { getHealth, getHome, getNotFound } from './controllers/other.js';

import { getCars } from './controllers/cars.js';

import { carsById } from './controllers/carsById.js';

import { deleteCarsById } from './controllers/deleteCarsById.js';

import { postCar } from './controllers/postCars.js';

import { putCars } from './controllers/putCars.js';




const app = express();
app.use(express.json());
app.use(cors());




app.get("/health", getHealth);


app.get("/", getHome);



app.get("/cars", getCars);


app.get("/cars/:id", carsById);



app.delete("/cars/:id", deleteCarsById);



app.post("/cars", postCar);





app.put("/cars/:id", putCars);







app.get("*", getNotFound);


const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});